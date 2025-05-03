import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'bitrix24-create-app',
  description: 'Command line for create a project with your own templates',
  base: '/bitrix24-create-app/',
  head: [['link', { rel: 'icon', href: '/bitrix24-create-app/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/ng-template' },
      {
        text: 'bitrix24-library',
        link: 'https://vdistortion.github.io/bitrix24-library/',
      },
      {
        text: 'ui-bitrix24',
        link: 'https://vdistortion.github.io/ui-bitrix24/',
      },
    ],

    sidebar: [
      {
        text: 'Templates',
        items: [
          { text: 'ng-template', link: '/ng-template' },
          { text: 'vue-template', link: '/vue-template' },
        ],
      },
      {
        text: 'Examples',
        items: [
          {
            text: 'bitrix24-stickerpack-app',
            link: 'https://github.com/vdistortion/bitrix24-stickerpack-app',
          },
          {
            text: 'bitrix24-pricing-app',
            link: 'https://github.com/vdistortion/bitrix24-pricing-app',
          },
        ],
      },
      {
        text: 'More packages',
        items: [
          {
            text: 'bitrix24-library',
            link: 'https://www.npmjs.com/package/bitrix24-library',
          },
          {
            text: 'vue-bitrix24',
            link: 'https://www.npmjs.com/package/vue-bitrix24',
          },
          {
            text: 'react-bitrix24',
            link: 'https://www.npmjs.com/package/react-bitrix24',
          },
        ],
      },
    ],

    socialLinks: [
      {
        icon: 'npm',
        link: 'https://www.npmjs.com/package/bitrix24-create-app',
      },
      {
        icon: 'github',
        link: 'https://github.com/vdistortion/bitrix24-create-app',
      },
    ],
  },
});
