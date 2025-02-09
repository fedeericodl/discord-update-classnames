import * as core from "@actions/core";
import fs from "fs/promises";
import { DATA_DIRECTORY, MAP_PATH_FILE, NEW_PATH_FILE, OLD_PATH_FILE, SCRIPTS_DIRECTORY } from "./constants.js";
import extractClassNames from "./core/class-extractor";
import downloadScripts from "./core/downloader";
import genMaps from "./core/gen-maps";
import { pushDataToGitHub } from "./core/github";

async function run() {
    try {
        await fs.mkdir(DATA_DIRECTORY, { recursive: true });

        core.info("Downloading files...");
        const isDownloaded = await downloadScripts(SCRIPTS_DIRECTORY);
        if (!isDownloaded) {
            core.info("Files already downloaded, skipping download and extraction.");
            return;
        }
        core.info("All files downloaded successfully!");

        const classNames = extractClassNames(SCRIPTS_DIRECTORY);
        core.info("Extracted class names from all files.");

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

        const classMap = genMaps(OLD_PATH_FILE, NEW_PATH_FILE);
        if (classMap) {
            fs.writeFile(MAP_PATH_FILE, JSON.stringify(classMap, null, 2));
            core.info("Class map updated successfully!");
        } else {
            core.info("No changes found in class names.");
        }

        pushDataToGitHub();
    } catch (error) {
        core.setFailed(`Extracting class names failed: ${error}`);
    }
}

run();
