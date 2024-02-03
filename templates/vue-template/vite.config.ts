import vue from '@vitejs/plugin-vue';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'node:path';

export default defineConfig({
  base: '',
  plugins: [vue(), visualizer()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      stylus: {
        imports: [resolve('./src/assets/smartgrid.styl')],
      },
    },
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
});
