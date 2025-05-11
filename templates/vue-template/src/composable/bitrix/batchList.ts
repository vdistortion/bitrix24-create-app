import type { IBitrix24Library, RequestType } from 'bitrix24-library';
import getRequestList from './requestList.ts';
import handlerList from './handlerList.ts';

export default class BitrixBatch {
  private readonly batch: any;
  private readonly requestList: any;

  constructor(BX24: IBitrix24Library) {
    const instance = BX24.createBatch(handlerList);
    this.batch = instance.batch.bind(instance);
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

  addEntities(params: RequestType<{ fields: Record<string, string> }>[]) {
    return this.batch(params);
  }
}
