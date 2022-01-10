<template>
  <div>
    <dev-panel></dev-panel>
    <the-loader :loader="loader"></the-loader>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import DevPanel from './components/dev/Panel.vue';
import TheLoader from './components/TheLoader.vue';

export default {
  computed: mapState(['loader']),
  components: {
    DevPanel,
    TheLoader,
  },
};
</script>

<style lang="stylus">
html
  font-family Roboto, sans-serif
  overflow initial
</style>
