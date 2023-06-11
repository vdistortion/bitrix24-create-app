<template>
  <the-loader v-if="loader" :loader="loader"></the-loader>
  <user-lists v-else></user-lists>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapActions } from 'pinia';
import { useRootStore } from '@/stores/RootStore';
import { usePlacementStore } from '@/stores/PlacementStore';
import TheLoader from '../components/TheLoader.vue';
import UserLists from '../components/UserLists.vue';
import env from '../env';

export default defineComponent({
  methods: {
    ...mapActions(useRootStore, ['init', 'appInfo']),
    ...mapActions(usePlacementStore, ['setList']),

    verifyScopeLog(scopeList, requiredList) {
      [...scopeList, ...requiredList].reduce((messages, scope) => {
        if (!scopeList.includes(scope)) messages.push(`scope "${scope}" excess`);
        if (!requiredList.includes(scope)) messages.push(`scope "${scope}" not found`);
        return messages;
      }, []).forEach((message) => {
        console.info('🔥', message);
      });
    },
  },
  computed: mapState(useRootStore, ['loader']),
  created() {
    this.appInfo().then((info) => {
      this.verifyScopeLog(env.get('SCOPE'), info.scope);
    });
  },
  mounted() {
    this.init()
      .then(this.setList)
      .catch(console.warn);
  },
  components: {
    TheLoader,
    UserLists,
  },
  name: 'home-page',
});
</script>
