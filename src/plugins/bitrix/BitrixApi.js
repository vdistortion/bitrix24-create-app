export default class BitrixApi {
  constructor(BX24, callBatch) {
    this.BX24 = BX24;
    this.callBatch = callBatch;
  }

  get getDomain() {
    return this.BX24.getDomain();
  }

  fitWindow() {
    this.BX24.fitWindow();
  }

  setTitle(title) {
    this.BX24.setTitle(title, () => {});
  }

  loadScript(scripts, cb = () => {}) {
    this.BX24.loadScript(scripts, cb);
  }

  addInformer(cb) {
    this.loadScript(['https://www.szdl.ru/app/branding/init.js'], cb);
  }
}
