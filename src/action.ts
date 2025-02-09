import * as core from "@actions/core";
import * as glob from "@actions/glob";
import fs from "fs";
import path from "path";
import processThemeFiles from "./core/class-replacer";
import { createUpdatePR } from "./core/github";

async function run() {
    try {
        const classMapPath = path.join(__dirname, "..", "..", "data", "classNamesMap.json");
        if (!fs.existsSync(classMapPath)) throw new Error(`Class map not found at: ${classMapPath}`);

        const classMap = JSON.parse(fs.readFileSync(classMapPath, "utf-8"));

        const files = core.getInput("files");
        const followSymbolicLinks = core.getBooleanInput("follow-symbolic-links");
        const ignores = core.getInput("ignores");

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

        await processThemeFiles(filePaths, classMap);
        core.info("Class names replaced successfully!");

        createUpdatePR();
    } catch (error) {
        core.setFailed(`Replacing class names failed: ${error}`);
    }
}

run();
