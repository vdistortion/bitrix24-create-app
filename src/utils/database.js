import RestCall from '@/utils/restCall';

export default class DataBase {
  constructor() {
    this.call = new RestCall(this.callBatch);
  }

  request(...args) {
    this.call.batch(...args);
  }

  init(successCallback) {
    this.request(this.initParams, successCallback);
  }

  get initParams() {
    return {
      users: this.getUsersRequest,
    };
  }

  get getUsersRequest() {
    return {
      method: 'user.get',
      params: {
        USER_TYPE: 'employee',
        ACTIVE: true,
      },
    };
  }

  // b24
  get callBatch() {
    return BX24.callBatch;
  }

  static get address() {
    return BX24.getDomain();
  }

  static fitWindow() {
    BX24.fitWindow();
  }
}
