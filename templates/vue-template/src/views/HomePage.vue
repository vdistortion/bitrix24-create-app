<template>
  <app-loader v-if="store.loading"></app-loader>
  <user-lists v-else></user-lists>
</template>

<script setup lang="ts">
import { useRootStore } from '@/stores/RootStore';
import AppLoader from '@/components/AppLoader.vue';
import UserLists from '@/components/UserLists.vue';

const store = useRootStore();
</script>
