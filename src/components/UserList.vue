<template>
  <v-app>
    <v-container fluid>
      <h1>
        <a :href="portal" target="_blank">{{ site }}</a>
      </h1>
      <v-row align="start" justify="start">
        <v-col v-for="(user, id) in usersList" :key="id" >
          <a :href="`${portal}/company/personal/user/${id}/`"
             :title="parseName(user.name, user.lastName)"
             target="_blank">
            <img :src="user.photo" :alt="parseDate(user.birthday)">
          </a>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import DataBase from '@/utils/database';
import tools from '@/utils/tools';

export default {
  created() {
    this.setVisible(true);
    const db = new DataBase();
    db.init((response) => {
      this.setList(response.users.data);
      this.setVisible(false);
    });
  },

  mounted() {
    this.$nextTick(DataBase.fitWindow);
  },

  computed: {
    ...mapState(['portal']),
    ...mapGetters('users', ['usersList']),

    site() {
      return DataBase.address;
    },
  },

  methods: {
    ...mapMutations('loader', ['setVisible']),
    ...mapMutations('users', ['setList']),

    parseName(...args) {
      return args.filter((name) => Boolean(name)).join(' ');
    },

    parseDate(date) {
      return tools.formatDate(date);
    },
  },
};
</script>

<style scoped lang="stylus">
h1
  text-align center
a
  display block
  margin 0 auto
  width 200px
img
  object-fit cover
  width 200px
  height 200px
  border-radius 50%
  background-image url("~@/assets/nouserpic.svg")
  background-color rgba(82,92,105,.23)
  background-size 111px 124px
  background-repeat no-repeat
  background-position center
</style>
