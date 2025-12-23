import * as core from "@actions/core";
import fs from "fs";
import { DATA_DIRECTORY, MAP_PATH_FILE, MODULE_PATH_FILE, SCRIPTS_DIRECTORY } from "./constants";
import extractClassNames, { type ExportMap } from "./core/class-extractor";
import downloadScripts from "./core/downloader";
import genMaps from "./core/gen-maps";

async function run() {
    try {
        fs.mkdirSync(DATA_DIRECTORY, { recursive: true });

        core.info("Downloading files...");
        const isDownloaded = await downloadScripts(SCRIPTS_DIRECTORY);
        if (!isDownloaded) {
            core.info("Files already downloaded, skipping download and extraction.");
            return;
        }
        core.info("All files downloaded successfully!");

        const classNames = extractClassNames(SCRIPTS_DIRECTORY);
        core.info("Extracted class names from all files.");

        let oldClassNames: ExportMap = {};
        try {
            core.debug(`Reading existing module class names from ${MODULE_PATH_FILE}`);
            oldClassNames = JSON.parse(fs.readFileSync(MODULE_PATH_FILE, "utf-8"));
        } catch {
            core.debug("No existing module class names found, starting with an empty object");
        }

        fs.writeFileSync(MODULE_PATH_FILE, JSON.stringify(classNames, null, 2));

        const classMap = genMaps(oldClassNames, classNames);
        if (classMap) {
            fs.writeFileSync(MAP_PATH_FILE, JSON.stringify(classMap, null, 2));
            core.info("Class map updated successfully!");
        } else {
            core.info("No changes found in class names.");
        }
    } catch (error) {
        core.setFailed(`Extracting class names failed: ${error}`);
    }
}

run();
