<template>
  <dev-panel></dev-panel>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRootStore } from '@/stores/RootStore';
import { usePlacementStore } from '@/stores/PlacementStore';
import DevPanel from './components/dev/DevPanel.vue';
import env from './env';

const store = useRootStore();
const placementStore = usePlacementStore();

function init() {
  return store.init();
}

function setList(list: IPlacements) {
  placementStore.setList(list);
}

function verifyScopeLog(scopeList: string[], requiredList: string[]) {
  [...scopeList, ...requiredList].forEach((scope: string) => {
    const message = `🔥 scope "${scope}" `;
    if (!scopeList.includes(scope)) console.info(message + 'excess');
    if (!requiredList.includes(scope)) console.info(message + 'not found');
  });
}

store.appInfo().then((info: { scope: string[] }) => {
  verifyScopeLog(env.get('SCOPE'), info.scope);
});

onMounted(() => {
  init().then(setList);
});
</script>

<style lang="scss">
@import 'https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@400;700&display=swap';

body {
  font-family: 'Roboto Flex', sans-serif;
  margin: 0;
}
</style>
