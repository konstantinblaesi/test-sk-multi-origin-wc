import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { resolve} from 'path';
import replace from '@rollup/plugin-replace';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const LIBRARY_PREFIX = 'demo';

export default defineConfig(({
	build: {
		lib: {
			entry: resolve(__dirname, 'src/lib/index.ts'),
			name: 'demo-wc',
			fileName: (format, entryName) => `demo-wc.${format}.js`,
			formats: ['es', 'umd']
		},
		// minify: true,

		// cssMinify: true,
		outDir: 'dist-web-components'
	},
	plugins: [
		replace({
			preventAssignment: true,
			'prefix': LIBRARY_PREFIX,
		}),
		svelte({ 
			compilerOptions: { 
				customElement: true 
			} 
		})
	]
}));