import * as core from "@actions/core";
import * as github from "@actions/github";
import { execSync } from "child_process";

/**
 * Sets up Git with the necessary configuration.
 */
function setupGit() {
    execSync('git config --global user.name "github-actions"');
    execSync('git config --global user.email "github-actions@github.com"');
}

export async function createUpdatePR() {
    try {
        const token = process.env.GITHUB_TOKEN;
        if (!token) throw new Error("GITHUB_TOKEN is not set");
        setupGit();

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

/**
 * Pushes the changes in the 'data' folder to the main branch of the repository.
 */
export function pushDataToGitHub() {
    try {
        setupGit();

        // Check if there are changes in the 'data' folder
        execSync("git add data");
        const status = execSync("git status --porcelain").toString().trim();

        if (!status) {
            core.info("No changes detected in the 'data' folder. Skipping commit.");
            return;
        }

        // Commit and push changes
        execSync('git commit -m "Automated update of chunk class names"');
        execSync("git push origin main");

        core.info("Changes pushed successfully to main branch.");
    } catch (error) {
        throw new Error(`Failed to push changes to GitHub: ${error}`);
    }
}
