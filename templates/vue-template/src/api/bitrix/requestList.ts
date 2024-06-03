import type { BatchRequestType } from 'bitrix24-library';

const handler = [window.location.origin, window.location.pathname].join('');

export default (isAdmin: boolean) => ({
  initParams(): BatchRequestType {
    const options: BatchRequestType = {
      info: ['app.info'],
      user: ['user.current'],
      users: [
        'user.get',
        {
          FILTER: {
            USER_TYPE: 'employee',
          },
        },
      ],
      department: {
        method: 'user.get',
        params: {
          FILTER: {
            USER_TYPE: 'employee',
            UF_DEPARTMENT: '$result[user][UF_DEPARTMENT]',
          },
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

  placementList(): BatchRequestType {
    return {
      placementList: ['placement.get'],
    };
  },

  placementBind(placement: string, name: string): BatchRequestType {
    return {
      placementBind: {
        method: 'placement.bind',
        params: {
          PLACEMENT: placement,
          HANDLER: handler,
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

  placementUnbind(placement: string): BatchRequestType {
    return {
      placementUnbind: {
        method: 'placement.unbind',
        params: {
          PLACEMENT: placement,
          HANDLER: handler,
        },
      },
      ...this.placementList(),
    };
  },
});
