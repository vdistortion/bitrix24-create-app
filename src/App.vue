<template>
  <div>
    <dev-panel></dev-panel>
    <the-loader></the-loader>
    <user-list @update="fitWindow"></user-list>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import TheLoader from './components/TheLoader.vue';
import UserList from './components/UserList.vue';
import DevPanel from './components/dev/Panel.vue';

export default {
  components: {
    TheLoader,
    UserList,
    DevPanel,
  },

  mounted() {
    this.init().finally(() => {
      this.setTitle();
      this.fitWindow();
    });
  },

  updated() {
    this.fitWindow();
  },

  methods: {
    ...mapActions(['init']),

    fitWindow() {
      this.$nextTick(this.$BX24.fitWindow);
    },

    setTitle() {
      this.$BX24.setTitle(window.appName);
    },
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
