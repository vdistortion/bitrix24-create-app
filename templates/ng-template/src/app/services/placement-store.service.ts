import { Injectable } from '@angular/core';
import { BitrixService } from './bitrix.service';

@Injectable({
  providedIn: 'root',
})
export class PlacementStoreService {
  private placementList: IPlacements = {};

  constructor(private bitrixService: BitrixService) {}

  link(code: string, id: string | number) {
    const link = `/marketplace/view/${code}/?params[id]=${id}`;
    return encodeURI(link);
  }

  get list() {
    return this.placementList;
  }

  setList(list: IPlacements) {
    this.placementList = list;
  }

  bind(item: { placement: string; name: string }) {
    this.bitrixService.batch
      .bind(item.placement, item.name)
      .then((list: IPlacements) => this.setList(list));
  }

  unbind(placement: string) {
    this.bitrixService.batch
      .unbind(placement)
      .then((list: IPlacements) => this.setList(list));
  }
}
