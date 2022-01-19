<template>
  <div>
    <dev-panel></dev-panel>
    <router-view></router-view>
  </div>
</template>

<script>
import DevPanel from './components/dev/Panel.vue';

export default {
  components: {
    DevPanel,
  },
};
</script>

<style lang="stylus">
html
  font-family Roboto, sans-serif
  overflow initial
</style>
