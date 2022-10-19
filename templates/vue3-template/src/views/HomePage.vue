<template>
  <the-loader v-if="loader" :loader="loader"></the-loader>
  <user-lists v-else></user-lists>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useRootStore } from '@/stores';
import TheLoader from '../components/TheLoader.vue';
import UserLists from '../components/UserLists.vue';
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
    this.init().catch(console.warn);
  },
  inject: ['$BX24'],
  components: {
    TheLoader,
    UserLists,
  },
  name: 'home-page',
};
</script>
