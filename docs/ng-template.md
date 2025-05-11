# ng-template

Angular 19, RxJS, TypeScript, SCSS, bitrix24-library

### Запуск

```sh
cp src/environments/environment.ts src/environments/environment.development.ts
npm start
```

### Команды

```sh
npm start         # development на локалке
npm run watch     # development на сервере
npm run build     # production и сборка архива с приложением первого типа
npm run format    # prettier
npm run grid      # пересборка сетки

# Поиск файлов
npm run grep list # список файлов
npm run grep word # только полные слова
npm run grep full # подробно
```

### Структура

#### /src/environments/environment.ts

```sh
SCOPE: []        # список скоупов, необходимых для работы приложения
APP_NAME: ""     # название приложения
PLACEMENT: []    # список мест для встраивания приложения
TEST_DOMAINS: [] # список доменов, которые считаются тестовыми
```

#### /src/app/services/bitrix/

```sh
bitrix.service.ts # подключение BX24
batchList.ts      # класс для работы с API Битрикс24
requestList.ts    # batch-запросы
handlerList.ts    # обработка ответов
```

#### /src/app/dev/

Панель управления для разработки, содержит:

- Обновление фрейма
- Скачивание архива с приложением первого типа
- Добавление тестовых задач, сделок, компаний, контактов и лидов
- Страница для администраторов портала со списком встраиваний (placement)
- Отображается на порталах из списка `TEST_DOMAINS` (`/src/environments/environment.ts`)

### Подключение к Битрикс24

- Создайте локальное приложение на существующем портале по ссылке `/devops/section/standard/`
  - Или создайте новый портал https://www.bitrix24.ru/create.php (для регистрации лучше использовать временную почту, например https://temp-mail.org)
- "Путь вашего обработчика":
  - `http://127.0.0.1:4200/index.html` для локальной разработки (`npm start`)
  - `/dist/bitrix24-create-app/browser/index.html` для стандартной разработки (`npm run watch`)
- Список установленных приложений можно посмотреть тут `/devops/list/`

### Ссылки

- Angular (https://angular.dev/)
- RxJS (https://rxjs.dev/)
- TypeScript (https://www.typescriptlang.org/)
- REST API (https://apidocs.bitrix24.ru/)
- smart-grid (https://www.npmjs.com/package/smart-grid)
  - авторское описание на [YouTube](https://www.youtube.com/playlist?list=PLyeqauxei6je28tJvioIsE0bYnARh0UVz)
