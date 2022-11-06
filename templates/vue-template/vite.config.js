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
    'window.isDev': command === 'serve' && mode === 'development',
    'window.isProd': command === 'build' && mode === 'production',
    'window.isWatch': process.env.npm_lifecycle_script === 'vite build --watch',
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
}));
