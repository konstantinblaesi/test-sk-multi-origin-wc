import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert"


export default defineConfig({
	server: {
		host: "127.0.0.1",
		port: 4000
	},
	plugins: [
		sveltekit(),
		mkcert({
			hosts: ["app.local"]
		})
	],
});
