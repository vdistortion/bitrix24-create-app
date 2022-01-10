<template>
  <div>
    <router-link
      v-for="page in pages"
      :key="page.path"
      :to="page.path"
      :title="page.title"
      class="button-icon-team"
    >
      <span class="mdi" :class="page.className"></span>
    </router-link>
  </div>
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
  inject: ['$BX24'],
};
</script>
