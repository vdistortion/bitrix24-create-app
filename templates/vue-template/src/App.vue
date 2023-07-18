<template>
  <dev-panel></dev-panel>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DevPanel from './components/dev/DevPanel.vue';

export default defineComponent({
  components: {
    DevPanel,
  },
  name: 'app-layout',
});
</script>

<style lang="stylus">
body
  font-family 'Roboto Flex', sans-serif
  margin 0
</style>
