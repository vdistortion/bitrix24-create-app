import requestList from './requestList';
import handlerList from './handlerList';

export default class BitrixBatch {
  constructor(BX24) {
    this.callBatch = BX24.batch.bind(BX24);
  }

  load(isAdmin) {
    return this.batch(requestList.initParams(isAdmin));
  }

  bind(placement, name) {
    return this.batch(requestList.placementBind(placement, name))
      .then(({ placementList }) => placementList);
  }

  unbind(placement) {
    return this.batch(requestList.placementUnbind(placement))
      .then(({ placementList }) => placementList);
  }

  batch(request) {
    return this.callBatch(request, handlerList);
  }
}
