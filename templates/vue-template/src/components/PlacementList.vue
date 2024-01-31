<template>
  <table class="placement-list">
    <tbody v-for="(item, key) in placementList" :key="key">
      <tr v-if="item.bind">
        <td>
          <small>{{ item.placement }}</small>
        </td>
        <td>
          <app-link
            v-if="item.placement === 'REST_APP_URI'"
            :href="appLink"
          >{{ item.name }}</app-link>
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

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapActions } from 'pinia';
import { usePlacementStore } from '@/stores/PlacementStore';
import AppLink from './AppLink.vue';

export default defineComponent({
  methods: mapActions(usePlacementStore, ['bind', 'unbind']),
  computed: mapState(usePlacementStore, ['placementList', 'appLink']),
  components: {
    AppLink,
  },
  name: 'placement-list',
});
</script>

<style lang="stylus">
.placement-list small
  color gray
</style>
