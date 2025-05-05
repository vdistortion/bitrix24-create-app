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
          <app-link v-else-if="item.placement === 'CRM_ANALYTICS_MENU'" href="/report/analytics/">
            {{ item.name }}
          </app-link>
          <app-link v-else-if="item.placement === 'CRM_DEAL_DETAIL_TAB'" href="/crm/deal/list/">
            {{ item.name }}
          </app-link>
          <span v-else>{{ item.name }}</span>
        </td>
        <td>
          <bx-button size="xs" color="danger" icon="remove" @click="unbind(item.placement)">
            Удалить
          </bx-button>
        </td>
      </tr>
      <tr v-else>
        <td>
          <small>{{ item.placement }}</small>
        </td>
        <td>
          <bx-input v-model="item.name" :placeholder="item.placement" size="xs" inline></bx-input>
        </td>
        <td>
          <bx-button
            size="xs"
            color="primary"
            icon="add"
            :disabled="!item.name"
            @click="bind(item)"
          >
            Добавить
          </bx-button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { BxButton, BxInput } from 'vue-bitrix24';
import { usePlacementStore } from '@/stores/PlacementStore';
import AppLink from './AppLink.vue';

const placementStore = usePlacementStore();

const placementList = computed(() => placementStore.placementList);
const placementLink = computed(() => placementStore.appLink);

function bind(item: IPlacement) {
  placementStore.bind(item);
}

function unbind(placement: string) {
  placementStore.unbind(placement);
}
</script>

<style lang="scss">
.placement-list small {
  color: gray;
}
</style>
