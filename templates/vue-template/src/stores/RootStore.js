import { defineStore } from 'pinia';
import BitrixBatch from '../api/bitrix';

export const useRootStore = defineStore('rootStore', {
  state() {
    return {
      loader: false,
      appInfo: {
        ID: '',
        CODE: '',
      },
      BX24: {},
      batch: {},
      currentId: '',
      department: [],
      users: {},
      placementInfo: {},
    };
  },

  getters: {
    domain: (state) => state.BX24.getDomain(),
    portal: (state) => state.BX24.getDomain(true),
  },

  actions: {
    bx24init(BX24) {
      this.BX24 = BX24;
      this.batch = new BitrixBatch(BX24, BX24.isAdmin());
    },
    toggleLoader(visible) {
      this.loader = visible;
    },
    init() {
      this.placementInfo = this.BX24.placement.info();

      return this.batch.load().then((response) => {
        this.appInfo.CODE = response.info.CODE;
        this.appInfo.ID = response.info.ID;
        this.users = response.users;
        this.currentId = response.user;
        this.department = response.department;
        return response.placementList;
      });
    },
  },
});
