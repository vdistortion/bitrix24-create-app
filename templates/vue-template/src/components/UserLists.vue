<template>
  <div class="user-lists">
    <user-toggle @click="data.type = $event" :default-type="data.type"></user-toggle>
    <div class="user-lists__wrapper">
      <users-list v-if="data.type === 'users'" key="users" :users="usersEnabled"></users-list>
      <users-list
        v-else-if="data.type === 'disabled'"
        key="disabled"
        :users="usersDisabled"
      ></users-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import { useRootStore } from '@/stores/RootStore';
import UserToggle from './UserToggle.vue';
import UsersList from './UserList.vue';

const store = useRootStore();

const data = reactive({
  type: 'users',
});

const usersEnabled = computed(() => {
  const list = Object.entries(store.users as IUsers).filter(([_key, user]) => user.active);
  return Object.fromEntries(list);
});

const usersDisabled = computed(() => {
  const list = Object.entries(store.users as IUsers).filter(([_key, user]) => !user.active);
  return Object.fromEntries(list);
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
