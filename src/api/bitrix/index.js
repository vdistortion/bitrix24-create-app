import requestList from './requestList';
import handlerList from './handlerList';

export default class BitrixBatch {
  constructor(BX24) {
    this.callBatch = BX24.batch.bind(BX24);
  }

  load() {
    return this.batch(requestList.initParams());
  }

  batch(request) {
    return this.callBatch(request, handlerList);
  }
}
