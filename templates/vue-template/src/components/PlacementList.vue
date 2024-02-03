<template>
  <table class="placement-list">
    <tbody v-for="(item, key) in placementList" :key="key">
      <tr v-if="item.bind">
        <td>
          <small>{{ item.placement }}</small>
        </td>
        <td>
          <app-link v-if="item.placement === 'REST_APP_URI'" :href="placementLink">
            {{ item.name }}
          </app-link>
          <span v-else>{{ item.name }}</span>
        </td>
        <td>
          <bx-button color="danger" @click="unbind(item.placement)">Удалить</bx-button>
        </td>
      </tr>
      <tr v-else>
        <td>
          <small>{{ item.placement }}</small>
        </td>
        <td>
          <bx-input v-model="item.name" :placeholder="item.placement" inline></bx-input>
        </td>
        <td>
          <bx-button :disabled="!item.name" color="primary" @click="bind(item)">Добавить</bx-button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { usePlacementStore } from '@/stores/PlacementStore';
import AppLink from './AppLink.vue';

const placementStore = usePlacementStore();

const placementList = computed(() => placementStore.placementList);
const placementLink = computed(() => placementStore.appLink);

function bind(item) {
  placementStore.bind(item);
}

function unbind(placement) {
  placementStore.unbind(placement);
}
</script>

<style lang="stylus">
.placement-list small
  color gray
</style>
