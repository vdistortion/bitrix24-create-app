export default {
  namespaced: true,

  state: {
    visible: false,
  },

  mutations: {
    setVisible(state, loaderVisible) {
      state.visible = loaderVisible;
    },
  },
};
