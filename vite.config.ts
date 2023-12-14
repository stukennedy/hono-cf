import { defineConfig } from 'vite';
import devServer from '@hono/vite-dev-server';
import pages from '@hono/vite-cloudflare-pages';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [
		pages(),
		devServer({
			entry: 'src/index.tsx',
		}),
		tsconfigPaths(),
	],
});
