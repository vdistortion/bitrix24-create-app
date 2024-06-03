import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Bitrix24, { type IBitrix24Library } from 'bitrix24-library';
import router from './router';
import App from './App.vue';
import { bx24init } from './api/bitrix';

Bitrix24.init().then((BX24: IBitrix24Library) => {
  bx24init(BX24);
  createApp(App).use(createPinia()).use(router).provide('$BX24', BX24).mount('#app');
});
