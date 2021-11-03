<template>
  <div>
    <dev-panel></dev-panel>
    <the-loader :loader="loader"></the-loader>
    <user-list @update="fitWindow"></user-list>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import DevPanel from './components/dev/Panel.vue';
import TheLoader from './components/TheLoader.vue';
import UserList from './components/UserList.vue';

export default {
  components: {
    DevPanel,
    TheLoader,
    UserList,
  },

  created() {
    this.setTitle(window.appName);
  },

  mounted() {
    this.init()
      .then(this.load)
      .catch(console.warn);
  },

  updated() {
    this.fitWindow();
  },

  computed: mapState(['loader']),

  methods: {
    ...mapMutations(['setTitle']),
    ...mapActions(['init']),

    load() {
      this.fitWindow();
    },

    fitWindow() {
      this.$BX24.fitWindow();
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
