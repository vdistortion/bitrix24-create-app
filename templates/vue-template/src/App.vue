<template>
  <dev-panel></dev-panel>
  <router-view></router-view>
  <bx-alert v-if="scopeWarning" title="🔥" size="xs" color="warning">
    {{ scopeWarning }}
  </bx-alert>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, onMounted, ref } from 'vue';
import { BxAlert } from 'vue-bitrix24';
import { useRootStore } from './stores/RootStore';
import { useBitrix24 } from './api/bitrix';
import { env } from './utils/helpers';

const store = useRootStore();
const { BX24 } = useBitrix24();
const DevPanel = computed(() =>
  env('TEST_DOMAINS').includes(BX24.getDomain())
    ? defineAsyncComponent(() => import('./components/dev/DevPanel.vue'))
    : '',
);

const scopeWarning = ref('');

onMounted(() => {
  store.init().then(() => {
    const list: string[] = [];

    env('SCOPE').forEach((scope: string) => {
      if (!store.scopeList.includes(scope)) list.push(scope);
    });

    if (list.length === 1) scopeWarning.value = `Не подключен scope ${list.join(', ')}`;
    if (list.length > 1) scopeWarning.value = `Не подключены scope: ${list.join(', ')}`;
  });
});
</script>

<style lang="scss">
@import 'https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@400;700&display=swap';

body {
  font-family: 'Roboto Flex', sans-serif;
  margin: 0;
}
</style>
