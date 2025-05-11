# vue-template

Vue 3.5, Pinia, TypeScript, SCSS, vue-bitrix24, bitrix24-library

## Запуск

```sh
cp .env .env.development
npm run dev
```

## Команды

```sh
npm run dev       # development на локалке
npm run watch     # development на сервере
npm run build     # production + сборка архива с приложением первого типа
npm run format    # prettier
npm run grid      # пересборка сетки

# Поиск файлов
npm run grep list # список файлов
npm run grep word # только полные слова
npm run grep full # подробно
```

## Структура

### /.env

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

### /src/api/

```sh
/src/api/index.ts      # запросы к серверу
/src/api/HttpClient.ts # подключение axios
```

### /src/components/dev/

Панель управления (для разработки), содержит:

- Обновление фрейма
- Скачивание архива с приложением первого типа
- Добавление тестовых задач, сделок, компаний, контактов и лидов
- Страница для администраторов портала со списком встраиваний (placement)
- Страница со списком компонентов плагина `vue-bitrix24`
- Отображается на порталах из списка `VITE_TEST_DOMAINS` (`.env`)

### /src/composable/bitrix/

Подключение BX24 и useBitrix24 для работы с API Битрикс24 (https://vdistortion.github.io/bitrix24-library/)

### /src/views/ExamplePage.vue

Список доступных компонентов vue-bitrix24 (https://vdistortion.github.io/ui-bitrix24/vue/)

## Подключение к Битрикс24

- Создайте новый портал https://www.bitrix24.ru/create.php (для регистрации лучше использовать временную почту, например https://temp-mail.org)
  - Или создайте локальное приложение на существующем портале по ссылке `/devops/section/standard/`
  - Список установленных приложений можно посмотреть тут `/devops/list/`
- "Путь вашего обработчика":
  - `http://127.0.0.1:4200/index.html` для локальной разработки (`npm run dev`)
  - `/dist/index.html` для production или `npm run watch`

## Ссылки

- Vue (https://vuejs.org/)
- Pinia (https://pinia.vuejs.org/)
- TypeScript (https://www.typescriptlang.org/)
- REST API (https://apidocs.bitrix24.ru/)
- smart-grid (https://www.npmjs.com/package/smart-grid)
  - авторское описание на [YouTube](https://www.youtube.com/playlist?list=PLyeqauxei6je28tJvioIsE0bYnARh0UVz)
