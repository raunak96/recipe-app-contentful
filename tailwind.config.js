module.exports = {
	mode: "jit",
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "rotateZ(-2deg)" },
					"50%": { transform: "rotateZ(2deg)" },
				},
			},
			animation: {
				wiggle: "wiggle 1s ease-in-out infinite",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
