<template>
  <router-link
    v-for="page in pages"
    :key="page.path"
    :to="page.path"
    :title="page.title"
    v-bind="$attrs"
  >
    <slot :icon="page.icon"></slot>
  </router-link>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import { useBitrix24 } from '@/api/bitrix';

defineOptions({
  inheritAttrs: false,
});

const { BX24 } = useBitrix24();

const data = reactive({
  buttons: [
    {
      admin: true,
      path: '/',
      title: 'На главную',
      icon: 'mdiHome',
    },
    {
      admin: false,
      path: '/generator',
      title: 'Генератор сущностей',
      icon: 'mdiReceiptTextPlus',
    },
    {
      admin: true,
      path: '/placement',
      title: 'Настройки встраивания',
      icon: 'mdiTools',
    },
    {
      admin: false,
      path: '/example',
      title: 'Компоненты',
      icon: 'mdiFormatListBulletedType',
    },
  ],
});

const pages = computed(() => {
  if (BX24.isAdmin()) return data.buttons;
  return data.buttons.filter((btn) => !btn.admin);
});
</script>
