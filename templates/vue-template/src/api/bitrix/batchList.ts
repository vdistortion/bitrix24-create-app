import type { IBitrix24Library } from 'bitrix24-library';
import getRequestList from './requestList';
import handlerList from './handlerList';

export default class BitrixBatch {
  private readonly batch: any;
  private readonly requestList: any;

  constructor(BX24: IBitrix24Library) {
    const instanceBatch = BX24.createBatch(handlerList);
    this.batch = instanceBatch.batch.bind(instanceBatch);
    this.requestList = getRequestList();
  }

  initParams() {
    return this.batch(this.requestList.initParams());
  }

  placementList() {
    return this.batch(this.requestList.placementList());
  }

  usersList() {
    return this.batch(this.requestList.usersList());
  }

  bind(placement: string, name: string) {
    return this.batch(this.requestList.placementBind(placement, name));
  }

  unbind(placement: string) {
    return this.batch(this.requestList.placementUnbind(placement));
  }

  addEntities(params: any) {
    return this.batch(params);
  }
}
