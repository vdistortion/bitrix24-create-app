import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { batch, BX24 } from '@/api/bitrix';

export const useRootStore = defineStore('rootStore', () => {
  const loader = ref(false);
  const appInfoId = ref(0);
  const appInfoCode = ref('');
  const currentId = ref('');
  const department = ref([]);
  const users = ref({});
  const placementInfo = ref({});

  const domain = computed(() => (BX24 ? BX24.getDomain() : ''));
  const portal = computed(() => (BX24 ? BX24.getDomain(true) : ''));

  function init() {
    if (!BX24 || !BX24.placement) {
      return Promise.reject(new Error('Unable to initialize Bitrix24 JS library!'));
    }
    loader.value = true;
    placementInfo.value = BX24.placement.info();

    return batch
      .load()
      .then((response: any) => {
        appInfoCode.value = response.info.CODE;
        appInfoId.value = response.info.ID;
        users.value = response.users;
        currentId.value = response.user;
        department.value = response.department;
        return response.placementList;
      })
      .finally(() => {
        loader.value = false;
      });
  }

  function appInfo() {
    if (!BX24) {
      return Promise.reject(new Error('Unable to initialize Bitrix24 JS library!'));
    }
    const RestCall = BX24.createBatch();

    return RestCall.batch({
      appInfo: ['app.info'],
      profile: ['profile'],
      scope: ['scope'],
    }).then((response: any) => ({
      ...response,
      placementInfo: BX24 ? BX24.placement.info() : null,
    }));
  }

  return {
    loader,
    appInfoId,
    appInfoCode,
    currentId,
    department,
    users,
    placementInfo,
    domain,
    portal,
    init,
    appInfo,
  };
});
