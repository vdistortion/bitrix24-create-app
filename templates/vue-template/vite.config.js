import vue from '@vitejs/plugin-vue';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import { appDirName, archiveName } from './getNames';

export default defineConfig({
  base: '',
  plugins: [
    vue(),
    visualizer(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  define: {
    'window.appDirName': `"${appDirName}"`,
    'window.archiveName': `"${archiveName}"`,
    'window.isWatch': process.env.npm_lifecycle_script === 'vite build --watch',
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
});
