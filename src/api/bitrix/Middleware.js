export default class Middleware {
  constructor(restCall, requestList = {}) {
    this.batch = restCall.batch.bind(restCall);
    this.request = requestList;
  }

  load() {
    return new Promise((resolve, reject) => {
      this.batch(this.request.initParams()).then(resolve).catch(reject);
    });
  }
}
