<template>
  <dev-panel v-if="isVisible"></dev-panel>
</template>

<script>
import DevPanel from './DevPanel.vue';
import utils from '../../utils/helpers';

export default {
  computed: {
    isVisible() {
      return utils.isDevelopmentMode() || utils.isDevelopmentPortal(this.$BX24.getDomain());
    },
  },
  inject: ['$BX24'],
  components: {
    DevPanel,
  },
  name: 'is-dev-panel',
};
</script>
