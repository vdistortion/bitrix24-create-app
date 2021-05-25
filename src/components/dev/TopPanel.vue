<template>
  <div class="dev-panel-team">
    <reload-frame></reload-frame>
    <download-app></download-app>
  </div>
</template>

<script>
import ReloadFrame from './ReloadFrame.vue';
import DownloadApp from './DownloadApp.vue';

export default {
  components: {
    ReloadFrame,
    DownloadApp,
  },

  beforeCreate() {
    ['log', 'info', 'warn', 'error'].forEach((method) => {
      console[method] = console[method]
        .bind(console, '%cApp', 'background-color: white;color: black;');
    });
  },
};
</script>

<style lang="stylus">
.dev-panel-team
  display flex
  align-items center
  justify-content space-between
  position fixed
  z-index 1
  right 0
  left 0
  top 0

  .button-icon-team
    text-decoration none
    transition opacity .4s
    opacity .4
    &:hover
      opacity 1
    i
      font-size 20px
</style>
