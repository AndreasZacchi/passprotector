/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			boxShadow: {
				y: '0 3px 4px 0 rgba(0, 0, 0, 0.3)',
				yxl: '0px 6px 4px 2px rgba(0, 0, 0, 0.3)'
			},
			fontFamily: {
				helvetica: ['helvetica'],
				poppins: ['poppins']
			},
			colors: {
				main: {
					100: '#f1a06a',
					200: '#FF8833',
					300: '#ff6b00',
					400: '#F56600',
					500: '#E05E00',
					600: '#424242'
				},
				main2: {
					60: '',
					30: '',
					10: '#ff6b00',
					102: '#F56600'
				}
			}
		}
	},
	plugins: []
};
