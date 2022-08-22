<template>
  <is-dev-panel></is-dev-panel>
  <router-view></router-view>
</template>

<script>
import IsDevPanel from './components/dev/IsDevPanel.vue';

export default {
  components: {
    IsDevPanel,
  },
  name: 'app-layout',
};
</script>

<style lang="stylus">
html
  font-family Roboto, sans-serif
  overflow initial
</style>
