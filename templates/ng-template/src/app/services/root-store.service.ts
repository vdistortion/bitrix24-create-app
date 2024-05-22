import { Injectable } from '@angular/core';
import { BitrixService } from './bitrix.service';

@Injectable({
  providedIn: 'root',
})
export class RootStoreService {
  private $BX24: any;
  private batch: any;
  public currentId: string = '';
  public department = [];
  public users = {};
  private placementInfo = {};
  private domain: string;
  public portal: string;
  public loader: boolean = false;
  public appInfoId: number = 0;
  public appInfoCode: string = '';

  constructor(private bitrixService: BitrixService) {
    this.$BX24 = this.bitrixService.BX24;
    this.batch = this.bitrixService.batch;
    this.domain = this.$BX24.getDomain();
    this.portal = this.$BX24.getDomain(true);
  }

  toggleLoader(visible: boolean) {
    this.loader = visible;
  }

  init() {
    if (!this.$BX24.placement) {
      return Promise.reject(
        new Error('Unable to initialize Bitrix24 JS library!'),
      );
    }
    this.placementInfo = this.$BX24.placement.info();

    return this.batch.load().then((response: any) => {
      this.appInfoCode = response.info.CODE;
      this.appInfoId = response.info.ID;
      this.users = response.users;
      this.currentId = response.user;
      this.department = response.department;
      return response.placementList;
    });
  }

  appInfo() {
    if (!this.$BX24.createBatch) {
      return Promise.reject(
        new Error('Unable to initialize Bitrix24 JS library!'),
      );
    }
    const RestCall = this.$BX24.createBatch();

    return RestCall.batch({
      appInfo: ['app.info'],
      profile: ['profile'],
      scope: ['scope'],
    }).then((response: any) => ({
      ...response,
      placementInfo: this.$BX24.placement.info(),
    }));
  }
}
