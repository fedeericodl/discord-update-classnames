import * as core from "@actions/core";
import fs from "fs/promises";
import path from "path";
import { CSS_CLASS_NAME_REGEX } from "../constants";

// This file has some references to LuckFire's class-replacer (https://github.com/LuckFire/class-replacer/)

/**
 * Process all CSS/SCSS files in the given directory and replace class names.
 * @param files The files to process.
 * @param options The options to use when processing the files.
 */
export default async function (files: string[], classMap: Record<string, string>) {
    for (const filePath of files) {
        try {
            const originalContent = await fs.readFile(filePath, "utf-8");
            let modifiedContent = originalContent;

            const matches = [...originalContent.matchAll(CSS_CLASS_NAME_REGEX)];
            if (!matches.length) continue;

            for (const match of matches) {
                if (!match.groups) continue;

                const groups = match.groups;
                const className = groups.class_name;

                if (!className || !classMap[className]) continue;

                modifiedContent = modifiedContent.replace(new RegExp(`\\b${className}\\b`, "g"), classMap[className]);
            }

            if (modifiedContent !== originalContent) {
                await fs.writeFile(filePath, modifiedContent, "utf-8");
                core.info(`Updated ${path.relative(process.cwd(), filePath)}`);
            } else {
                core.info(`No changes made to ${path.relative(process.cwd(), filePath)}`);
            }
        } catch (error) {
            throw new Error(`Failed to process file: ${filePath}\n${error}`);
        }
    }
}
