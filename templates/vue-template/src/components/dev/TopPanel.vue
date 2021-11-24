<template>
  <div class="dev-panel-team">
    <reload-frame></reload-frame>
    <download-app></download-app>
    <settings-placement></settings-placement>
  </div>
</template>

<script>
import ReloadFrame from './ReloadFrame.vue';
import DownloadApp from './DownloadApp.vue';
import SettingsPlacement from './SettingsPlacement.vue';

export default {
  beforeCreate() {
    ['log', 'info', 'warn', 'error'].forEach((method) => {
      console[method] = console[method]
        .bind(console, '%c App ', 'background-color: #ffffff;color: #000000;');
    });
  },
  components: {
    ReloadFrame,
    DownloadApp,
    SettingsPlacement,
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
