import { Injectable } from '@angular/core';
import { BitrixService } from './bitrix.service';

@Injectable({
  providedIn: 'root',
})
export class PlacementStoreService {
  private batch: any;
  private placementList: string[] = [];

  constructor(private bitrixService: BitrixService) {
    this.batch = this.bitrixService.batch;
  }

  link(code: string, id: string) {
    const link = `/marketplace/view/${code}/?params[id]=${id}`;
    return encodeURI(link);
  }

  get list() {
    return this.placementList;
  }

  setList(list: string[]) {
    this.placementList = list;
  }

  bind(item: { placement: string; name: string }) {
    this.batch.bind(item.placement, item.name).then(this.setList);
  }

  unbind(placement: string) {
    this.batch.unbind(placement).then(this.setList);
  }
}
