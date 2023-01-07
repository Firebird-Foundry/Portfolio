import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	vite: {
		server: {
			port: 3000,
			watch: {
				usePolling: true
			}
		}
	}
};

export default config;
