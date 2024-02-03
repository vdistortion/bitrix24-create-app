<template>
  <div class="user-list">
    <div v-for="(user, id) in props.users" :key="id" class="user-list__card">
      <a
        class="user"
        :class="classList(id)"
        :href="`${portal}${user.href}`"
        :target="user.target"
        :title="getTitle(user)"
        :data-birthday="user.birthday"
        @click.prevent="openLink(user.href)"
      >
        <img v-if="user.photo" :src="user.photo" :alt="user.fullName" loading="lazy" />
      </a>
      <div class="user-list__buttons">
        <bx-button color="light-border" size="xs" :round="true" @click="openHistory(id)">
          История
        </bx-button>
        <bx-button
          color="light-border"
          size="xs"
          icon="chat"
          :round="true"
          @click="openMessenger(id)"
        >
          Чат
        </bx-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import { useRootStore } from '@/stores/RootStore';

const store = useRootStore();

const $BX24 = inject('$BX24');

const props = defineProps({
  users: {
    type: Object,
    required: true,
  },
});

const department = computed(() => store.department);
const currentId = computed(() => store.currentId);
const portal = computed(() => store.portal);

function classList(id) {
  return {
    department: department.value.includes(id),
    current: currentId.value === id,
  };
}

function getTitle(user) {
  return [user.fullName, user.position].filter((s) => s).join('\n');
}

function openLink(href) {
  $BX24.openLink(href);
}

function openMessenger(id) {
  $BX24.im.openMessenger(id);
}

function openHistory(id) {
  $BX24.im.openHistory(id);
}
</script>

<style lang="stylus">
size = 170px

.user-list
  row-flex()
  &__card
    col()
    col-size(3)
    col-size-w1600(4)
    col-size-w1200(6)
  h1
    col()
    col-size(24)
    text-align center
    margin-bottom 20px
  a.user
    display block
    margin 0 auto
    width size
    height size
    border 5px solid black
    border-radius 50%
    background-image url("/nouserpic.svg")
    background-color rgba(82,92,105,.23)
    background-size 111px 124px
    background-repeat no-repeat
    background-position center
    &.department
      border-color coral
    &.current
      border-color currentColor
    img
      display block
      object-fit cover
      width 100%
      height 100%
      border-radius 50%
      font-size 0
  &__buttons
    text-align center
    margin 15px 0
</style>
