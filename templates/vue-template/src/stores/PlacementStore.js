import { defineStore } from 'pinia';
import { useRootStore } from './';

export const usePlacementStore = defineStore('placementStore', {
  state() {
    return {
      placementList: [],
    };
  },

  getters: {
    appLink() {
      const rootStore = useRootStore();
      const link = `/marketplace/view/${rootStore.appInfo.CODE}/?params[id]=${rootStore.appInfo.ID}`;
      return encodeURI(link);
    },
  },

  actions: {
    setList(list) {
      if (list) this.placementList = list;
    },
    bind(item) {
      const rootStore = useRootStore();
      rootStore.batch.bind(item.placement, item.name).then((list) => {
        this.setList(list);
      });
    },
    unbind(placement) {
      const rootStore = useRootStore();
      rootStore.batch.unbind(placement).then((list) => {
        this.setList(list);
      });
    },
  },
});
