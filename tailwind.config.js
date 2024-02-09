/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			height: {
				'screen-minus': 'calc(100vh - 80px)',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				primary: '#2190FF',
				black: {
					DEFAULT: '#000',
					100: '#0D1117',
					200: '#161B22',
					300: '#1F2428',
					400: '#242C38',
				},
				grey: {
					100: '#969BA5',
					200: '#55616D',
				},
				white: {
					DEFAULT: '#FFF',
					400: '#A3B3BC',
					500: '#A4B8D5',
					800: '#D0DFFF',
				},
			},
		},
	},
	plugins: [],
};
