/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./layouts/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontSize: {
				'2xs': '0.625rem', // 10px
			},
			colors: {
				primary: {
					DEFAULT: '#BB6350',
				},
				secondary: {
					DEFAULT: '#D9D9D9',
				},
			},
			backgroundImage: {
				// "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				// "gradient-conic":
				//   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
