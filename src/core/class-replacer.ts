import * as core from "@actions/core";
import fs from "fs/promises";
import path from "path";
import { CSS_CLASS_NAME_REGEX } from "../constants";

interface ClassReplacerStats {
    /**
     * The total number of class names found in all files.
     */
    totalClassNames: number;

    /**
     * The number of class names that were successfully changed.
     */
    changedClassNames: number;

    /**
     * The number of class names that failed to be changed.
     */
    failedChangedClassNames: number;

    /**
     * A list of files that failed to have class names changed.
     */
    failedChangedFiles: string;
}

// This file has some references to LuckFire's class-replacer (https://github.com/LuckFire/class-replacer/)

/**
 * Process all CSS/SCSS files in the given directory and replace class names.
 * @param files The files to process.
 * @param options The options to use when processing the files.
 */
export default async function (
    files: string[],
    classMap: Record<string, string>,
    ignoredClassNames: string[] = [],
): Promise<ClassReplacerStats> {
    const stats = {
        totalClassNames: 0,
        changedClassNames: 0,
        failedChangedClassNames: 0,
        failedChangedFiles: "",
    };

    const fileFailures: Record<string, { failed: number; total: number }> = {};

    for (const filePath of files) {
        try {
            const originalContent = await fs.readFile(filePath, "utf-8");
            let modifiedContent = originalContent;

            const matches = [...originalContent.matchAll(CSS_CLASS_NAME_REGEX)];
            if (!matches.length) continue;

            const relativePath = path.relative(process.cwd(), filePath);
            fileFailures[relativePath] = { failed: 0, total: matches.length };

            for (const match of matches) {
                if (!match.groups) continue;

                const groups = match.groups;
                const className = groups.class_name;

                if (className && ignoredClassNames.includes(className)) {
                    continue;
                }

                stats.totalClassNames++;

                if (!className || !classMap[className]) {
                    stats.failedChangedClassNames++;
                    fileFailures[relativePath].failed++;
                    continue;
                }

                modifiedContent = modifiedContent.replace(new RegExp(`\\b${className}\\b`, "g"), classMap[className]);
                stats.changedClassNames++;
            }

            if (modifiedContent !== originalContent) {
                await fs.writeFile(filePath, modifiedContent, "utf-8");
                core.info(`Updated ${relativePath}`);
            } else {
                core.info(`No changes made to ${relativePath}`);
            }
        } catch (error) {
            throw new Error(`Failed to process file: ${filePath}\n${error}`);
        }
    }

    stats.failedChangedFiles = Object.entries(fileFailures)
        .filter(([, stats]) => stats.failed > 0)
        .map(([file, stats]) => `  - \`${file}\`: ${stats.failed}/${stats.total}`)
        .join("\n");

    return stats;
}
