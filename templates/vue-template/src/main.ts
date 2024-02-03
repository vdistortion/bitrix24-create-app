import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue';
import { bx24init } from './api/bitrix';
import { Bitrix24, useBitrix24 } from './plugins/vue-bitrix24';

Bitrix24.init().then((BX24) => {
  bx24init(BX24);

  createApp(App)
    .use(createPinia())
    .use(router)
    .use(useBitrix24)
    .provide('$BX24', BX24)
    .mount('#app');
});
