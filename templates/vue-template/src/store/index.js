import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api';
import BitrixBatch from '@/api/bitrix';
import placement from './placement';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loader: false,
    BX24: {},
    batch: {},
    currentId: '',
    department: [],
    users: {},
  },

  getters: {
    domain: (state) => state.BX24.getDomain(),
    portal: (state) => state.BX24.getDomain(true),
  },

  mutations: {
    bx24init(state, BX24) {
      state.BX24 = BX24;
      state.batch = new BitrixBatch(BX24);
    },

    toggleLoader(state, loaderVisible) {
      state.loader = loaderVisible;
    },
  },

  actions: {
    init({ state, commit }) {
      commit('toggleLoader', true);
      api.test().then(console.log);

      return state.batch.load()
        .then((response) => {
          state.users = response.users;
          state.currentId = response.user;
          state.department = response.department;

          commit('toggleLoader', false);
        }).catch(console.warn);
    },
  },

  modules: {
    placement,
  },
});
