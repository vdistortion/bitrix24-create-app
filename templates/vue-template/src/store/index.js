import Vue from 'vue';
import Vuex from 'vuex';
import placement from './placement';
import api from '../api';
import BitrixBatch from '../api/bitrix';

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      loader: true,
      appInfo: {
        ID: '',
        CODE: '',
      },
      BX24: {},
      batch: {},
      currentId: '',
      department: [],
      users: {},
      placementInfo: {},
    };
  },

  getters: {
    domain: (state) => state.BX24.getDomain(),
    portal: (state) => state.BX24.getDomain(true),
  },

  mutations: {
    bx24init(state, BX24) {
      state.BX24 = BX24;
      state.batch = new BitrixBatch(BX24, BX24.isAdmin());
    },

    toggleLoader(state, visible) {
      state.loader = visible;
    },
  },

  actions: {
    init({ state, commit }) {
      api.test().then(console.info).catch(console.warn);
      state.placementInfo = state.BX24.placement.info();

      return state.batch.load().then((response) => {
        state.appInfo.CODE = response.info.CODE;
        state.appInfo.ID = response.info.ID;
        state.users = response.users;
        state.currentId = response.user;
        state.department = response.department;
        commit('placement/setList', response.placementList);
      }).catch(console.warn).finally(() => {
        commit('toggleLoader', false);
      });
    },
  },

  modules: {
    placement,
  },
});
