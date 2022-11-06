import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import { appDirName, archiveName } from './getNames';

export default defineConfig(({ command, mode }) => ({
  base: '',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  define: {
    'window.appDirName': `"${appDirName}"`,
    'window.archiveName': `"${archiveName}"`,
    'window.mode': `"${mode}"`,
    'window.isDev': command !== 'vite build' && mode === 'development',
    'window.isProd': command === 'vite build' && mode === 'production',
    'window.isWatch': command !== 'vite build' && mode === 'production',
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
}));
