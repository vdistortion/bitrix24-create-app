<template>
  <dev-panel></dev-panel>
  <router-view></router-view>
</template>

<script setup lang="ts">
import DevPanel from './components/dev/DevPanel.vue';
</script>

<style lang="stylus">
@css
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:wght@400;700&display=swap')

body
  font-family 'Roboto Flex', sans-serif
  margin 0
</style>
