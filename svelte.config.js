import adapter from '@sveltejs/adapter-static';

import preprocess from 'svelte-preprocess';


/** @type {import('@sveltejs/kit').Config} */

const dev = "production" === "development";
const config = {
	kit: {
		adapter: adapter({ fallback: 'index.html' }),
		alias: {
			$builders: 'src/lib/page-builders'
		}

	},
	preprocess: preprocess({ stylus: true }),
};

export default config;
