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
import { defineOptions, reactive, computed, inject } from 'vue';

defineOptions({
  inheritAttrs: false,
});

const $BX24 = inject('$BX24');

const data = reactive({
  buttons: [
    {
      admin: true,
      path: '/',
      title: 'На главную',
      icon: 'mdiHome',
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

const isAdmin = computed(() => $BX24.isAdmin());

const pages = computed(() => {
  if (isAdmin.value) return data.buttons;
  return data.buttons.filter((btn) => !btn.admin);
});
</script>
