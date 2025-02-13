# discord-update-classnames

[![Fetch Data](https://github.com/fedeericodl/discord-update-classnames/actions/workflows/fetch-data.yml/badge.svg)](https://github.com/fedeericodl/discord-update-classnames/actions/workflows/fetch-data.yml)
[![Lint](https://github.com/fedeericodl/discord-update-classnames/actions/workflows/lint.yml/badge.svg)](https://github.com/fedeericodl/discord-update-classnames/actions/workflows/lint.yml)

The `discord-update-classnames` GitHub action provides automated synchronization of Discord theme class names with the latest changes directly extracted from the client. This tool helps theme developers maintain compatibility by automatically updating CSS class names in their themes and warning about deprecated selectors.

## Features

- **🕵️ Automatic Class Name Scraping**: Regularly collects updated class names (see [data outputs](#data-outputs))

- **🔄 Smart Class Replacement**: Updates outdated class names in theme files while preserving custom styling

- **🚨 Deprecation Warnings**: Identifies and reports class names no longer present in Discord's client

- **🤖 Automated Pull Requests**: Creates PRs with proposed changes for easy review and manual verification

## Usage

Add this to your GitHub Actions workflow (e.g. `.github/workflows/update-classnames.yml`):

```yml
name: Update Discord Class Names
on:
    schedule:
        - cron: "0 0 * * *" # Daily check
    workflow_dispatch:

jobs:
    update:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v4

            - name: Run Class Name Updater
              uses: fedeericodl/discord-update-classnames@v1
              with:
                  files: "src/theme/"
```

This is the most basic setup. You can customize the action by providing additional options.

### Inputs

The following inputs can be used to customize the action:

| Name                    | Description                                                            | Default                                         | Required |
| ----------------------- | ---------------------------------------------------------------------- | ----------------------------------------------- | :------: |
| `files`                 | Files/directories to process (comma/newline separated)                 |                                                 |   Yes    |
| `follow-symbolic-links` | Indicates whether to follow symbolic links when resolving file paths   | `true`                                          |    No    |
| `ignores`               | Files/directories to exclude from processing (comma/newline separated) |                                                 |    No    |
| `token`                 | GitHub token to use for pull requests creation                         | `GITHUB_TOKEN`                                  |    No    |
| `target-branch`         | Destination branch for automated changes (creates if missing)          | `classname-updates`                             |    No    |
| `commit-message`        | Commit message template                                                | `chore: update Discord class names (automated)` |    No    |
| `pr-title`              | Pull request title template                                            | `Class Name Updates`                            |    No    |

:exclamation: The `files` input is required and should point to the theme files or directories to process. You can use glob patterns to match multiple files, e.g. `src/theme/**/*.scss`.

## Data Outputs

The [data](./data/) directory contains structured results from class name analysis:

**:warning: Never manually edit these files - changes will be overwritten**

- [`moduleClassNames.json`](./data/moduleClassNames.json): current canary build's class names organized by module ID.
- [`classNamesMap.json`](./data/classNamesMap.json): tracks and maps the old class names with the updated ones. Updates on this file occur automatically once class names hashes on that exact module ID got changed.
- [`VERSION_HASH`](./data/VERSION_HASH): unique hash of last processed canary build.

## Disclaimer

**This project is not affiliated with, maintained by, or endorsed by Discord Inc.** Class names are obtained through public web resources and may change without notice. Always verify changes before merging automated PRs.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
