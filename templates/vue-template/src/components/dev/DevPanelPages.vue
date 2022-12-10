<template>
  <router-link
    v-for="page in pages"
    :key="page.path"
    :to="page.path"
    :title="page.title"
    v-bind="$attrs"
  >
    <app-icon :icon="page.icon"></app-icon>
  </router-link>
</template>

<script>
import AppIcon from '../AppIcon.vue';

export default {
  computed: {
    isAdmin() {
      return this.$BX24.isAdmin();
    },

    pages() {
      if (this.isAdmin) return this.buttons;
      return this.buttons.filter((btn) => !btn.admin);
    },
  },
  data() {
    return {
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
          title: 'Компоненты vue-bitrix24',
          icon: 'mdiFormatListBulletedType',
        },
      ],
    };
  },
  inheritAttrs: false,
  inject: ['$BX24'],
  components: {
    AppIcon,
  },
  name: 'dev-panel-pages',
};
</script>
