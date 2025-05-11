import { inject, Injectable } from '@angular/core';
import { BitrixService } from './bitrix.service';

@Injectable({
  providedIn: 'root',
})
export class RootStoreService {
  private bitrixService = inject(BitrixService);
  private BX24 = this.bitrixService.get();
  public portal: string = `https://${this.BX24.getDomain()}`;
  public loader: boolean = false;
  public currentId: string = '';
  public department = [];
  public users = {};
  public appInfoId: number = 0;
  public appInfoCode: string = '';

  init() {
    this.loader = true;

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
    const RestCall = this.BX24.createBatch();

    return RestCall.batch({
      appInfo: ['app.info'],
      profile: ['profile'],
      scope: ['scope'],
    }).then((response: any) => ({
      ...response,
      placementInfo: this.BX24.placement.info(),
    }));
  }
}
