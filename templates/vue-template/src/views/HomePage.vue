<template>
  <the-loader v-if="loader"></the-loader>
  <user-lists v-else></user-lists>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRootStore } from '@/stores/RootStore';
import TheLoader from '@/components/AppLoader.vue';
import UserLists from '@/components/UserLists.vue';

const store = useRootStore();
const loader = computed(() => store.loader);
</script>
