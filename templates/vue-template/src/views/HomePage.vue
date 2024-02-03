<template>
  <the-loader v-if="loader" :loader="loader"></the-loader>
  <user-lists v-else></user-lists>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useRootStore } from '@/stores/RootStore';
import { usePlacementStore } from '@/stores/PlacementStore';
import TheLoader from '@/components/AppLoader.vue';
import UserLists from '@/components/UserLists.vue';
import env from '@/env';

const store = useRootStore();
const placementStore = usePlacementStore();

const loader = computed(() => store.loader);

function init() {
  return store.init();
}

function setList(list) {
  placementStore.setList(list);
}

function verifyScopeLog(scopeList, requiredList) {
  [...scopeList, ...requiredList]
    .reduce((messages, scope) => {
      if (!scopeList.includes(scope)) messages.push(`scope "${scope}" excess`);
      if (!requiredList.includes(scope)) messages.push(`scope "${scope}" not found`);
      return messages;
    }, [])
    .forEach((message) => {
      console.info('🔥', message);
    });
}

store.appInfo().then((info) => {
  verifyScopeLog(env.get('SCOPE'), info.scope);
});

onMounted(() => {
  init().then(setList);
});
</script>
