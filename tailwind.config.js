/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			padding: {
				"10px": "10px",
			},
			width: {
				"50px": "50px",
				"56px": "56px",
			},
			height: {
				"50px": "50px",
				"56px": "56px",
			},
			colors: {
				yafa: {
					400: "#93f5ed",
					500: "#1fc7b9",
					600: "#148c82",
				},
				dark: "#373737",
				light: "#F4F4F4",
			},
		},
		buttonType: {
			primary: "primary",
			secondary: "secondary",
			tertiary: "tertiary",
		},
	},
	plugins: [],
};
