<template>
  <user-list></user-list>
</template>

<script>
import { mapActions } from 'vuex';
import UserList from '../components/UserList.vue';
import config from '../config';

export default {
  methods: {
    ...mapActions(['init']),
  },
  created() {
    this.$BX24.appInfo().then((info) => {
      config.scope.forEach((scope) => {
        if (!info.scope.includes(scope)) {
          const message = `scope "${scope}" not found`;
          console.warn(message.toUpperCase());
        }
      });
    });
  },
  mounted() {
    this.$BX24.setTitle(config.global.appName);
    this.init().catch(console.warn);
  },
  inject: ['$BX24'],
  components: {
    UserList,
  },
};
</script>
