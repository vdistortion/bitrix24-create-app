<template>
  <router-link
    v-for="page in pages"
    :key="page.path"
    :to="page.path"
    :title="page.title"
    v-bind="$attrs"
  >
    <span class="mdi" :class="page.className"></span>
  </router-link>
</template>

<script>
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
          admin: false,
          path: '/',
          title: 'На главную',
          className: 'mdi-home',
        },
        {
          admin: true,
          path: '/placement',
          title: 'Настройки встраивания',
          className: 'mdi-tools',
        },
        {
          admin: false,
          path: '/example',
          title: 'Компоненты vue-bitrix24',
          className: 'mdi-format-list-bulleted-type',
        },
      ],
    };
  },
  inheritAttrs: false,
  inject: ['$BX24'],
  name: 'dev-panel-pages',
};
</script>
