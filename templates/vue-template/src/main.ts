import './load';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Bitrix24 } from 'bitrix24-library';
import router from './router';
import App from './App.vue';

Bitrix24().then((BX24) => {
  createApp(App).use(createPinia()).use(router).provide('$BX24', BX24).mount('#app');
});
