# discord-update-classnames

[![Fetch Data](https://github.com/FedeIlLeone/discord-update-classnames/actions/workflows/fetch-data.yml/badge.svg)](https://github.com/FedeIlLeone/discord-update-classnames/actions/workflows/fetch-data.yml)
[![Lint](https://github.com/FedeIlLeone/discord-update-classnames/actions/workflows/lint.yml/badge.svg)](https://github.com/FedeIlLeone/discord-update-classnames/actions/workflows/lint.yml)

The `discord-update-classnames` GitHub action provides automated synchronization of Discord theme class names with the latest changes directly extracted from the client. This tool helps theme developers maintain compatibility by automatically updating CSS class names in their themes and warning about deprecated selectors.

## Features

- **🕵️ Automatic Class Name Scraping**: Regularly collects updated class names (see [data outputs](#data-outputs))

- **🔄 Smart Class Replacement**: Updates outdated class names in theme files while preserving custom styling

- **🚨 Deprecation Warnings**: Identifies and reports class names no longer present in Discord's client

- **🤖 Automated Pull Requests**: Creates PRs with proposed changes for easy review and manual verification

## Usage

:warning: This section is still a work in progress.

## Data Outputs

The [data](./data/) directory contains structured results from class name analysis:

**:warning: Never manually edit these files - changes will be overwritten**

- [`moduleClassNames-new.json`](./data/moduleClassNames-new.json): current canary build's class names organized by module ID.
- [`moduleClassNames-old.json`](./data/moduleClassNames-old.json): previous build's class names for change comparison.
- [`classNamesMap.json`](./data/classNamesMap.json): tracks and maps the old class names with the updated ones. Updates on this file occur automatically once class names hashes on that exact module ID got changed.
- [`VERSION_HASH`](./data/VERSION_HASH): unique hash of last processed canary build.

## Disclaimer

**This project is not affiliated with, maintained by, or endorsed by Discord Inc.** Class names are obtained through public web resources and may change without notice. Always verify changes before merging automated PRs.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
