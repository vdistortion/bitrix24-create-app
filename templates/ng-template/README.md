# bitrix24-create-app

### Запуск

```sh
# в корне проекта
cp src/environments/environment.ts src/environments/environment.development.ts
npm start
```

### Команды

```sh
npm start         # development на локалке
npm run watch     # development на сервере (записывает файлы на диск и следит за изменениями)
npm run build     # production и сборка архива с приложением первого типа
npm run format    # prettier
npm run grid      # пересборка сетки
```

#### Поиск файлов

```bash
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

#### /src/api/

```sh
/src/api/bitrix/index.ts       # класс для работы с API Битрикс24
/src/api/bitrix/requestList.ts # batch-запросы
/src/api/bitrix/handlerList.ts # обработка ответов
```

#### /src/app/dev/

Панель управления для разработки, содержит:

- Обновление фрейма
- Скачивание архива с приложением первого типа
- Страница для администраторов портала со списком встраиваний (placement)
- Отображается на порталах из списка `TEST_DOMAINS` (`/src/environments/environment.ts`)

### Подключение к Битрикс24

- Создайте локальное приложение на существующем портале по ссылке https://DOMAIN.bitrix24.ru/devops/section/standard/
  - Или создайте новый портал https://www.bitrix24.ru/create.php (для регистрации лучше использовать временную почту, например https://temp-mail.org/ru/)
- "Путь вашего обработчика":
  - `http://127.0.0.1:4200/index.html` для локальной разработки (`npm start`)
  - `ПУТЬ_ДО_ПРИЛОЖЕНИЯ_НА_СЕРВЕРЕ/dist/bitrix24-create-app/browser/index.html` для стандартной разработки (`npm run watch`)
- Список установленных приложений можно посмотреть тут https://DOMAIN.bitrix24.ru/devops/list/

### Ссылки

- Angular (https://angular.dev/)
- RxJS (https://rxjs.dev/)
- TypeScript (https://www.typescriptlang.org/)
- REST API (https://dev.1c-bitrix.ru/rest_help/)

#### Связанные пакеты

- bitrix24-library (https://www.npmjs.com/package/bitrix24-library)
- bitrix24-stickerpack-app (https://github.com/astrotrain55/bitrix24-stickerpack-app)
- bitrix24-pricing-app (https://github.com/astrotrain55/bitrix24-pricing-app)
- vue-bitrix24 (https://www.npmjs.com/package/vue-bitrix24)

#### Сетка

- npmjs (https://www.npmjs.com/package/smart-grid)
  - авторское описание на [YouTube](https://www.youtube.com/playlist?list=PLyeqauxei6je28tJvioIsE0bYnARh0UVz)
