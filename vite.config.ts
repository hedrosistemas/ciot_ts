import { defineConfig } from "vite"
import { viteSingleFile } from "vite-plugin-singlefile"
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  root: 'examples/simple-web-app',
	plugins: [
    viteSingleFile(),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      filter: /\.(html)$/i,
      threshold: 0
    })
  ],
  build: {
    outDir: 'dist'
  }
})