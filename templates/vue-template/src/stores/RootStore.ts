import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { useBitrix24 } from '@/api/bitrix';

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

export const useRootStore = defineStore('RootStore', () => {
  const { BX24, batch } = useBitrix24();
  const isAdmin = BX24.isAdmin();
  const placementInfo = BX24.placement.info();

  const loader = ref(false);
  const appInfoId = ref(1);
  const appInfoCode = ref('');
  const scopeList = ref<string[]>([]);
  const userId = ref('');
  const userList = ref<Record<string, IUserNew>>({});
  const placementList = ref<Record<string, IPlacement>>({});

  const loading = computed(() => loader.value);
  const appId = computed(() => appInfoId.value);
  const appCode = computed(() => appInfoCode.value);
  const currentId = computed(() => userId.value);

  const usersEnabled = computed(() => {
    const list = Object.entries(userList.value).filter(([_key, user]) => user.active);
    return Object.fromEntries(list);
  });

  const usersDisabled = computed(() => {
    const list = Object.entries(userList.value).filter(([_key, user]) => !user.active);
    return Object.fromEntries(list);
  });

  const appLink = computed(() => {
    const link = `/marketplace/view/${appCode.value}/?params[id]=${appId.value}`;
    return encodeURI(link);
  });

  async function init() {
    loader.value = true;

    const { appInfo, profile, scope } = (await batch.initParams()) as InitResponseType;
    appInfoId.value = appInfo.ID;
    appInfoCode.value = appInfo.CODE;
    scopeList.value = scope;
    userId.value = profile.ID;

    if (scope.includes('placement') && isAdmin) {
      const { placementList: list } = (await batch.placementList()) as PlacementResponseType;
      placementList.value = list;
    }

    if (scope.includes('user_brief')) {
      const { users } = (await batch.usersList()) as UsersResponseType;
      userList.value = users;
    }

    loader.value = false;
  }

  async function bind(item: { placement: string; name: string }) {
    const { placementList: list } = await batch.bind(item.placement, item.name);
    placementList.value = list;
  }

  async function unbind(placement: string) {
    const { placementList: list } = await batch.unbind(placement);
    placementList.value = list;
  }

  return {
    isAdmin,
    placementInfo,
    appId,
    appCode,
    scopeList,
    placementList,
    loading,
    currentId,
    usersEnabled,
    usersDisabled,
    appLink,
    init,
    bind,
    unbind,
  };
});
