import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { useRootStore } from './stores/RootStore';
import { Bitrix24, useBitrix24 } from './plugins/vue-bitrix24';
import App from './App.vue';
import router from './router';
import env from './env';

const app = createApp(App).use(createPinia()).use(router).use(useBitrix24);

Bitrix24.init(env.get('SCRIPTS')).then((BX24) => {
  const store = useRootStore();
  store.bx24init(BX24);
  app.provide('$BX24', BX24).mount('#app');
});
