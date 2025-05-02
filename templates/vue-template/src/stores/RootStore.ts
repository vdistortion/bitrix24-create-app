import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useBitrix24 } from '@/api/bitrix';

export const useRootStore = defineStore('rootStore', () => {
  const { batch, BX24 } = useBitrix24();
  const loader = ref(false);
  const appInfoId = ref(0);
  const appInfoCode = ref('');
  const currentId = ref('');
  const department = ref([]);
  const users = ref({});
  const placementInfo = ref({});

  function init() {
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

  async function appInfo() {
    const RestCall = BX24.createBatch();

    return RestCall.batch({
      appInfo: ['app.info'],
      profile: ['profile'],
      scope: ['scope'],
    }).then((response: any) => ({
      ...response,
      placementInfo: BX24.placement.info(),
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
    init,
    appInfo,
  };
});
