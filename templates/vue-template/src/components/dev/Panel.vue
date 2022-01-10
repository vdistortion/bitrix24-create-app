<template>
  <component v-if="isVisible" :is="TopPanel"></component>
</template>

<script>
import utils from '../../utils/helpers';

export default {
  computed: {
    isVisible() {
      return utils.isDevelopmentMode() || utils.isDevelopmentPortal(this.$BX24.getDomain());
    },
    TopPanel() {
      return () => import(/* webpackChunkName: 'dev-panel' */ './TopPanel.vue');
    },
  },
  inject: ['$BX24'],
};
</script>
