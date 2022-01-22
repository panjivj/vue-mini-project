module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		fontFamily: {
			sans: ["ui-sans-serif", "system-ui"],
		},
		screens: {
			xs: "375px",
			sm: "414px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
	},
	plugins: [],
};
