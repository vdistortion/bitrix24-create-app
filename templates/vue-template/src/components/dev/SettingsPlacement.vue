<template>
  <router-link
    v-if="isAdmin"
    :to="settings[page].path"
    :title="settings[page].title"
    class="button-icon-team"
  >
    <span class="mdi" :class="settings[page].className"></span>
  </router-link>
</template>

<script>
export default {
  computed: {
    isAdmin() {
      return this.$BX24.isAdmin();
    },
    page() {
      const isPlacement = this.$route.path === this.settings.placement.path;
      return isPlacement ? 'home' : 'placement';
    },
  },
  data() {
    return {
      settings: {
        placement: {
          path: '/placement',
          title: 'Настройки встраивания',
          className: 'mdi-cog-outline',
        },
        home: {
          path: '/',
          title: 'На главную',
          className: 'mdi-home',
        },
      },
    };
  },
  inject: ['$BX24'],
};
</script>
