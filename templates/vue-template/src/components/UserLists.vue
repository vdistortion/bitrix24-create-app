<template>
  <div class="user-lists">
    <user-toggle @click="data.type = $event" :default-type="data.type"></user-toggle>
    <div class="user-lists__wrapper">
      <users-list v-if="data.type === 'users'" key="users" :users="store.usersEnabled"></users-list>
      <users-list
        v-else-if="data.type === 'disabled'"
        key="disabled"
        :users="store.usersDisabled"
      ></users-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRootStore } from '@/stores/RootStore';
import UserToggle from './UserToggle.vue';
import UsersList from './UserList.vue';

const store = useRootStore();

const data = reactive({
  type: 'users',
});
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
