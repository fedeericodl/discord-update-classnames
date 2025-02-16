import * as core from "@actions/core";
import * as glob from "@actions/glob";
import fs from "fs";
import path from "path";
import processThemeFiles from "./core/class-replacer";

async function run() {
    try {
        const classMapPath = path.join(__dirname, "..", "..", "data", "classNamesMap.json");
        if (!fs.existsSync(classMapPath)) throw new Error(`Class map not found at: ${classMapPath}`);

        const classMap = JSON.parse(fs.readFileSync(classMapPath, "utf-8"));

        const files = process.env.INPUT_FILES || "";
        const followSymbolicLinks = process.env.INPUT_FOLLOW_SYMBOLIC_LINKS === "true" || true;
        const ignores = process.env.INPUT_IGNORES || "";

        const ignorePatterns = ignores
            ? ignores
                  .split(/[\n,]+/)
                  .map((s) => s.trim())
                  .filter(Boolean)
            : [];
        const negativePatterns = ignorePatterns.map((p) => (p.startsWith("!") ? p : `!${p}`));
        const combinedPatterns = [files, ...negativePatterns].join("\n");

        const globber = await glob.create(combinedPatterns, { followSymbolicLinks });
        let filePaths = await globber.glob();
        filePaths = filePaths.filter((file) => [".css", ".scss"].includes(path.extname(file).toLowerCase()));

        const replacerStats = await processThemeFiles(filePaths, classMap);
        core.info("Class names replaced successfully!");

        const buildInfoPath = path.join(__dirname, "..", "..", "data", "buildInfo.json");
        if (!fs.existsSync(buildInfoPath)) throw new Error(`Build info not found at: ${buildInfoPath}`);

        const buildInfo = JSON.parse(fs.readFileSync(buildInfoPath, "utf-8"));

        core.setOutput("version-hash", buildInfo.versionHash.slice(0, 7));
        core.setOutput("built-at", buildInfo.builtAt);
        core.setOutput("formatted-built-at", new Date(parseInt(buildInfo.builtAt)).toLocaleString());
        core.setOutput("total-class-names", replacerStats.totalClassNames);
        core.setOutput("changed-class-names", replacerStats.changedClassNames);
        core.setOutput("failed-changed-class-names", replacerStats.failedChangedClassNames);
        core.setOutput("failed-changed-files", replacerStats.failedChangedFiles);
    } catch (error) {
        core.setFailed(`Replacing class names failed: ${error}`);
    }
}

run();
