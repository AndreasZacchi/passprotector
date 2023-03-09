/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			boxShadow: {
				y: '0 3px 4px 0 rgba(0, 0, 0, 0.3)',
				yxl: '0px 6px 4px 2px rgba(0, 0, 0, 0.3)',
				x: '2px 0 3px 0px rgba(0, 0, 0, 0.3)'
			},
			fontFamily: {
				helvetica: ['helvetica'],
				poppins: ['poppins']
			},
			colors: {
				main: {
					orange: {
						100: '#FFE4C9',
						200: '#FFC17C',
						300: '#ff6b00',
						400: '#F56600',
						500: '#E05E00'
					},
					gray: {
						100: '#D8D8D8',
						200: '#7C7C7C',
						300: '#424242'
					}
				}
			}
		}
	},
	plugins: []
};
