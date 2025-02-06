import fs from "fs/promises";
import { DATA_DIRECTORY, MAP_PATH_FILE, NEW_PATH_FILE, OLD_PATH_FILE, SCRIPTS_DIRECTORY } from "./constants.js";
import downloadScripts from "./core/downloader.js";
import extractClassNames from "./core/extractor.js";
import genMaps from "./core/gen-maps.js";
import { pushDataToGitHub } from "./core/github.js";

async function main() {
    await fs.mkdir(DATA_DIRECTORY, { recursive: true });

    const isDownloaded = await downloadScripts(SCRIPTS_DIRECTORY);
    if (!isDownloaded) {
        console.log("Files already downloaded, skipping download and extraction.");
        return;
    }
    console.log("\nAll files downloaded successfully!");

    const classNames = extractClassNames(SCRIPTS_DIRECTORY);
    console.log("Extracted class names from all files.");

    try {
        const newExists = await fs
            .access(NEW_PATH_FILE)
            .then(() => true)
            .catch(() => false);

        if (newExists) {
            await fs.rename(NEW_PATH_FILE, OLD_PATH_FILE);
            await fs.writeFile(NEW_PATH_FILE, JSON.stringify(classNames, null, 2));
        } else {
            const oldExists = await fs
                .access(OLD_PATH_FILE)
                .then(() => true)
                .catch(() => false);

            const targetPath = oldExists ? NEW_PATH_FILE : OLD_PATH_FILE;
            await fs.writeFile(targetPath, JSON.stringify(classNames, null, 2));
        }
    } catch (error) {
        console.error("Error handling files:", error);
        throw error;
    }

    const classMap = genMaps(OLD_PATH_FILE, NEW_PATH_FILE);
    if (classMap) {
        fs.writeFile(MAP_PATH_FILE, JSON.stringify(classMap, null, 2));
        console.log("Class map updated successfully!");
    } else {
        console.log("No changes found in class names.");
    }

    pushDataToGitHub();
}

main().catch((error) => {
    console.error("Unhandled error:", error);
    process.exit(1);
});
