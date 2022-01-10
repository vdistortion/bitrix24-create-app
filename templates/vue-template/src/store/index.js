import Vue from 'vue';
import Vuex from 'vuex';
import placement from './placement';
import api from '../api';
import BitrixBatch from '../api/bitrix';

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      loader: false,
      appInfo: {
        ID: '',
        CODE: '',
      },
      BX24: {},
      batch: {},
      currentId: '',
      department: [],
      users: {},
    };
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
      api.test().then(console.info).catch(console.warn);

      return state.batch.load(state.BX24.isAdmin())
        .then((response) => {
          state.appInfo.CODE = response.info.CODE;
          state.appInfo.ID = response.info.ID;
          state.users = response.users;
          state.currentId = response.user;
          state.department = response.department;
          commit('placement/setList', response.placementList);

          commit('toggleLoader', false);
        }).catch(console.warn);
    },
  },

  modules: {
    placement,
  },
});
