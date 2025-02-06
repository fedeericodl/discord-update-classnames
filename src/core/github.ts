import { execSync } from "child_process";

/**
 * Pushes the changes in the 'data' folder to the main branch of the repository.
 */
export function pushDataToGitHub() {
    try {
        const token = process.env.GITHUB_TOKEN;
        if (!token) {
            throw new Error("GITHUB_TOKEN is not set.");
        }

        // Configure Git
        execSync('git config --global user.name "github-actions"');
        execSync('git config --global user.email "github-actions@github.com"');

        // Check if there are changes in the 'data' folder
        execSync("git add data");
        const status = execSync("git status --porcelain").toString().trim();

        if (!status) {
            console.log("No changes detected in the 'data' folder. Skipping commit.");
            return;
        }

        // Commit and push changes
        execSync('git commit -m "Automated update of chunk class names"');
        execSync("git push origin main");

        console.log("Changes pushed successfully to main branch.");
    } catch (error) {
        throw new Error(`Action failed with error: ${error instanceof Error ? error.message : error}`);
    }
}
