import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
import mapValues from "lodash/mapValues"

/**
 *
 * @param theme
 * @returns {function(*, *?): *}
 */
const themePicker = theme => (input, key) => {
	const nested = !("dark" in input) && !("light" in input)
	if (nested) {
		return mapValues(input, themePicker(theme))
	}
	const value = input[theme]
	if (!value) {
		throw Error(`Color [${key}] is missing the value ${theme}`)
	}
	return value
}

const injectTheme = (obj, theme) => {
	const pick = themePicker(theme)
	return mapValues(obj, pick)
}

const baseColors = {
<<<<<<< HEAD
	text: {
		100: {
			dark: "#eee",
			light: "#29292c",
		},
		300: {
			dark: "#9eaab7",
			light: "#454547",
		},
		500: {
			dark: "#718096",
			light: "#38404e",
		},
	},
	bg: {
		100: {
			light: "#f3f3f3",
			dark: "#141621",
		},
		300: {
			light: "#e2e9ec",
			dark: "#181b2b",
		},
		500: {
			light: "#E5E7EB",
			dark: "#232735",
		},
	},
	bgPrimary: {
		light: "#f3f3f3",
		dark: "#141621",
	},
	bgSecondary: {
		light: "#e2e9ec",
		dark: "#181b2b",
	},
	bgTertiary: {
		light: "gray.200",
		dark: "#232735",
	},
	bgBrand: {
		light: "hsl(230deg 30% 92%)",
		dark: "hsl(230deg 30% 9%)",
	},
	borderSubtle: {
		dark: "#1e2131",
		light: "#e8e8e8",
	},
	borderSubtlePrimary: {
		light: "#dadbde",
		dark: "#1f2231",
	},
	brand: {
		100: {
			dark: "#f9bc60",
			light: "#e16162",
		},
	},
	brandSecondary: {
		dark: "#8a7aff",
		light: "#3725c2",
	},
=======
	text: {
		100: {
			dark: "#eee",
			light: "#29292c",
		},
		300: {
			dark: "#9eaab7",
			light: "#454547",
		},
		500: {
			dark: "#718096",
			light: "#38404e",
		},
	},
	bg: {
		100: {
			light: "#f3f3f3",
			dark: "#141621",
		},
		300: {
			light: "#e2e9ec",
			dark: "#181b2b",
		},
		500: {
			light: "#E5E7EB",
			dark: "#232735",
		},
	},
	bgPrimary: {
		light: "#f3f3f3",
		dark: "#141621",
	},
	bgSecondary: {
		light: "#e2e9ec",
		dark: "#181b2b",
	},
	bgTertiary: {
		light: "gray.200",
		dark: "#232735",
	},
	bgBrand: {
		light: "#f5e5ec",
		dark: "hsl(333deg 52% 14%)",
	},
	borderSubtle: {
		dark: "#1e2131",
		light: "#e8e8e8",
	},
	borderSubtlePrimary: {
		light: "#dadbde",
		dark: "#1f2231",
	},
	brand: {
		100: {
			dark: "#f9bc60",
			light: "#e16162",
		},
	},
	brandSecondary: {
		dark: "#62daff",
		light: "#256bc1",
	},
>>>>>>> 86d987e9ffc6849e03df70856390e88838dfeb26
}

