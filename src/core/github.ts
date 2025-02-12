import * as core from "@actions/core";
import * as github from "@actions/github";
import { execSync } from "child_process";

export async function createUpdatePR() {
    try {
        const token = process.env.GITHUB_TOKEN;
        if (!token) throw new Error("GITHUB_TOKEN is not set");

        execSync('git config --global user.name "github-actions[bot]"');
        execSync('git config --global user.email "41898282+github-actions[bot]@users.noreply.github.com"');

        const targetBranch = core.getInput("target-branch");
        const commitMessage = core.getInput("commit-message");
        const prTitle = core.getInput("pr-title");

        // Check if branch exists
        const branchExists = execSync(`git ls-remote --heads origin ${targetBranch}`).toString().trim();
        if (branchExists) {
            // Checkout existing branch
            execSync(`git checkout ${targetBranch}`);
        } else {
            // Create and checkout new branch
            execSync(`git checkout -b ${targetBranch}`);
        }

        // Commit changes
        execSync("git add .");
        const status = execSync("git status --porcelain").toString().trim();

        if (!status) {
            core.info("No changes detected. Skipping PR creation.");
            return;
        }

        execSync(`git commit -m "${commitMessage}"`);
        execSync(`git push -u origin ${targetBranch}`);

        if (!branchExists) {
            // Create pull request
            const octokit = github.getOctokit(token);
            const { data: pr } = await octokit.rest.pulls.create({
                ...github.context.repo,
                title: prTitle,
                head: targetBranch,
                base: github.context.ref.replace("refs/heads/", ""),
                body: "Automated class name updates from Discord's latest changes",
            });

            core.info(`Created PR #${pr.number}: ${pr.html_url}`);
        } else {
            core.info(`Updated branch ${targetBranch} with new changes.`);
        }
    } catch (error) {
        throw new Error(`Failed to create/update pull request: ${error}`);
    }
}
