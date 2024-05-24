# <%= projectName %>

### Запуск

```sh
# в корне проекта
cp .env .env.development
npm run dev
```

### Команды

```bash
npm run dev    # development на локалке
npm run watch  # development на сервере (записывает файлы на диск и следит за изменениями)
npm run build  # production и сборка архива с приложением первого типа
npm run format # prettier
npm run grid   # пересборка сетки
```

#### Поиск файлов
```bash
npm run grep list # список файлов
npm run grep word # только полные слова
npm run grep full # подробно
```

### Структура

#### /.env
```dotenv
# список скоупов, необходимых для работы приложения
VITE_SCOPE=[]

# название приложения
VITE_APP_NAME=""

# список мест для встраивания приложения
VITE_PLACEMENT=[]

# список доменов, которые считаются тестовыми
VITE_TEST_DOMAINS=[]
```

#### /src/api/

```bash
/src/api/index.ts # запросы к серверу
/src/api/HttpClient.ts # подключение axios
/src/api/bitrix/index.ts # класс для работы с API Битрикс24
/src/api/bitrix/requestList.ts # batch-запросы
/src/api/bitrix/handlerList.ts # обработка ответов
```

#### /src/components/dev/
Панель управления (для разработки), содержит:
* Обновление фрейма
* Скачивание архива с приложением первого типа
* Страница для администраторов портала со списком встраиваний (placement)
* Страница со списком компонентов плагина `vue-bitrix24`
* Отображается на порталах из списка `VITE_TEST_DOMAINS` (`.env`)

#### /src/views/
Список страниц приложения
```bash
/src/views/HomePage.vue # главная страница приложения
/src/views/PlacementPage.vue # список встраиваний
/src/views/ExamplePage.vue # список доступных компонентов vue-bitrix24
```

### Подключение vue-bitrix24

```ts
// src/main.ts
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
  * `http://127.0.0.1:5173/index.html` для локальной разработки (`npm run dev`)
  * `ПУТЬ_ДО_ПРИЛОЖЕНИЯ_НА_СЕРВЕРЕ/dist/index.html` для стандартной разработки (`npm run watch`)
* Список установленных приложений можно посмотреть тут https://DOMAIN.bitrix24.ru/devops/list/

### Ссылки
* Vue (https://vuejs.org/)
* Pinia (https://pinia.vuejs.org/)
* Vite (https://vitejs.dev/)
* axios (https://axios-http.com/ru/)
* TypeScript (https://www.typescriptlang.org/)
* REST API (https://dev.1c-bitrix.ru/rest_help/)

#### Связанные пакеты
* bitrix24-stickerpack-app (https://github.com/astrotrain55/bitrix24-stickerpack-app)
* bitrix24-library (https://www.npmjs.com/package/bitrix24-library)
* vue-bitrix24 (https://www.npmjs.com/package/vue-bitrix24)

#### Сетка smartgrid
* npmjs (https://www.npmjs.com/package/smart-grid)
* авторское описание на [YouTube](https://www.youtube.com/playlist?list=PLyeqauxei6je28tJvioIsE0bYnARh0UVz)
