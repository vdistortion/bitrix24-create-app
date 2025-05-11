import type { IBitrix24Library } from 'bitrix24-library';
import getRequestList from './requestList';
import handlerList from './handlerList';

export default class BitrixBatch {
  private readonly isAdmin: boolean;
  private readonly batch: any;
  private readonly requestList: any;

  constructor(BX24: IBitrix24Library) {
    const instanceBatch = BX24.createBatch(handlerList);
    this.batch = instanceBatch.batch.bind(instanceBatch);
    this.isAdmin = BX24.isAdmin();
    this.requestList = getRequestList(this.isAdmin);
  }

  load() {
    return this.batch(this.requestList.initParams());
  }

  bind(placement: string, name: string) {
    if (this.isAdmin) {
      return this.batch(this.requestList.placementBind(placement, name)).then(
        ({ placementList }: { placementList: Record<string, IPlacement> }) => placementList,
      );
    }
    return Promise.resolve([]);
  }

  unbind(placement: string) {
    if (this.isAdmin) {
      return this.batch(this.requestList.placementUnbind(placement)).then(
        ({ placementList }: { placementList: Record<string, IPlacement> }) => placementList,
      );
    }
    return Promise.resolve([]);
  }

  addEntities(params: any) {
    return this.batch(params).then((result: any) => result);
  }
}
