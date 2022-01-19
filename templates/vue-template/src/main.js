import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import Bitrix24 from './plugins/vue-bitrix24';
import config from './config';

Vue.config.productionTip = false;

Bitrix24.init(config.scripts).then(($BX24) => {
  setInterval(() => $BX24.fitWindow(), 1000);
  store.commit('bx24init', $BX24);

  const app = new Vue({
    store,
    router,
    provide: { $BX24 },
    render: (h) => h(App),
  });

  app.$mount('#app');
});
