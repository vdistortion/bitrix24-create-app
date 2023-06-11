<template>
  <div class="user-lists">
    <user-toggle @click="type = $event" :default-type="type"></user-toggle>
    <div class="user-lists__wrapper">
      <users-list
        v-if="type === 'users'"
        key="users"
        :users="usersEnabled"
      ></users-list>
      <users-list
        v-else-if="type === 'disabled'"
        key="disabled"
        :users="usersDisabled"
      ></users-list>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'pinia';
import { useRootStore } from '@/stores/RootStore';
import UserToggle from './UserToggle.vue';
import UsersList from './UserList.vue';

export default defineComponent({
  computed: {
    ...mapState(useRootStore, ['users']),

    usersEnabled() {
      const users = Object.entries(this.users).filter(([_key, user]) => user.active);
      return Object.fromEntries(users);
    },

    usersDisabled() {
      const users = Object.entries(this.users).filter(([_key, user]) => !user.active);
      return Object.fromEntries(users);
    },
  },
  data() {
    return {
      type: 'users',
    };
  },
  components: {
    UserToggle,
    UsersList,
  },
  name: 'user-lists',
});
</script>

<style lang="stylus">
@import '../src/assets/smartgrid';

.user-lists
  wrapper()
  &__wrapper
    margin-top 40px
</style>
