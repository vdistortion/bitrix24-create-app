export default {
  initParams() {
    const params = {
      ACTIVE: true,
      USER_TYPE: 'employee',
    };

    return {
      user: ['user.current'],
      users: ['user.get', params],
      department: {
        method: 'user.get',
        params: {
          ...params,
          UF_DEPARTMENT: '$result[user][UF_DEPARTMENT]',
        },
      },
    };
  },
};
