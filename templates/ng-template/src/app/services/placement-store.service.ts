import { Injectable } from '@angular/core';
import { BitrixService } from './bitrix.service';

export interface IPlacement {
  placement: string;
  name: string;
  bind: boolean;
}

export interface IList {
  [key: string]: IPlacement;
}

@Injectable({
  providedIn: 'root',
})
export class PlacementStoreService {
  private placementList: IList = {};

  constructor(private bitrixService: BitrixService) {}

  link(code: string, id: string) {
    const link = `/marketplace/view/${code}/?params[id]=${id}`;
    return encodeURI(link);
  }

  get list() {
    return this.placementList;
  }

  setList(list: IList) {
    this.placementList = list;
  }

  bind(item: { placement: string; name: string }) {
    this.bitrixService.batch
      .bind(item.placement, item.name)
      .then((list: IList) => this.setList(list));
  }

  unbind(placement: string) {
    this.bitrixService.batch
      .unbind(placement)
      .then((list: IList) => this.setList(list));
  }
}
