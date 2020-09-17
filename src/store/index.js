import Vue from 'vue';
import Vuex from 'vuex';
import DataBase from '@/utils/database';
import loader from './loader';
import users from './users';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    portal: `https://${DataBase.address}`,
  },

  modules: {
    loader,
    users,
  },
});
