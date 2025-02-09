import * as core from "@actions/core";
import fs from "fs";
import path from "path";
import { CHUNKS_REGEX, HTML_REGEX, HTML_SRC_REGEX, JSON_FIX_REGEX, VERSION_HASH_REGEX, WEBSITE } from "../constants";

/**
 * Downloads all scripts from the Discord website and saves them to the specified directory.
 * @param directory The directory to save the scripts to.
 * @returns Whether the download was successful.
 */
export default async function (directory: string) {
    try {
        core.debug(`Fetching main page from ${WEBSITE}/app`);
        const siteRes = await (await fetch(`${WEBSITE}/app`)).text();
        const scriptPaths = siteRes.match(HTML_REGEX)?.map((s) => s.match(HTML_SRC_REGEX)?.[0].slice(13, -1));

        if (!scriptPaths || scriptPaths.length === 0) throw new Error("No scripts found");

        core.debug(`Found script paths: ${JSON.stringify(scriptPaths)}`);

        // 0 is the position of the chunk loader in the scripts
        core.debug(`Fetching chunk loader from ${WEBSITE}/assets/${scriptPaths[0]}`);
        const chunkLoaderRes = await (await fetch(`${WEBSITE}/assets/${scriptPaths[0]}`)).text();

        const versionHash = chunkLoaderRes.match(VERSION_HASH_REGEX)?.[1];
        const versionHashPath = path.join(path.dirname(directory), "VERSION_HASH");
        if (versionHash) {
            core.debug(`Found version hash: ${versionHash}`);
            if (fs.existsSync(versionHashPath)) {
                const existingHash = fs.readFileSync(versionHashPath, "utf-8");
                if (existingHash === versionHash) {
                    return false;
                }
            }

            fs.writeFileSync(versionHashPath, versionHash);
        }

        core.debug(`Removing and recreating directory: ${directory}`);
        fs.rmSync(directory, { recursive: true, force: true });
        fs.mkdirSync(directory, { recursive: true });

        let matches;
        const chunks = [];
        while ((matches = CHUNKS_REGEX.exec(chunkLoaderRes))) {
            if (matches[1]) {
                chunks.push(matches[1].replace(JSON_FIX_REGEX, '"$1":'));
            }
        }

        if (!chunks[1]) throw new Error("No chunks found");

        core.debug(`Found chunks: ${chunks.length}`);
        const chunksData = JSON.parse(chunks[1]);
        Object.values(chunksData).forEach((chunk) => scriptPaths.push(`${chunk}.js`));

        let completed = 0;
        const total = scriptPaths.length;

        for (const script of scriptPaths) {
            if (!script) continue;

            completed++;
            core.debug(`(${completed}/${total}) Downloading: ${script}`);

            const res = await (await fetch(`${WEBSITE}/assets/${script}`)).text();
            fs.writeFileSync(path.join(directory, script), res);
        }
        return true;
    } catch (error) {
        throw new Error(`Download failed: ${error}`);
    }
}
