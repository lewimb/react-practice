/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
import daisyui from "daisyui";

export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			lg: "400px",
		},
		extend: {
			// colors: {
			// 	"lewi-orange": {
			//     50: "#000",
			//     100: "#000",
			//     200: "#000",
			//     300: "#000",
			//     400: "#000",
			//   },
			// },
			borderRadius: {
				custom: "48px",
			},
		},
	},
	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				".card": {
					"@apply flex flex-col gap-2 w-60 overflow-hidden": {},
				},
				".card > .card-title": {
					fontSize: "24px",
				},
			});
		}),
		daisyui,
	],
};
