<template>
  <div class="dev-panel-team">
    <reload-frame></reload-frame>
    <pages-buttons></pages-buttons>
    <download-app></download-app>
  </div>
</template>

<script>
import ReloadFrame from './ReloadFrame.vue';
import PagesButtons from './PagesButtons.vue';
import DownloadApp from './DownloadApp.vue';

export default {
  components: {
    ReloadFrame,
    PagesButtons,
    DownloadApp,
  },
};
</script>

<style lang="stylus">
.dev-panel-team
  display flex
  align-items center
  justify-content space-between
  .button-icon-team
    text-decoration none
    transition opacity .4s
    opacity .4
    &:first-child
      margin-right auto
    &:hover
      opacity 1
    span
      font-size 20px
      color rgba(0, 0, 0, .5)
</style>
