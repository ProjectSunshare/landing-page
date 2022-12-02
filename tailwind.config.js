/** @type {import('tailwindcss').Config} */
const defaultThemes = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... } mobile

			md: "768px",
			// => @media (min-width: 768px) { ... } tablet

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }  PC 19"

			xl: "1280px",
			// => @media (min-width: 1280px) { ... } PC 21"

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... } PC 1080p >
		},

		fontFamily: {
			"Space-Grotesk": [
				"'Space Grotesk', sans-serif",
				...defaultThemes.fontFamily.sans,
			],
			Poppins: ["'Poppins', sans-serif", ...defaultThemes.fontFamily.sans],
		},
	},
	plugins: [],
};
