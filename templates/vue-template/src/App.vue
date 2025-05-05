<template>
  <dev-panel></dev-panel>
  <router-view></router-view>
  <bx-alert v-if="scopeWarning" title="🔥" size="xs" color="warning">
    {{ scopeWarning }}
  </bx-alert>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { BxAlert } from 'vue-bitrix24';
import { useRootStore } from '@/stores/RootStore';
import { usePlacementStore } from '@/stores/PlacementStore';
import DevPanel from './components/dev/DevPanel.vue';
import env from './env';

const store = useRootStore();
const placementStore = usePlacementStore();

const scopeWarning = ref('');

store.appInfo().then((info: { scope: string[] }) => {
  const list: string[] = [];

  env.get('SCOPE').forEach((scope: string) => {
    if (!info.scope.includes(scope)) list.push(scope);
  });

  if (list.length === 1) scopeWarning.value = `Не подключен scope ${list.join(', ')}`;
  if (list.length > 1) scopeWarning.value = `Не подключены scope: ${list.join(', ')}`;
});

onMounted(() => {
  store.init().then(placementStore.setList);
});
</script>

<style lang="scss">
@import 'https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@400;700&display=swap';

body {
  font-family: 'Roboto Flex', sans-serif;
  margin: 0;
}
</style>
