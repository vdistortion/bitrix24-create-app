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
defineOptions({
  inheritAttrs: false,
});

const pages = [
  {
    path: '/',
    title: 'На главную',
    icon: 'mdiHome',
  },
  {
    path: '/settings',
    title: 'Настройки',
    icon: 'mdiTools',
  },
  {
    path: '/example',
    title: 'Компоненты',
    icon: 'mdiFormatListBulletedType',
  },
];
</script>
