import * as core from "@actions/core";
import fs from "fs";
import path from "path";
import {
    BUILD_INFO_FILE,
    BUILT_AT_REGEX,
    CHUNKS_REGEX,
    HTML_REGEX,
    HTML_SRC_REGEX,
    JSON_FIX_REGEX,
    VERSION_HASH_REGEX,
    WEBSITE,
} from "../constants";

/**
 * Checks if the build info file exists and if the version hash and built at timestamp match the current ones.
 * @param versionHash The version hash to check against.
 * @param builtAt The built at timestamp to check against.
 * @returns Whether the build info should be updated.
 */
function handleBuildInfo(versionHash: string | undefined, builtAt: string | undefined): boolean {
    let shouldUpdate = true;

    if (fs.existsSync(BUILD_INFO_FILE)) {
        const existingInfo = JSON.parse(fs.readFileSync(BUILD_INFO_FILE, "utf-8"));

        if (existingInfo.versionHash === versionHash && existingInfo.builtAt === builtAt) {
            shouldUpdate = false;
        }
    }

    if (shouldUpdate) fs.writeFileSync(BUILD_INFO_FILE, JSON.stringify({ versionHash, builtAt }, null, 2));

    if (versionHash) core.debug(`Found version hash: ${versionHash}`);
    if (builtAt) core.debug(`Found built at timestamp: ${builtAt}`);

    return shouldUpdate;
}

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
        core.debug(`Fetching chunk loader from ${WEBSITE}/assets/${scriptPaths[2]}`);
        const chunkLoaderRes = await (await fetch(`${WEBSITE}/assets/${scriptPaths[2]}`)).text();

        const versionHash = chunkLoaderRes.match(VERSION_HASH_REGEX)?.[1];
        const sentryLoaderRes = await (await fetch(`${WEBSITE}/assets/${scriptPaths[1]}`)).text();
        const builtAt = sentryLoaderRes.match(BUILT_AT_REGEX)?.[1];

        if (!handleBuildInfo(versionHash, builtAt)) return false;

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
