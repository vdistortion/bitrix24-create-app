export default () => ({
  initParams() {
    return {
      appInfo: ['app.info'],
      scope: ['scope'],
      profile: ['profile'],
    };
  },

  usersList() {
    return {
      users: [
        'user.get',
        {
          FILTER: {
            USER_TYPE: 'employee',
          },
        },
      ],
    };
  },

  placementList() {
    return {
      placementList: ['placement.get'],
    };
  },

  placementBind(placement: string, name: string) {
    return {
      placementBind: {
        method: 'placement.bind',
        params: {
          PLACEMENT: placement,
          HANDLER: [window.location.origin, window.location.pathname].join(''),
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

  placementUnbind(placement: string) {
    return {
      placementUnbind: {
        method: 'placement.unbind',
        params: {
          PLACEMENT: placement,
        },
      },
      ...this.placementList(),
    };
  },
});
