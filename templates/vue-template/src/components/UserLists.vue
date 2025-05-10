<template>
  <div class="user-lists">
    <user-toggle @click="type = $event" :default-type="type"></user-toggle>
    <div class="user-lists__wrapper">
      <users-list v-if="type === 'users'" key="users" :users="store.usersEnabled"></users-list>
      <users-list
        v-else-if="type === 'disabled'"
        key="disabled"
        :users="store.usersDisabled"
      ></users-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRootStore } from '@/stores/RootStore';
import UserToggle from './UserToggle.vue';
import UsersList from './UserList.vue';

const store = useRootStore();

const type = ref('users');
</script>

<style lang="scss">
@use '@/assets/grid' as grid;

.user-lists {
  @include grid.wrapper();

  &__wrapper {
    margin-top: 40px;
  }
}
</style>
