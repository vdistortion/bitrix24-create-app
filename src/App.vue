<template>
  <div id="app">
    <UserList/>
    <Loader/>
    <DownloadApp/>
  </div>
</template>

<script>
import UserList from '@/components/UserList.vue';
import Loader from '@/components/Loader.vue';
import DownloadApp from '@/components/DownloadApp.vue';

export default {
  components: {
    UserList,
    Loader,
    DownloadApp,
  },
};
</script>

<style lang="stylus">
html
  overflow initial
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  display flex
  flex-direction column
  align-items flex-start
</style>
