export default {
  namespaced: true,

  state() {
    return {
      placementList: [],
    };
  },

  getters: {
    appLink(state, getters, rootState) {
      const link = `/marketplace/view/${rootState.appInfo.CODE}/?params[id]=${rootState.appInfo.ID}`;
      return encodeURI(link);
    },
  },

  mutations: {
    setList(state, list) {
      if (list) state.placementList = list;
    },
  },

  actions: {
    bind({ commit, rootState }, item) {
      rootState.batch.bind(item.placement, item.name).then((list) => {
        commit('setList', list);
      });
    },
    unbind({ commit, rootState }, placement) {
      rootState.batch.unbind(placement).then((list) => {
        commit('setList', list);
      });
    },
  },
};
