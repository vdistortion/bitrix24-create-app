import Vue from 'vue';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify';
import bx24init from './plugins/bitrix';
import bx24api from './api/bitrix';

Vue.config.productionTip = false;

bx24init(bx24api).then(({ Bitrix, $BX24 }) => {
  $BX24.addInformer(() => {
    store.commit('bx24init', $BX24);

    const app = new Vue({
      store,
      vuetify,
      Bitrix,
      render: (h) => h(App),
    });

    app.$mount('#app');
  });
});
