/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				main: {
					100: '#f1a06a',
					200: '#ea6b17',
					300: '#bb5511'
				}
			}
		}
	},
	plugins: []
};
