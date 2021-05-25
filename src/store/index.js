import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loader: false,
    BX24: {},
    BitrixApi: {},
    currentId: '',
    department: [],
    users: {},
  },

  getters: {
    domain: (state) => state.BX24.getDomain(),
    portal: (state, getters) => `https://${getters.domain}`,
  },

  mutations: {
    bx24init(state, { BX24, BitrixApi }) {
      state.BX24 = BX24;
      state.BitrixApi = BitrixApi;
    },

    toggleLoader(state, loaderVisible) {
      state.loader = loaderVisible;
    },
  },

  actions: {
    init({ state, commit }) {
      commit('toggleLoader', true);

      return state.BitrixApi.load().then((response) => {
        state.users = response.users;
        state.currentId = response.user;
        state.department = response.department;

        commit('toggleLoader', false);
      }).catch(console.warn);
    },
  },
});
