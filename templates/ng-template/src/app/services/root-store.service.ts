import { Injectable } from '@angular/core';
import { BitrixService } from './bitrix.service';

@Injectable({
  providedIn: 'root',
})
export class RootStoreService {
  public portal: string;
  public loader: boolean = false;
  public currentId: string = '';
  public department = [];
  public users = {};
  public appInfoId: number = 0;
  public appInfoCode: string = '';

  constructor(private bitrixService: BitrixService) {}

  init() {
    if (!this.bitrixService.BX24.placement) {
      return Promise.reject(
        new Error('Unable to initialize Bitrix24 JS library!'),
      );
    }
    this.loader = true;
    this.portal = `https://${this.bitrixService.BX24.getDomain()}`;

    return this.bitrixService.batch
      .load()
      .then((response: any) => {
        this.appInfoCode = response.info.CODE;
        this.appInfoId = response.info.ID;
        this.users = response.users;
        this.currentId = response.user;
        this.department = response.department;
        return response.placementList;
      })
      .finally(() => {
        this.loader = false;
      });
  }

  appInfo() {
    if (!this.bitrixService.BX24.createBatch) {
      return Promise.reject(
        new Error('Unable to initialize Bitrix24 JS library!'),
      );
    }
    const RestCall = this.bitrixService.BX24.createBatch();

    return RestCall.batch({
      appInfo: ['app.info'],
      profile: ['profile'],
      scope: ['scope'],
    }).then((response: any) => ({
      ...response,
      placementInfo: this.bitrixService.BX24.placement.info(),
    }));
  }
}
