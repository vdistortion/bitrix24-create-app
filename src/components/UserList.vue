<template>
  <v-app v-if="show" class="user-list">
    <v-container fluid>
      <h1>
        <a :href="portal" target="_blank">{{ domain }}</a>
      </h1>
      <v-row align="center" justify="space-between">
        <v-col v-for="(user, id) in users" :key="id">
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
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

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
      this.$BX24.openPath(href).catch(() => {
        window.open(address, target);
      });
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
size = 170px

.user-list
  width 100%
  h1
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
