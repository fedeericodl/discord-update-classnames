import fs from "fs";
import path from "path";

const WEBSITE = "https://canary.discord.com";
const HTML_REGEX = /<script defer src="\/assets\/[a-z0-9.]+\.js"><\/script>/g;
const HTML_SRC_REGEX = /src="[^"]+"/g;
const CHUNKS_REGEX = /function\(\w+\){return""\+\(({(?:\w+:"\w+",)*\w+:"\w+"})\)/g;
const JSON_FIX_REGEX = /([a-z0-9]*):/g;

/**
 * Ensures a directory is clean by removing all files and creating the directory if it doesn't exist.
 * @param directory The directory to ensure is clean.
 */
function ensureCleanDirectory(directory: string) {
    fs.rmSync(directory, { recursive: true, force: true });
    fs.mkdirSync(directory, { recursive: true });
}

/**
 * Downloads all scripts from the Discord website and saves them to the specified directory.
 * @param directory The directory to save the scripts to.
 * @returns Whether the download was successful.
 */
export default async function (directory: string) {
    try {
        const siteRes = await (await fetch(`${WEBSITE}/app`)).text();
        const scriptPaths = siteRes.match(HTML_REGEX)?.map((s) => s.match(HTML_SRC_REGEX)?.[0].slice(13, -1));

        if (!scriptPaths || scriptPaths.length === 0) throw new Error("No scripts found");

        // 0 is the position of the chunk loader in the scripts
        const chunkLoaderRes = await (await fetch(`${WEBSITE}/assets/${scriptPaths[0]}`)).text();

        const versionHash = chunkLoaderRes.match(/versionHash:\s*"([a-zA-Z0-9]{40})"/)?.[1];
        const versionHashPath = path.join(path.dirname(directory), "VERSION_HASH");
        if (versionHash) {
            if (fs.existsSync(versionHashPath)) {
                const existingHash = fs.readFileSync(versionHashPath, "utf8");
                if (existingHash === versionHash) {
                    process.stdout.write("\x1b[32mFiles already downloaded, skipping download.\x1b[0m\n");
                    return false;
                }
            }

            fs.writeFileSync(versionHashPath, versionHash);
        }

        ensureCleanDirectory(directory);

        let matches;
        const chunks = [];
        while ((matches = CHUNKS_REGEX.exec(chunkLoaderRes))) {
            if (matches[1]) {
                chunks.push(matches[1].replace(JSON_FIX_REGEX, '"$1":'));
            }
        }

        if (!chunks[1]) throw new Error("No chunks found");

        const chunksData = JSON.parse(chunks[1]);
        Object.values(chunksData).forEach((chunk) => scriptPaths.push(`${chunk}.js`));

        let completed = 0;
        const total = scriptPaths.length;

        for (const script of scriptPaths) {
            if (!script) continue;

            completed++;
            process.stdout.write(`\x1b[2K\r(${completed}/${total}) Downloading: ${script}`);

            const res = await (await fetch(`${WEBSITE}/assets/${script}`)).text();
            fs.writeFileSync(path.join(directory, script), res);
        }

        process.stdout.write("\n\x1b[32mAll files downloaded successfully!\x1b[0m\n");
        return true;
    } catch (error) {
        process.stdout.write("\n\x1b[31mDownload failed:\x1b[0m\n");
        console.error(error instanceof Error ? error.message : error);
        process.exit(1);
    }
}
