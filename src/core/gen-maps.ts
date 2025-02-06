import fs from "fs";
import { MAP_PATH_FILE } from "../constants.js";

/**
 * Generate a map of old class names to new class names based on the differences between two JSON files.
 * If class names are concatenated (separated by whitespace), each individual class name is mapped separately.
 * @param oldJsonPath The path to the old JSON file.
 * @param newJsonPath The path to the new JSON file.
 * @returns The class map.
 */
export default function (oldJsonPath: string, newJsonPath: string) {
    try {
        const oldData = JSON.parse(fs.readFileSync(oldJsonPath, "utf-8"));
        const newData = JSON.parse(fs.readFileSync(newJsonPath, "utf-8"));

        // Load existing map or create new
        let classMap: Record<string, string> = {};
        try {
            classMap = JSON.parse(fs.readFileSync(MAP_PATH_FILE, "utf-8"));
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            // File doesn't exist yet, start with empty map
        }

        let changesFound = false;

        for (const key of Object.keys(oldData)) {
            if (newData[key]) {
                const oldEntry = oldData[key];
                const newEntry = newData[key];

                const allKeys = new Set([...Object.keys(oldEntry), ...Object.keys(newEntry)]);

                for (const prop of allKeys) {
                    if (oldEntry[prop] && newEntry[prop] && oldEntry[prop] !== newEntry[prop]) {
                        const oldValue = oldEntry[prop];
                        const newValue = newEntry[prop];

                        // Check if the class names are concatenated (i.e., contain spaces)
                        if (oldValue.includes(" ") && newValue.includes(" ")) {
                            const oldClasses = oldValue.split(/\s+/);
                            const newClasses = newValue.split(/\s+/);

                            // If both have the same number of classes, map them individually
                            if (oldClasses.length === newClasses.length) {
                                for (let i = 0; i < oldClasses.length; i++) {
                                    if (!classMap[oldClasses[i]]) {
                                        classMap[oldClasses[i]] = newClasses[i];
                                        changesFound = true;
                                    }
                                }
                            } else {
                                // If they don't match up, fallback to mapping the whole string
                                if (!classMap[oldValue]) {
                                    classMap[oldValue] = newValue;
                                    changesFound = true;
                                }
                            }
                        } else {
                            // For single class names or if only one side is concatenated, do a direct mapping
                            if (!classMap[oldValue]) {
                                classMap[oldValue] = newValue;
                                changesFound = true;
                            }
                        }
                    }
                }
            }
        }

        if (changesFound) return classMap;
    } catch (error) {
        throw new Error(`Error processing files: ${error}`);
    }
}
