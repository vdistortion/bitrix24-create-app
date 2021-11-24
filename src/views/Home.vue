<template>
  <user-list></user-list>
</template>

<script>
import { mapActions } from 'vuex';
import UserList from '../components/UserList.vue';

export default {
  methods: {
    ...mapActions(['init']),
  },
  created() {
    this.$BX24.setTitle(window.appName);
  },
  mounted() {
    this.init().catch(console.warn);
  },
  inject: ['$BX24'],
  components: {
    UserList,
  },
};
</script>

<style lang="stylus">
html
  font-family Roboto, sans-serif
  overflow initial
#app
  color #2c3e50
  margin-bottom 40px
</style>
