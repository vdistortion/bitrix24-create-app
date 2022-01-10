# bitrix24-create-app

### Команды

```bash
npm run serve # development
npm run build # production и сборка архива с приложением первого типа
npm run lint # проверка кода
npm run grid # пересборка сетки
npm run caniuse # обновление browserslist
```

### Структура

#### /index.php
Просто подключает index.html, если сервер не настроен открывать файлы .html

#### /ajax/
Каталог для API (для приложений второго типа)

#### /constants.js
Глобальные переменные, которые можно менять без пересборки
```js
window.appName = 'Приложение';
window.appNameEng = 'Application';
window.appCodeName = 'bitrix24-create-app';
```
Также в приложении доступны следующие переменные:
* window.DIRNAME_APP - директория_приложения
* window.ARCHIVE_NAME - директория_приложения.zip

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
/src/views/Home.vue # главная страница приложения
/src/views/Placement.vue # список встраиваний
/src/views/Example.vue # список доступных компонентов
```

### Сетка smartgrid
* [Документация](https://www.npmjs.com/package/smart-grid)
* Авторское описание на [YouTube](https://www.youtube.com/playlist?list=PLyeqauxei6je28tJvioIsE0bYnARh0UVz)

### Подключение плагинов

#### vuetify

```js
// vue.config.js
module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
};

// src/main.js
import vuetify from './plugins/vuetify';

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
```

#### vue-bitrix24

```js
// src/main.js
import Bitrix24 from './plugins/vue-bitrix24';

Bitrix24.init().then(($BX24) => {
  new Vue({
    provide: { $BX24 },
    render: (h) => h(App),
  }).$mount('#app');
});
```
