import config from '../../config';

export default (isAdmin) => ({
  initParams() {
    const params = {
      ACTIVE: true,
      USER_TYPE: 'employee',
    };
    const options = {
      info: ['app.info'],
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

    if (isAdmin) {
      return {
        ...this.placementList(),
        ...options,
      };
    }

    return options;
  },

  placementList() {
    return {
      placementList: ['placement.get'],
    };
  },

  placementBind(placement, name) {
    return {
      placementBind: {
        method: 'placement.bind',
        params: {
          PLACEMENT: placement,
          HANDLER: config.handler,
          LANG_ALL: {
            ru: {
              TITLE: name,
            },
          },
        },
      },
      ...this.placementList(),
    };
  },

  placementUnbind(placement) {
    return {
      placementUnbind: {
        method: 'placement.unbind',
        params: {
          PLACEMENT: placement,
          HANDLER: config.handler,
        },
      },
      ...this.placementList(),
    };
  },
});