import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useRootStore } from './RootStore';
import { batch } from '@/api/bitrix';

export const usePlacementStore = defineStore('placementStore', () => {
  const placementList = ref([]);

  const appLink = computed(() => {
    const rootStore = useRootStore();
    const id = rootStore.appInfoId;
    const code = rootStore.appInfoCode;
    const link = `/marketplace/view/${code}/?params[id]=${id}`;
    return encodeURI(link);
  });

  function setList(list) {
    if (list) placementList.value = list;
  }

  function bind(item) {
    batch.bind(item.placement, item.name).then(setList);
  }

  function unbind(placement) {
    batch.unbind(placement).then(setList);
  }

  return {
    placementList,
    appLink,
    setList,
    bind,
    unbind,
  };
});
