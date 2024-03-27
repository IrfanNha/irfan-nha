import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		letterSpacing: {
			"1": "0em",
			"2": "0.025em",
			"3": "0.05em",
			"4": "0.23em",
			"5": "0.4em",
			"6": "0.75em",
			"7": "1em",
		},
		container: {
			center: true,
			padding: "32px",
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			screens: {
				"2xl": "1320px",
			},
		},
	},
	plugins: [],
};
export default config;
