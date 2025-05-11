import { Injectable } from '@angular/core';
import { BitrixService } from './bitrix.service';

@Injectable({
  providedIn: 'root',
})
export class PlacementStoreService {
  private placementList: Record<string, IPlacement> = {};

  constructor(private bitrixService: BitrixService) {}

  link(code: string, id: string | number) {
    const link = `/marketplace/view/${code}/?params[id]=${id}`;
    return encodeURI(link);
  }

  get list() {
    return this.placementList;
  }

  setList(list: Record<string, IPlacement>) {
    this.placementList = list;
  }

  bind(item: { placement: string; name: string }) {
    return this.bitrixService.batch
      .bind(item.placement, item.name)
      .then((list: Record<string, IPlacement>) => this.setList(list));
  }

  unbind(placement: string) {
    return this.bitrixService.batch
      .unbind(placement)
      .then((list: Record<string, IPlacement>) => this.setList(list));
  }
}
