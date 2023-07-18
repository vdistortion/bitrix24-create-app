<template>
  <div class="user-list">
    <div v-for="(user, id) in users" :key="id" class="user-list__card">
      <a
        class="user"
        :class="classList(id)"
        :href="`${portal}${user.href}`"
        :target="user.target"
        :title="getTitle(user)"
        :data-birthday="user.birthday"
        @click.prevent="openLink(user.href)"
      >
        <img v-if="user.photo" :src="user.photo" :alt="user.fullName" loading="lazy">
      </a>
      <div class="user-list__buttons">
        <bx-button
          color="light-border"
          size="xs"
          :round="true"
          @click="openHistory(id)"
        >История</bx-button>
        <bx-button
          color="light-border"
          size="xs"
          icon="chat"
          :round="true"
          @click="openMessenger(id)"
        >Чат</bx-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import { mapState } from 'pinia';
import { useRootStore } from '@/stores/RootStore';

interface User {
  fullName: string
  active: boolean
  position: string
  birthday: string | boolean
  photo: string
  department: number[]
  href: string
  target: string
}

export default defineComponent({
  methods: {
    classList(id) {
      return {
        department: this.department.includes(id),
        current: this.currentId === id,
      };
    },
    getTitle(user) {
      return [user.fullName, user.position].filter((s) => s).join('\n');
    },
    openLink(href) {
      this.$BX24.openLink(href);
    },
    openMessenger(id) {
      this.$BX24.im.openMessenger(id);
    },
    openHistory(id) {
      this.$BX24.im.openHistory(id);
    },
  },
  computed: mapState(useRootStore, ['department', 'currentId', 'portal']),
  inject: ['$BX24'],
  props: {
    users: {
      type: Object as PropType<User>,
      required: true,
    },
  },
  name: 'user-list',
});
</script>

<style lang="stylus">
@import '../src/assets/smartgrid';
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
    background-image url("../assets/nouserpic.svg")
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
