<template>
  <a v-if="isTeamPortal"
     :href="dirname"
     class="team-download-app"
     title="Скачать последнюю версию приложения"
     download>
    <v-icon>mdi-download</v-icon>
  </a>
</template>

<script>
import { mapState } from 'vuex';
import DataBase from '@/utils/database';

export default {
  computed: {
    ...mapState(['portal']),

    isTeamPortal() {
      return DataBase.address === 'team.bitrix24.ru';
    },

    dirname() {
      return `${this.portal}/app/${DIRNAME_APP}/app-b24.zip`;
    },
  },
};
</script>

<style scoped lang="stylus">
.team-download-app
  position fixed
  top 0
  right 0
  text-decoration none
  transition opacity .4s
  opacity .4
  &:hover
    opacity 1
  i
    font-size 20px
</style>
