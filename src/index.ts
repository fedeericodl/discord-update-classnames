import fs from "fs/promises";
import path from "path";
import downloadScripts from "./core/downloader.js";
import extractClassNames from "./core/extractor.js";
import genMaps from "./core/gen-maps.js";
import { pushDataToGitHub } from "./core/github.js";

const DATA_DIRECTORY = "./data";
const SCRIPTS_DIRECTORY = path.join(DATA_DIRECTORY, "scripts");

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

    const oldPath = path.join(DATA_DIRECTORY, "chunkClassNames-old.json");
    const newPath = path.join(DATA_DIRECTORY, "chunkClassNames-new.json");

    try {
        const newExists = await fs
            .access(newPath)
            .then(() => true)
            .catch(() => false);

        if (newExists) {
            await fs.rename(newPath, oldPath);
            await fs.writeFile(newPath, JSON.stringify(classNames, null, 2));
        } else {
            const oldExists = await fs
                .access(oldPath)
                .then(() => true)
                .catch(() => false);

            const targetPath = oldExists ? newPath : oldPath;
            await fs.writeFile(targetPath, JSON.stringify(classNames, null, 2));
        }
    } catch (error) {
        console.error("Error handling files:", error);
        throw error;
    }

    const classMap = genMaps(oldPath, newPath);
    if (classMap) {
        fs.writeFile(path.join(DATA_DIRECTORY, "classNamesMap.json"), JSON.stringify(classMap, null, 2));
        console.log("Class map updated successfully!");
    }

    pushDataToGitHub();
}

main().catch((error) => {
    console.error("Unhandled error:", error);
    process.exit(1);
});
