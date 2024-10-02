import{_ as i,c as a,a0 as e,o as t}from"./chunks/framework.Ckbb3OfN.js";const c=JSON.parse('{"title":"vue-template","description":"","frontmatter":{},"headers":[],"relativePath":"vue-template.md","filePath":"vue-template.md"}'),n={name:"vue-template.md"};function l(h,s,p,r,k,d){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="vue-template" tabindex="-1">vue-template <a class="header-anchor" href="#vue-template" aria-label="Permalink to &quot;vue-template&quot;">​</a></h1><p>Vue 3, Pinia, TypeScript, SCSS, vue-bitrix24, bitrix24-library</p><h3 id="запуск" tabindex="-1">Запуск <a class="header-anchor" href="#запуск" aria-label="Permalink to &quot;Запуск&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># в корне проекта</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .env</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .env.development</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div><h3 id="команды" tabindex="-1">Команды <a class="header-anchor" href="#команды" aria-label="Permalink to &quot;Команды&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # development на локалке</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> watch</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # development на сервере (записывает файлы на диск и следит за изменениями)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # production и сборка архива с приложением первого типа</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> format</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # prettier</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> grid</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # пересборка сетки</span></span></code></pre></div><h4 id="поиск-фаилов" tabindex="-1">Поиск файлов <a class="header-anchor" href="#поиск-фаилов" aria-label="Permalink to &quot;Поиск файлов&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # список файлов</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> word</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # только полные слова</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> full</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # подробно</span></span></code></pre></div><h3 id="структура" tabindex="-1">Структура <a class="header-anchor" href="#структура" aria-label="Permalink to &quot;Структура&quot;">​</a></h3><h4 id="env" tabindex="-1">/.env <a class="header-anchor" href="#env" aria-label="Permalink to &quot;/.env&quot;">​</a></h4><div class="language-dotenv vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dotenv</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># список скоупов, необходимых для работы приложения</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">VITE_SCOPE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># название приложения</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">VITE_APP_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># список мест для встраивания приложения</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">VITE_PLACEMENT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># список доменов, которые считаются тестовыми</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">VITE_TEST_DOMAINS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]</span></span></code></pre></div><h4 id="src-api" tabindex="-1">/src/api/ <a class="header-anchor" href="#src-api" aria-label="Permalink to &quot;/src/api/&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/src/api/index.ts</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # запросы к серверу</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/src/api/HttpClient.ts</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # подключение axios</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/src/api/bitrix/index.ts</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # класс для работы с API Битрикс24</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/src/api/bitrix/requestList.ts</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # batch-запросы</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/src/api/bitrix/handlerList.ts</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # обработка ответов</span></span></code></pre></div><h4 id="src-components-dev" tabindex="-1">/src/components/dev/ <a class="header-anchor" href="#src-components-dev" aria-label="Permalink to &quot;/src/components/dev/&quot;">​</a></h4><p>Панель управления (для разработки), содержит:</p><ul><li>Обновление фрейма</li><li>Скачивание архива с приложением первого типа</li><li>Страница для администраторов портала со списком встраиваний (placement)</li><li>Страница со списком компонентов плагина <code>vue-bitrix24</code></li><li>Отображается на порталах из списка <code>VITE_TEST_DOMAINS</code> (<code>.env</code>)</li></ul><h4 id="src-views" tabindex="-1">/src/views/ <a class="header-anchor" href="#src-views" aria-label="Permalink to &quot;/src/views/&quot;">​</a></h4><p>Список страниц приложения</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/src/views/HomePage.vue</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # главная страница приложения</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/src/views/PlacementPage.vue</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # список встраиваний</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/src/views/ExamplePage.vue</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # список доступных компонентов vue-bitrix24</span></span></code></pre></div><h3 id="подключение-к-битрикс24" tabindex="-1">Подключение к Битрикс24 <a class="header-anchor" href="#подключение-к-битрикс24" aria-label="Permalink to &quot;Подключение к Битрикс24&quot;">​</a></h3><ul><li>Создайте локальное приложение на существующем портале по ссылке <a href="https://DOMAIN.bitrix24.ru/devops/section/standard/" target="_blank" rel="noreferrer">https://DOMAIN.bitrix24.ru/devops/section/standard/</a><ul><li>Или создайте новый портал <a href="https://www.bitrix24.ru/create.php" target="_blank" rel="noreferrer">https://www.bitrix24.ru/create.php</a> (для регистрации лучше использовать временную почту, например <a href="https://temp-mail.org/ru/" target="_blank" rel="noreferrer">https://temp-mail.org/ru/</a>)</li></ul></li><li>&quot;Путь вашего обработчика&quot;: <ul><li><code>http://127.0.0.1:5173/index.html</code> для локальной разработки (<code>npm run dev</code>)</li><li><code>ПУТЬ_ДО_ПРИЛОЖЕНИЯ_НА_СЕРВЕРЕ/dist/index.html</code> для стандартной разработки (<code>npm run watch</code>)</li></ul></li><li>Список установленных приложений можно посмотреть тут <a href="https://DOMAIN.bitrix24.ru/devops/list/" target="_blank" rel="noreferrer">https://DOMAIN.bitrix24.ru/devops/list/</a></li></ul><h3 id="ссылки" tabindex="-1">Ссылки <a class="header-anchor" href="#ссылки" aria-label="Permalink to &quot;Ссылки&quot;">​</a></h3><ul><li>Vue (<a href="https://vuejs.org/" target="_blank" rel="noreferrer">https://vuejs.org/</a>)</li><li>Pinia (<a href="https://pinia.vuejs.org/" target="_blank" rel="noreferrer">https://pinia.vuejs.org/</a>)</li><li>Vite (<a href="https://vitejs.dev/" target="_blank" rel="noreferrer">https://vitejs.dev/</a>)</li><li>axios (<a href="https://axios-http.com/ru/" target="_blank" rel="noreferrer">https://axios-http.com/ru/</a>)</li><li>TypeScript (<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">https://www.typescriptlang.org/</a>)</li><li>REST API (<a href="https://dev.1c-bitrix.ru/rest_help/" target="_blank" rel="noreferrer">https://dev.1c-bitrix.ru/rest_help/</a>)</li></ul><h4 id="сетка" tabindex="-1">Сетка <a class="header-anchor" href="#сетка" aria-label="Permalink to &quot;Сетка&quot;">​</a></h4><ul><li>npmjs (<a href="https://www.npmjs.com/package/smart-grid" target="_blank" rel="noreferrer">https://www.npmjs.com/package/smart-grid</a>) <ul><li>авторское описание на <a href="https://www.youtube.com/playlist?list=PLyeqauxei6je28tJvioIsE0bYnARh0UVz" target="_blank" rel="noreferrer">YouTube</a></li></ul></li></ul>`,25)]))}const g=i(n,[["render",l]]);export{c as __pageData,g as default};
