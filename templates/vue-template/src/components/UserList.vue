<template>
  <div v-if="show" class="user-list">
    <div class="user-list__wrapper">
      <h1>
        <a :href="portal" target="_blank">{{ domain }}</a>
      </h1>
      <div class="user-list__card" v-for="(user, id) in users" :key="id">
        <a
          class="user"
          :class="classList(id)"
          :href="`${portal}${user.href}`"
          :target="user.target"
          :title="getTitle(user)"
          :data-birthday="user.birthday"
          @click.prevent="openPath(user.href, user.target, `${portal}${user.href}`)"
        >
          <img v-if="user.photo" :src="user.photo" :alt="user.fullName">
        </a>
        <bx-button-wrapper center>
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
        </bx-button-wrapper>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import isMobile from 'is-mobile';

export default {
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
    openPath(href, target, address) {
      if (isMobile()) window.open(address, target);
      else {
        this.$BX24.openPath(href).catch(() => {
          window.open(address, target);
        });
      }
    },
    openMessenger(id) {
      this.$BX24.im.openMessenger(id);
    },
    openHistory(id) {
      this.$BX24.im.openHistory(id);
    },
  },
  computed: {
    ...mapState(['users', 'department', 'currentId']),
    ...mapGetters(['domain', 'portal']),
    show() {
      return Object.keys(this.users).length;
    },
  },
  inject: ['$BX24'],
};
</script>

<style lang="stylus">
@import '~/src/assets/smartgrid';
size = 170px

.user-list
  wrapper()
  &__wrapper
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
    background-image url("~@/assets/nouserpic.svg")
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
</style>
