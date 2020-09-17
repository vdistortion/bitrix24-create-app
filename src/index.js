import Vue from 'vue';
import store from '@/store/';
import vuetify from '@/plugins/vuetify';
import Bitrix24 from '@/plugins/bitrix24-vue';
import App from '@/App.vue';

Vue.config.productionTip = false;
Vue.use(Bitrix24);

const app = new Vue({
  store,
  vuetify,
  render: (h) => h(App),
});

app.$mount('#app');
