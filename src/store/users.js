export default {
  namespaced: true,

  state: {
    list: {},
  },

  getters: {
    usersList: (state) => state.list,
  },

  mutations: {
    setList(state, users) {
      state.list = users.reduce((acc, user) => {
        if (!user.NAME || !user.LAST_NAME) return acc;

        acc[user.ID] = {
          name: user.NAME,
          lastName: user.LAST_NAME,
          photo: user.PERSONAL_PHOTO,
          birthday: user.PERSONAL_BIRTHDAY,
        };

        return acc;
      }, {});
    },
  },
};
