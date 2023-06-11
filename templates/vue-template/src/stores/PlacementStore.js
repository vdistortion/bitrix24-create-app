import { defineStore } from 'pinia';
import { useRootStore } from './RootStore';

export const usePlacementStore = defineStore('placementStore', {
  state() {
    return {
      placementList: [],
    };
  },

  getters: {
    appLink() {
      const rootStore = useRootStore();
      const { ID, CODE } = rootStore.appInfo;
      const link = `/marketplace/view/${CODE}/?params[id]=${ID}`;
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
