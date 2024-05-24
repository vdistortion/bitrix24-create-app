# bitrix24-create-app

Интерфейс командной строки для установки шаблонов приложений

### Шаблоны

* [ng-template](https://github.com/astrotrain55/bitrix24-create-app/tree/master/templates/ng-template#readme) (Angular 17, TypeScript, SCSS, [bitrix24-library](https://www.npmjs.com/package/bitrix24-library))
* [vue-template](https://github.com/astrotrain55/bitrix24-create-app/tree/master/templates/vue-template#readme) (Vue 3, Pinia, Vite, SCSS, [vue-bitrix24](https://www.npmjs.com/package/vue-bitrix24), [bitrix24-library](https://www.npmjs.com/package/bitrix24-library))

### Использование

```sh
npx bitrix24-create-app@latest
# или
npx bitrix24-create-app@latest --template=ng-template --name=testproject
```
```sh
cd testproject
git init
```

___

Based on [@pongsatt/mycli](https://github.com/pongsatt/mycli)
