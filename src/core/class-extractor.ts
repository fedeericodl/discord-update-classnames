import * as core from "@actions/core";
import * as acorn from "acorn";
import * as walk from "acorn-walk";
import fs from "fs";
import path from "path";
import { CLASS_NAME_REGEX } from "../constants";

/**
 * Checks if a node is a chunk property.
 * @param node The node to check.
 * @returns Whether the node is a chunk property.
 */
function isChunkProperty(node: acorn.Property | acorn.AssignmentProperty) {
    return (
        node.type === "Property" &&
        node.key.type === "Literal" &&
        typeof node.key.value === "number" &&
        typeof node.key.raw === "string" &&
        node.value.type === "FunctionExpression"
    );
}

/**
 * Processes a file and returns the exports data.
 * @param code The code to process.
 * @returns The exports data.
 */
function processFile(code: string) {
    core.debug("Parsing code to AST");
    const ast = acorn.parse(code, {
        ecmaVersion: "latest",
        sourceType: "script",
    });

    const exportsData: Record<string, Record<string, string>> = {};

    walk.simple(ast, {
        Property(node) {
            if (!isChunkProperty(node)) return;
            if (node.key.type !== "Literal") {
                // This should never happen
                // If it's a chunk property, the key should always be a literal
                core.warning(`Invalid chunk key: ${node.key}`);
                return;
            }
            if (typeof node.key.value !== "number") {
                // Chunk IDs are always numbers/strings
                core.warning(`Invalid chunk key value: ${node.key}`);
                return;
            }

            const chunkId = node.key.value;
            const func = node.value;

            if (func.type !== "FunctionExpression") {
                // This should never happen as well
                // If it's a chunk property, the value should always be a function expression
                core.warning(`Invalid chunk value: ${func}`);
                return;
            }
            const body = func.body.body;

            // Typically chunks that export classes have an exports object
            // This handles 4 different cases of exporting classes
            // Conditions are a little complex, but it's to be sure we're getting the right chunks
            for (const statement of body) {
                if (statement.type === "ExpressionStatement") {
                    const expr = statement.expression;
                    if (
                        expr.type === "AssignmentExpression" &&
                        expr.left.type === "MemberExpression" &&
                        expr.left.property.type === "Identifier" &&
                        expr.left.property.name === "exports"
                    ) {
                        // e.exports = { ... }
                        Object.assign((exportsData[chunkId] ||= {}), extractExports(expr.right));
                    } else if (
                        expr.type === "CallExpression" &&
                        expr.arguments[0]?.type === "AssignmentExpression" &&
                        expr.arguments[0].left.type === "MemberExpression" &&
                        expr.arguments[0].left.property.type === "Identifier" &&
                        expr.arguments[0].left.property.name === "exports"
                    ) {
                        // t.r((e.exports = { ... }))
                        Object.assign((exportsData[chunkId] ||= {}), extractExports(expr.arguments[0].right));
                    }
                } else if (statement.type === "VariableDeclaration") {
                    const varId = statement.declarations[0]?.id;
                    const varName = varId && varId.type === "Identifier" ? varId.name : undefined;
                    const varValue = statement.declarations[0]?.init;
                    if (!varName || !varValue) return;

                    for (const s of func.body.body || []) {
                        if (s.type !== "ExpressionStatement") continue;

                        const expr = s.expression;
                        if (
                            expr.type === "AssignmentExpression" &&
                            expr.left.type === "MemberExpression" &&
                            expr.left.property.type === "Identifier" &&
                            expr.left.property.name === "exports" &&
                            expr.right.type === "Identifier" &&
                            expr.right.name === varName
                        ) {
                            // var i = { ... }; e.exports = i
                            Object.assign((exportsData[chunkId] ||= {}), extractExports(varValue));
                        } else if (
                            expr.type === "CallExpression" &&
                            expr.arguments[0]?.type === "AssignmentExpression" &&
                            expr.arguments[0].left.type === "MemberExpression" &&
                            expr.arguments[0].left.property.type === "Identifier" &&
                            expr.arguments[0].left.property.name === "exports" &&
                            expr.arguments[0].right.type === "Identifier" &&
                            expr.arguments[0].right.name === varName
                        ) {
                            // var i = { ... }; n.r((e.exports = i))
                            Object.assign((exportsData[chunkId] ||= {}), extractExports(varValue));
                        }
                    }
                }
            }
        },
    });

    return exportsData;
}

/**
 * Processes an expression node and returns the concatenated class name.
 * @param node The expression node.
 * @returns The concatenated class name.
 */
