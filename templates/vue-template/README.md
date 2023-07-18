# <%= projectName %>

### Команды

```bash
npm run dev   # development на локалке
npm run watch # development на сервере (записывает файлы на диск и следит за изменениями)
npm run build # production и сборка архива с приложением первого типа
npm run lint  # проверка кода
npm run grid  # пересборка сетки
```

#### Поиск файлов
```bash
npm run grep list # список файлов
npm run grep word # только полные слова
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
window.appCodeName = '<%= projectName %>';
```

#### /.env
```dotenv
# список скоупов, необходимых для работы приложения
VITE_SCOPE=[]

# список сторонних скриптов, которые нужно подключить до загрузки приложения
VITE_SCRIPTS=[]

# список мест для встраивания приложения
VITE_PLACEMENT=[]

# список доменов, которые считаются тестовыми
VITE_TEST_DOMAINS=[]
```

#### /src/config.js

```js
export default {
  global: {}, // глобальные переменные
  path: {
    root: '/', // путь до корня проекта
    handler: '/index.html', // полный путь к индексному файлу
    ajaxUrl: '/ajax/', // адрес для обращения к API
  },
};
```
В __global__ записываются значения из __/public/constants.js__<br>
Также в __global__ доступны следующие переменные:
* __global.appDirName__ - директория_приложения
* __global.archiveName__ - директория_приложения.zip
* __global.isDev__, __global.isProd__ и __global.isWatch__ - boolean

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

### Подключение к Битрикс24
![alt text Установка для локальной разработки](example.jpg)
* Создайте локальное приложение на существующем портале по ссылке https://DOMAIN.bitrix24.ru/devops/section/standard/
  * Или создайте новый портал https://www.bitrix24.ru/create.php (для регистрации лучше использовать временную почту, например https://temp-mail.org/ru/)
* "Путь вашего обработчика":
  * `http://127.0.0.1:PORT/index.html` для локальной разработки (`npm run dev`)
  * `ПУТЬ_ДО_ПРИЛОЖЕНИЯ_НА_СЕРВЕРЕ/dist/index.html` для стандартной разработки (`npm run watch`)
* Список установленных приложений можно посмотреть тут https://DOMAIN.bitrix24.ru/devops/list/

### Ссылки
* Style Guide (https://github.com/leonidlebedev/javascript-airbnb)
* Pinia (https://pinia.vuejs.org/)
* Vite (https://vitejs.dev/)
* axios (https://axios-http.com/ru/)
* vue-bitrix24 (https://www.npmjs.com/package/vue-bitrix24)
* REST API (https://dev.1c-bitrix.ru/rest_help/)

#### Сетка smartgrid
* [Документация](https://www.npmjs.com/package/smart-grid)
* Авторское описание на [YouTube](https://www.youtube.com/playlist?list=PLyeqauxei6je28tJvioIsE0bYnARh0UVz)
