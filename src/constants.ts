import path from "path";

export const DATA_DIRECTORY = "./data";
export const SCRIPTS_DIRECTORY = path.join(DATA_DIRECTORY, "scripts");
export const BUILD_INFO_FILE = path.join(DATA_DIRECTORY, "buildInfo.json");
export const MODULE_PATH_FILE = path.join(DATA_DIRECTORY, "moduleClassNames.json");
export const MAP_PATH_FILE = path.join(DATA_DIRECTORY, "classNamesMap.json");

export const WEBSITE = "https://canary.discord.com";

export const HTML_REGEX = /<script defer src="\/assets\/[a-z0-9.]+\.js"><\/script>/g;
export const HTML_SRC_REGEX = /src="[^"]+"/g;
export const VERSION_HASH_REGEX = /versionHash:\s*"([a-zA-Z0-9]{40})"/;
export const BUILT_AT_REGEX = /"builtAt",\s*(?:String\("(\d+)"\)|"(\d+)")/;
export const CHUNKS_REGEX = /\w+=>""\+\(({(?:\w+:"\w+",)*\w+:"\w+"})\)/g;
export const JSON_FIX_REGEX = /([a-z0-9]*):/g;
// Examples: className_000xxx | class_name_000xxx | class-name_000xxx | class/name_000xxx
export const CLASS_NAME_REGEX = /[a-zA-Z0-9-_/ ]*[_][a-zA-Z0-9-_]*/;
export const CSS_CLASS_NAME_REGEX = /(?<class_name>(?<=\.)[a-zA-Z0-9-\\/]+_[a-zA-Z0-9-_\\/]+)/g;
