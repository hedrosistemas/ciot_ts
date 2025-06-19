import { defineConfig } from 'vite';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const singleFile = require('vite-plugin-singlefile');

export default defineConfig({
  root: 'examples/simple-web-app',
  plugins: [singleFile],
  build: {
    outDir: '../../dist/simple-web-app',
    assetsInlineLimit: Infinity,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks: () => 'everything.js',
      },
    },
  },
});
