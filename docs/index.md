---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "bitrix24-create-app"
  text: "CLI for create a project with your own templates"
  actions:
    - theme: brand
      text: ng-template
      link: /ng-template
    - theme: brand
      text: vue-template
      link: /vue-template

features:
  - title: ng-template
    details: Angular 18, RxJS, TypeScript, SCSS, bitrix24-library
    link: /ng-template
    icon:
      src: './angular.svg'
  - title: vue-template
    details: Vue 3, Pinia, TypeScript, SCSS, bitrix24-library, vue-bitrix24
    link: /vue-template
    icon:
      src: './vue.svg'
---

## Use

```sh
npx bitrix24-create-app@latest
```
