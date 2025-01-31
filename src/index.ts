import path from "path";
import fs from "fs";
import downloadScripts from "./downloader.js";
import extractClassNames from "./extractor.js";

const DATA_DIRECTORY = "./data";
const SCRIPTS_DIRECTORY = path.join(DATA_DIRECTORY, "scripts");

async function main() {
    fs.mkdirSync(DATA_DIRECTORY, { recursive: true });

    const isDownloaded = await downloadScripts(SCRIPTS_DIRECTORY);
    if (!isDownloaded) {
        console.log("Files already downloaded, skipping download and extraction.");
        return;
    }

    const classNames = extractClassNames(SCRIPTS_DIRECTORY);

    const oldPath = path.join(DATA_DIRECTORY, "chunkClassNames-old.json");
    const newPath = path.join(DATA_DIRECTORY, "chunkClassNames-new.json");

    const newExists = fs.existsSync(newPath);
    if (newExists) {
        fs.renameSync(newPath, oldPath);
        fs.writeFileSync(newPath, JSON.stringify(classNames, null, 2));
    } else {
        const oldExists = fs.existsSync(oldPath);
        if (oldExists) {
            fs.writeFileSync(newPath, JSON.stringify(classNames, null, 2));
        } else {
            fs.writeFileSync(oldPath, JSON.stringify(classNames, null, 2));
        }
    }
}

main().catch((error) => {
    console.error("Unhandled error:", error);
    process.exit(1);
});
