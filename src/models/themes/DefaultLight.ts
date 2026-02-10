import { Theme } from "../Theme";

/**
 * Default Light theme - based on default-light.css
 */
export const DEFAULT_LIGHT_THEME: Theme = {
	id: "default-light",
	name: "Default Light",
	mode: "light",
	isBuiltin: false,
	colors: {
        "default-blue": "#03173E",
        "default-orange": "#E05929",
        "default-white": "#FFFFFF",
        "default-denim": "#00558C",
        "default-cerulean": "#0085CA",
        "default-tangerine": "#ED8B00",
        "default-goldenrod": "#FFC845",
        "default-chrome-slate": "#58595B",
	},
	assignments: {
		"BACKGROUND-PRIMARY": "var(--white-color)",
        "BACKGROUND-SECONDARY": "var(--very-light-gray)",
		"BACKGROUND-HIGHTLIGHT": "var(--default-blue-faded)",
		"BACKGROUND-CURRENT-LINE": "var(--light-gray)",

        "TEXT": "var(--dark-gray)",
		"TITLE": "var(--default-blue)",
		"ACCENT": "var(--default-blue)",
		"ACTION": "var(--default-orange)",
		"LIST": "var(--default-blue)",
		"HEADER": "var(--default-orange)",
		"CARET": "var(--default-blue)",
		"LINK": "var(--default-denim)",

		"BOLD": "var(--default-blue)",
		"ITALICS": "var(--default-orange)",
		"HIGHLIGHT": "var(--default-goldenrod)",
		"STRIKETHROUGH": "var(--default-denim)",
		"LINE_BREAK": "var(--default-chrome-slate)",
		"TAGS": "var(--default-denim)",

		"HEADER-1": "var(--default-orange)",
		"HEADER-2": "var(--default-blue)",
		"HEADER-3": "var(--default-denim)",
		"HEADER-4": "var(--default-tangerine)",
		"HEADER-5": "var(--default-cerulean)",
		"HEADER-6": "var(--default-goldenrod)",
	},
};