export const colors = {
	...baseColors,
	discord: {
		light: "#36393f",
		dark: "awd",
	},
	brandLight: {
		light: "hsl(333deg, 100%, 55%)",
		dark: "hsl(333deg, 100%, 55%)",
	},
	bgPostHeader: {
		light: baseColors.bgPrimary.light,
		dark: baseColors.bgSecondary.dark,
	},
	// specific colors
	bgPopupShadow: {
		dark: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0px,rgba(0, 0, 0, 0.1) 30%, rgba(0, 0, 0, 0.4) 70% 20px, rgba(0, 0, 0, 0.7))`,
		light: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0px,rgba(0, 0, 0, 0.1) 30%, rgba(0, 0, 0, 0.2) 70% 20px, rgba(0, 0, 0, 0.3))`,
	},
	discordBackground: {
		dark: baseColors.bgSecondary.dark,
		light: "#f9f9f9",
	},
	facebookBackground: {
		dark: baseColors.bgSecondary.dark,
		light: "#ffffff",
	},
	facebookTextColor: {
		dark: "#e4e6eb",
		light: "#050505"
	},
	facebookBubbleColor: {
		light: "#e4e6eb",
		dark: "#3e4042"
	},
	kbRequired: {
		light: "#9AE6B4",
		dark: "#22543D",
	},
	kbOptional: {
		light: "#81E6D9", // teal.200
		dark: "#1D4044", // teal.900
	},
	kbTool: {
		light: "#FEB2B2", // teal.200
		dark: "#63171B", // teal.900
	},
	utterances: {
		light: "github-light",
		dark: "github-dark",
	},
	discordTextColor: { light: "#2e3338", dark: "#dcddde" },
	highlight: {
		light: "yellow",
		dark: baseColors.brand[100].dark,
	},
}

const fontFamily =
	"'Wotfard',-apple-system,'Segoe UI','Roboto','Ubuntu','Cantarell','Noto Sans',sans-serif,'BlinkMacSystemFont','Helvetica Neue','Arial','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'"

function makeLayer(name, variants) {
	return {
		[name]: variants[1],
		_light: {
			[name]: variants[0],
		},
	}
}

export const transition = "all 0.4s ease-in-out"

export function createTheme(theme) {
	const pick = themePicker(theme)
	return extendTheme({
		config: {
			initialColorMode: "dark",
			useSystemColorMode: false,
		},
		fonts: {
			heading: fontFamily,
			body: fontFamily,
		},
		fontSizes: {
			xs: "13px",
			sm: "14px",
			md: "16px",
			lg: "20px",
			xl: "24px",
			"2xl": "32px",
			"3xl": "38px",
			"4xl": "48px",
			"5xl": "56px",
		},
		styles: {
			global: {
				ul: {
					"list-style-position": "inside",
				},
				code: {
					display: "inline-flex",
					fontWeight: "bold",
					fontSize: "0.85em",
					background: pick({
						light: colors.bg[300].light,
						dark: "#2b141d",
					}),
					transition,
					padding: "0 6px",
					color: pick({
						light: colors.brand[100].light,
						dark: colors.brand[100].dark,
					}),
					borderRadius: "5px",
				},
				".highlight-line": {
					background: pick({
						light: colors.bgSecondary.light,
						dark: colors.bgSecondary.dark,
					}),
				},
				".blog-post :is(h1, h2, h3, h4, h5, h6) > a": {
					// resetting the link colors of article headings
					color: "inherit",
				},
				a: {
					wordBreak: "break-word",
				},
				".widebanner > p": {
					marginBottom: 0,
				},
				".token-line": {
					paddingInlineStart: 3,
					paddingInlineEnd: 3,
					whiteSpace: "pre-wrap",
					wordBreak: "break-word",
				},
				"pre, kbd, samp": {
					fontFamily: `'Roboto Mono', ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace`,
				},
				body: {
					lineBreak: "auto",
					transition,
					color: pick(colors.text[300]),
					background: pick({
						light: colors.bg[100].light,
						dark: colors.bg[100].dark,
					}),
				},
			},
		},
		components: {
			Link: {
				baseStyle: {
					color: pick({
						light: colors.brandSecondary.light,
						dark: colors.brandSecondary.dark,
					}),
				},
			},
			Comments: {
				baseStyle: {
					color: pick({
						light: colors.utterances.light,
						dark: colors.utterances.dark,
					})
				}
			},
			// Heading: {
			//   baseStyle: props => ({
			//     color: "text.100",
			//   }),
			// },
			Text: {
				baseStyle: {
					lineHeight: "1.7",
				},
			},
		},
		// colors
		colors: injectTheme(colors, theme),
	})
}
