import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BitrixService } from './bitrix.service';

type PlacementResponseType = {
  placementList: Record<string, IPlacement>;
};

type UsersResponseType = {
  users: Record<string, IUserNew>;
};

type InitResponseType = {
  appInfo: {
    CODE: string;
    ID: number;
  };
  profile: {
    ID: string;
  };
  scope: string[];
};

@Injectable({
  providedIn: 'root',
})
export class RootStoreService {
  private bitrixService = inject(BitrixService);
  private BX24 = this.bitrixService.get();
  isAdmin = this.BX24.isAdmin();
  placementInfo = this.BX24.placement.info();

  loader$ = new BehaviorSubject(false);
  appInfoId = 1;
  appInfoCode = '';
  scopeList: string[] = [];
  userId = '';
  userList: Record<string, IUserNew> = {};
  placementList: Record<string, IPlacement> = {};

  get appId() {
    return this.appInfoId;
  }

  get appCode() {
    return this.appInfoCode;
  }

  get currentId() {
    return this.userId;
  }

  get usersEnabled() {
    const list = Object.entries(this.userList).filter(([_key, user]) => user.active);
    return Object.fromEntries(list);
  }

  get usersDisabled() {
    const list = Object.entries(this.userList).filter(([_key, user]) => !user.active);
    return Object.fromEntries(list);
  }

  get appLink() {
    const link = `/marketplace/view/${this.appCode}/?params[id]=${this.appId}`;
    return encodeURI(link);
  }

  async init() {
    this.loader$.next(true);

    const { appInfo, profile, scope } =
      (await this.bitrixService.batch.initParams()) as InitResponseType;
    this.appInfoId = appInfo.ID;
    this.appInfoCode = appInfo.CODE;
    this.scopeList = scope;
    this.userId = profile.ID;

    if (scope.includes('placement') && this.isAdmin) {
      const { placementList: list } =
        (await this.bitrixService.batch.placementList()) as PlacementResponseType;
      this.placementList = list;
    }

    if (scope.includes('user_brief')) {
      const { users } = (await this.bitrixService.batch.usersList()) as UsersResponseType;
      this.userList = users;
    }

    this.loader$.next(false);
  }

  async bind(item: { placement: string; name: string }) {
    const { placementList: list } = await this.bitrixService.batch.bind(item.placement, item.name);
    this.placementList = list;
  }

  async unbind(placement: string) {
    const { placementList: list } = await this.bitrixService.batch.unbind(placement);
    this.placementList = list;
  }
}
