import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import vuetify from './plugins/vuetify';
import Bitrix24 from './plugins/bitrix';

Vue.config.productionTip = false;

Bitrix24.init(true).then(($BX24) => {
  store.commit('bx24init', $BX24);

  const app = new Vue({
    store,
    router,
    vuetify,
    provide: { $BX24 },
    render: (h) => h(App),
  });

  app.$mount('#app');
});
