/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {

			keyframes: {
				
				slideanimation: {
					'0%': { borderColor: 'Black' },
					'100%': { borderColor: '#ff6b00' },
				}

			},

			animation: {
				'slide': 'slideanimation 3s ease-out',
			},

			colors: {
				main: {
					100: '#f1a06a',
					200: '#FF8833',
					300: '#ff6b00',
					400: '#F56600',
					500: '#E05E00'
				}
			},

			borderWidth: {
				'3': '2.4px',
			},

		}
	},
	plugins: []
};
