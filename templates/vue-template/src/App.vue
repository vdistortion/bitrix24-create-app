<template>
  <dev-panel></dev-panel>
  <router-view></router-view>
</template>

<script>
import DevPanel from './components/dev/DevPanel.vue';

export default {
  components: {
    DevPanel,
  },
  name: 'app-layout',
};
</script>

<style lang="stylus">
html
  font-family Roboto, sans-serif
  overflow initial
</style>
