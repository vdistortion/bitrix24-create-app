# vue-template

Vue 3.5, Pinia, TypeScript, SCSS, vue-bitrix24, bitrix24-library

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

- Обновление фрейма
- Скачивание архива с приложением первого типа
- Страница с добавлением задач, сделок, компаний, контактов и лидов
- Страница для администраторов портала со списком встраиваний (placement)
- Страница со списком компонентов плагина `vue-bitrix24`
- Отображается на порталах из списка `VITE_TEST_DOMAINS` (`.env`)

#### /src/views/

Список страниц приложения

```bash
/src/views/HomePage.vue # главная страница приложения
/src/views/GeneratorPage.vue # генератор данных
/src/views/PlacementPage.vue # список встраиваний
/src/views/ExamplePage.vue # список доступных компонентов vue-bitrix24
```

### Подключение к Битрикс24

- Создайте локальное приложение на существующем портале по ссылке https://DOMAIN.bitrix24.ru/devops/section/standard/
  - Или создайте новый портал https://www.bitrix24.ru/create.php (для регистрации лучше использовать временную почту, например https://temp-mail.org/ru/)
- "Путь вашего обработчика":
  - `http://127.0.0.1:4200/index.html` для локальной разработки (`npm run dev`)
  - `ПУТЬ_ДО_ПРИЛОЖЕНИЯ_НА_СЕРВЕРЕ/dist/index.html` для стандартной разработки (`npm run watch`)
- Список установленных приложений можно посмотреть тут https://DOMAIN.bitrix24.ru/devops/list/

### Ссылки

- Vue (https://vuejs.org/)
- Pinia (https://pinia.vuejs.org/)
- Vite (https://vitejs.dev/)
- axios (https://axios-http.com/ru/)
- TypeScript (https://www.typescriptlang.org/)
- REST API (https://dev.1c-bitrix.ru/rest_help/)

#### Сетка

- npmjs (https://www.npmjs.com/package/smart-grid)
  - авторское описание на [YouTube](https://www.youtube.com/playlist?list=PLyeqauxei6je28tJvioIsE0bYnARh0UVz)
