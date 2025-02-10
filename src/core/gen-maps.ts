import * as core from "@actions/core";
import fs from "fs";
import { MAP_PATH_FILE } from "../constants";

/**
 * Check if most chunk IDs changed between two JSON files.
 * @param oldFile The old JSON file.
 * @param newFile The new JSON file.
 * @param chunkChangeThreshold The threshold for the percentage of new chunk IDs to consider the content as changed.
 * @returns Whether the content is the same or an object with added and removed classes.
 */
function checkChunks(
    oldFile: Record<string, Record<string, string>>,
    newFile: Record<string, Record<string, string>>,
    chunkChangeThreshold = 0.8,
) {
    const oldChunkIds = Object.keys(oldFile);
    const newChunkIds = Object.keys(newFile);

    // Check if most chunk IDs changed (e.g., 80% are new)
    const newChunkIdCount = newChunkIds.filter((id) => !oldChunkIds.includes(id)).length;
    const isMostlyChanged = newChunkIdCount / newChunkIds.length >= chunkChangeThreshold;

    core.debug(`Chunk ID changes: ${newChunkIdCount} new of ${newChunkIds.length} total`);

    if (!isMostlyChanged) {
        core.debug("Not enough chunk ID changes to trigger the content checking");
        return false;
    }

    const flattenAndSort = (file: Record<string, Record<string, string>>) => {
        return Object.values(file)
            .flatMap((chunk) => Object.values(chunk))
            .sort();
    };

    const oldClasses = flattenAndSort(oldFile);
    const newClasses = flattenAndSort(newFile);

    const isSameContent = JSON.stringify(oldClasses) === JSON.stringify(newClasses);

    if (isSameContent) {
        core.info("Content is identical (class names match after sorting)");
        return true;
    } else {
        core.info("Content differs (class names don't match after sorting)");

        const oldSet = new Set(oldClasses);
        const newSet = new Set(newClasses);

        const added = newClasses.filter((c) => !oldSet.has(c));
        const removed = oldClasses.filter((c) => !newSet.has(c));

        return { added, removed };
    }
}

/**
 * Generate a map of old class names to new class names based on the differences between two JSON files.
 * If class names are concatenated (separated by whitespace), each individual class name is mapped separately.
 * @param oldJsonPath The path to the old JSON file.
 * @param newJsonPath The path to the new JSON file.
 * @returns The class map.
 */
export default function (oldJsonPath: string, newJsonPath: string) {
    try {
        core.debug(`Reading old JSON data from ${oldJsonPath}`);
        const oldData = JSON.parse(fs.readFileSync(oldJsonPath, "utf-8"));
        core.debug(`Reading new JSON data from ${newJsonPath}`);
        const newData = JSON.parse(fs.readFileSync(newJsonPath, "utf-8"));

        // This check is necessary: sometimes chunk IDs may change, but the content is the same
        const chunkCheckResult = checkChunks(oldData, newData);

        if (chunkCheckResult === true) {
            core.info("Chunk IDs are mostly changed, with content being identical. Skipping class map generation.");
            return;
        } else if (chunkCheckResult) {
            core.warning("Chunk IDs are mostly changed, with content being different.");
            core.info(`Added classes: ${chunkCheckResult.added.join(", ")}`);
            core.info(`Removed classes: ${chunkCheckResult.removed.join(", ")}`);
            return;
        }

        // Load existing map or create new
        let classMap: Record<string, string> = {};
        try {
            core.debug(`Reading existing class map from ${MAP_PATH_FILE}`);
            classMap = JSON.parse(fs.readFileSync(MAP_PATH_FILE, "utf-8"));
        } catch {
            core.debug("No existing class map found, starting with an empty map");
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

                        // Check if the class names are concatenated
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
        throw new Error(`Failed to generate class map: ${error}`);
    }
}
