<template>
  <the-loader v-if="loader" :loader="loader"></the-loader>
  <user-list v-else></user-list>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useRootStore } from '@/stores';
import TheLoader from '../components/TheLoader.vue';
import UserList from '../components/UserList.vue';
import config from '../config';
import utils from '../utils/helpers';

export default {
  methods: mapActions(useRootStore, ['init']),
  computed: mapState(useRootStore, ['loader']),
  created() {
    this.$BX24.appInfo().then((info) => {
      utils.verifyScopeLog(config.scope, info.scope);
    });
  },
  mounted() {
    this.$BX24.setTitle(config.global.appName);
    this.init().catch(console.warn);
  },
  inject: ['$BX24'],
  components: {
    TheLoader,
    UserList,
  },
  name: 'home-page',
};
</script>
