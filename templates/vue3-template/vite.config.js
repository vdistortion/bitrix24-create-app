import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import { appName, archiveName } from './getNames';

export default defineConfig({
  base: '',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  define: {
    'window.DIRNAME_APP': `"${appName}"`,
    'window.ARCHIVE_NAME': `"${archiveName}"`,
  },
});
