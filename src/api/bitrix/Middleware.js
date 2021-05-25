export default class BitrixMiddleware {
  constructor(batch, requestList) {
    this.batch = batch;
    this.request = requestList;
  }

  load() {
    return new Promise((resolve, reject) => {
      this.batch(this.request.initParams()).then(resolve).catch(reject);
    });
  }
}
