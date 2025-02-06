import path from "path";

export const DATA_DIRECTORY = "./data";
export const SCRIPTS_DIRECTORY = path.join(DATA_DIRECTORY, "scripts");
export const OLD_PATH_FILE = path.join(DATA_DIRECTORY, "chunkClassNames-old.json");
export const NEW_PATH_FILE = path.join(DATA_DIRECTORY, "chunkClassNames-new.json");
export const MAP_PATH_FILE = path.join(DATA_DIRECTORY, "classNamesMap.json");

export const WEBSITE = "https://canary.discord.com";

export const HTML_REGEX = /<script defer src="\/assets\/[a-z0-9.]+\.js"><\/script>/g;
export const HTML_SRC_REGEX = /src="[^"]+"/g;
export const CHUNKS_REGEX = /function\(\w+\){return""\+\(({(?:\w+:"\w+",)*\w+:"\w+"})\)/g;
export const JSON_FIX_REGEX = /([a-z0-9]*):/g;
export const CLASS_NAME_REGEX = /[a-zA-Z0-9-_/ ]*[_][a-zA-Z0-9-_]*/;
