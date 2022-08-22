# bitrix24-create-app

### Команды

```bash
npm run dev   # development
npm run build # production и сборка архива с приложением первого типа
npm run lint  # проверка кода
npm run grid  # пересборка сетки
npm run grep  # поиск файлов
```

#### Поиск файлов
```bash
npm run grep list # список файлов
npm run grep once # только полные слова
npm run grep full # подробно
```

### Структура

#### /ajax/
Каталог для API (для приложений второго типа)

#### /public/index.php
Просто подключает index.html, если сервер не настроен открывать файлы .html

#### /public/constants.js
Глобальные переменные, которые можно менять без пересборки
```js
window.appName = 'Приложение';
window.appNameEng = 'Application';
window.appCodeName = 'bitrix24-create-app';
```

#### /src/config.js

```js
export default {
  scope: [], // список скоупов, необходимых для работы приложения
  placement: [], // список мест для встраивания приложения
  testDomains: [], // список доменов, которые считаются тестовыми
  scripts: [], // список сторонних скриптов, которые нужно подключить до загрузки приложения
  global: {}, // глобальные переменные
  ajaxUrl: '', // адрес для обращения к API
  handler: '', // полный путь к приложению
};
```
В __global__ записываются значения из __/public/constants.js__<br>
Также в __global__ доступны следующие переменные:
* __global.appDirName__ - директория_приложения
* __global.archiveName__ - директория_приложения.zip

#### /src/api/

```bash
/src/api/index.js # запросы к /ajax/
/src/api/Ajax.js # подключение axios
/src/api/bitrix/index.js # класс для работы с API Битрикс24
/src/api/bitrix/requestList.php # batch-запросы
/src/api/bitrix/handlerList.php # обработка ответов
```

#### /src/components/dev/
Панель управления (для разработки), содержит:
* Обновление фрейма
* Скачивание архива с приложением первого типа
* Страница для администраторов портала со списком встраиваний (placement)
* Страница со списком компонентов плагина vue-bitrix24

#### /src/views/
Список страниц приложения
```bash
/src/views/HomePage.vue # главная страница приложения
/src/views/PlacementPage.vue # список встраиваний
/src/views/ExamplePage.vue # список доступных компонентов vue-bitrix24
```

### Подключение vue-bitrix24

```js
// src/main.js
import { createApp } from 'vue';
import { Bitrix24, useBitrix24 } from './plugins/vue-bitrix24';
import App from './App.vue';

Bitrix24.init().then((BX24) => {
  createApp(App)
    .use(useBitrix24)
    .provide('$BX24', BX24)
    .mount('#app');
});
```

### Ссылки
* Pinia (https://pinia.vuejs.org/core-concepts/)
* Vite (https://vitejs.dev/config/)
* archiver (https://www.archiverjs.com/docs/quickstart)
* REST API (https://dev.1c-bitrix.ru/rest_help/whatsnew.php)

#### Сетка smartgrid
* [Документация](https://www.npmjs.com/package/smart-grid)
* Авторское описание на [YouTube](https://www.youtube.com/playlist?list=PLyeqauxei6je28tJvioIsE0bYnARh0UVz)
