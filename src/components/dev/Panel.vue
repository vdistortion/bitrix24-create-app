<template>
  <component v-if="isVisible" :is="TopPanel"></component>
</template>

<script>
export default {
  computed: {
    isDevelopmentMode() {
      return process.env.NODE_ENV === 'development';
    },

    isDevelopmentPortal() {
      return this.$BX24.getDomain === 'team.bitrix24.ru';
    },

    isVisible() {
      return this.isDevelopmentMode || this.isDevelopmentPortal;
    },

    TopPanel() {
      return () => import(/* webpackChunkName: 'DevPanel' */ './TopPanel.vue');
    },
  },
};
</script>
