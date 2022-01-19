import getRequestList from './requestList';
import handlerList from './handlerList';

export default class BitrixBatch {
  constructor(BX24, isAdmin = false) {
    this.callBatch = BX24.batch.bind(BX24);
    this.isAdmin = isAdmin;
    this.requestList = getRequestList(isAdmin);
  }

  load() {
    return this.batch(this.requestList.initParams());
  }

  bind(placement, name) {
    if (this.isAdmin) {
      return this.batch(this.requestList.placementBind(placement, name))
        .then(({ placementList }) => placementList);
    }
    return Promise.resolve([]);
  }

  unbind(placement) {
    if (this.isAdmin) {
      return this.batch(this.requestList.placementUnbind(placement))
        .then(({ placementList }) => placementList);
    }
    return Promise.resolve([]);
  }

  batch(request) {
    return this.callBatch(request, handlerList);
  }
}
