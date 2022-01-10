<template>
  <table class="placement-list">
    <tbody v-for="(item, key) in placementList" :key="key">
      <tr v-if="item.bind">
        <td>
          <small>{{ item.placement }}</small>
        </td>
        <td>
          <a
            v-if="item.placement === 'REST_APP_URI'"
            :href="appLink"
            target="_blank"
          >{{ item.name }}</a>
          <span v-else>{{ item.name }}</span>
        </td>
        <td>
          <bx-button
            color="danger"
            @click="unbind(item.placement)"
          >Удалить</bx-button>
        </td>
      </tr>
      <tr v-else>
        <td>
          <small>{{ item.placement }}</small>
        </td>
        <td>
          <bx-input
            v-model="item.name"
            :placeholder="item.placement"
            inline
          ></bx-input>
        </td>
        <td>
          <bx-button
            :disabled="!item.name"
            color="primary"
            @click="bind(item)"
          >Добавить</bx-button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  methods: mapActions('placement', ['bind', 'unbind']),
  computed: {
    ...mapState('placement', ['placementList']),
    ...mapGetters('placement', ['appLink']),
  },
};
</script>

<style lang="stylus">
.placement-list small
  color gray
</style>
