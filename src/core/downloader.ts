import * as core from "@actions/core";
import fs from "fs";
import path from "path";
import {
    BUILD_INFO_FILE,
    BUILT_AT_REGEX,
    CHUNKS_REGEX,
    HTML_REGEX,
    JSON_FIX_REGEX,
    VERSION_HASH_REGEX,
    WEBSITE,
} from "../constants";

/**
 * Fetches text content from a URL.
 * @param url The URL to fetch from.
 * @returns A promise that resolves to the text content.
 * @throws Will throw an error if the HTTP request fails.
 */
async function fetchText(url: string): Promise<string> {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`HTTP ${res.status} while fetching ${url}`);
    }
    return res.text();
}

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
 * @throws Will throw an error if the download fails.
 */
export default async function downloadScripts(directory: string) {
    try {
        core.debug(`Fetching main page from ${WEBSITE}/app`);
        const siteRes = await fetchText(`${WEBSITE}/app`);

        const scriptPaths = Array.from(siteRes.matchAll(HTML_REGEX))
            .map((match) => match[1])
            .filter((p): p is string => p !== undefined);

        if (scriptPaths.length === 0) throw new Error("No scripts found");

        core.debug(`Found script paths: ${JSON.stringify(scriptPaths)}`);

        const mainEntrypointPath = scriptPaths.find((p) => p.startsWith("web"));
        if (!mainEntrypointPath) throw new Error("Main entrypoint ('web') script not found");

        core.debug(`Fetching main entrypoint ('web') from ${WEBSITE}/assets/${mainEntrypointPath}`);
        const mainEntrypointRes = await fetchText(`${WEBSITE}/assets/${mainEntrypointPath}`);

        const versionHash = mainEntrypointRes.match(VERSION_HASH_REGEX)?.[1];

        const sentryEntrypointPath = scriptPaths.find((p) => p.includes("sentry"));
        if (!sentryEntrypointPath) throw new Error("Sentry entrypoint script not found");

        const sentryEntrypointRes = await fetchText(`${WEBSITE}/assets/${sentryEntrypointPath}`);
        const builtAt = sentryEntrypointRes.match(BUILT_AT_REGEX)?.[1];

        if (!handleBuildInfo(versionHash, builtAt)) return false;

        core.debug(`Removing and recreating directory: ${directory}`);
        fs.rmSync(directory, { recursive: true, force: true });
        fs.mkdirSync(directory, { recursive: true });

        const chunks = [...mainEntrypointRes.matchAll(CHUNKS_REGEX)]
            .map((m) => m[1])
            .filter((v): v is string => !!v)
            .map((v) => v.replace(JSON_FIX_REGEX, '"$1":'));

        if (!chunks[1]) throw new Error("No chunks found");

        const chunksData = JSON.parse(chunks[1]);
        Object.values(chunksData).forEach((chunk) => scriptPaths.push(`${chunk}.js`));

        let completed = 0;
        const total = scriptPaths.length;

        for (const script of scriptPaths) {
            completed++;
            core.debug(`(${completed}/${total}) Downloading: ${script}`);

            const res = await fetchText(`${WEBSITE}/assets/${script}`);
            fs.writeFileSync(path.join(directory, script), res);
        }

        return true;
    } catch (error) {
        throw new Error(`Download failed: ${error}`);
    }
}