function processExpression(node: acorn.Expression): string {
    if (node.type === "BinaryExpression") {
        if (node.left.type === "PrivateIdentifier") {
            // node.left shouldn't be a PrivateIdentifier
            // but let's report it just in case it is
            core.warning(`Invalid class name: ${node.left.name}`);
        }

        const left = node.left.type !== "PrivateIdentifier" ? processExpression(node.left) : "";
        const right = processExpression(node.right);
        return left + right;
    } else if (node.type === "Literal" && node.value) {
        return node.value.toString();
    } else if (node.type === "MemberExpression") {
        if (
            node.object.type === "CallExpression" &&
            node.object.arguments[0]?.type === "Literal" &&
            node.property.type === "Identifier"
        ) {
            const chunkId = node.object.arguments[0].value;
            const property = node.property.name;
            if (chunkId && property) {
                // Return a reference to the class name in another chunk
                // This is a way to handle concatenated class names
                // that are later resolved in a separate step on the extractor
                // Example: (+1.className)
                return `(+${chunkId}.${property})`;
            }
        }
        return "";
    }
    return "";
}

/**
 * Checks if a string is a valid class name.
 * @param string The string to check.
 * @returns Whether the string is a valid class name.
 */
function isValidClassName(string: string) {
    return CLASS_NAME_REGEX.test(string);
}

/**
 * Extracts the exports from an object expression.
 * @param node The object expression node.
 * @returns The extracted exports.
 */
function extractExports(node: acorn.Expression | null | undefined) {
    const exports: Record<string, string> = {};

    if (node && node.type === "ObjectExpression") {
        node.properties.forEach((prop) => {
            if (prop.type === "Property" && prop.value.type === "BinaryExpression") {
                // Catch class names concatenated with other class names
                const className = processExpression(prop.value);
                if (className && prop.key.type === "Identifier") {
                    exports[prop.key.name] = className;
                }
            } else if (
                prop.type === "Property" &&
                prop.value.type === "Literal" &&
                prop.value.value &&
                (prop.key.type === "Identifier" || prop.key.type === "Literal") &&
                isValidClassName(prop.value.value.toString())
            ) {
                // Catch normal class names
                const keyName = prop.key.type === "Identifier" ? prop.key.name : prop.key.value;
                if (keyName) exports[keyName.toString()] = prop.value.value.toString();
            }
        });
    }

    return exports;
}

/**
 * Resolves class references in the exports data.
 * @param allExports The exports data.
 */
function resolveClassReferences(allExports: Record<string, Record<string, string>>) {
    core.debug("Resolving class references in exports data");
    Object.keys(allExports).forEach((chunkId) => {
        const chunkExports = allExports[chunkId];
        if (!chunkExports) return;

        Object.keys(chunkExports).forEach((className) => {
            const classValue = chunkExports[className];

            if (typeof classValue === "string") {
                const regex = /\(\+(\d+)\.(\w+)\)/g;
                let resolvedClassValue = classValue;

                resolvedClassValue = resolvedClassValue.replace(regex, (match, refChunkId, refProperty) => {
                    if (allExports[refChunkId]?.[refProperty]) {
                        return allExports[refChunkId][refProperty];
                    } else {
                        core.warning(`Reference to ${refChunkId}.${refProperty} not found.`);
                        return match;
                    }
                });

                if (allExports[chunkId]) {
                    allExports[chunkId][className] = resolvedClassValue;
                }
            } else {
                core.warning(`Expected a string value for className "${className}", but got ${typeof classValue}.`);
            }
        });
    });
}

/**
 * Processes all files in a directory and returns the exports data.
 * @param directory The directory to process.
 * @returns The exports data.
 */
export default function (directory: string) {
    core.debug(`Processing directory: ${directory}`);
    const allExports: Record<string, Record<string, string>> = {};

    const files = fs.readdirSync(directory);
    if (files.length === 0) throw new Error(`No files found in directory: ${directory}`);

    files.forEach((file) => {
        const filePath = path.join(directory, file);
        core.debug(`Processing file: ${filePath}`);
        const code = fs.readFileSync(filePath, "utf-8");

        const exportsData = processFile(code);
        Object.assign(allExports, exportsData);
    });

    resolveClassReferences(allExports);

    // Remove empty exports
    Object.keys(allExports).forEach((key) => {
        if (allExports[key] && Object.keys(allExports[key]).length === 0) {
            delete allExports[key];
        }
    });

    return allExports;
}
