<template>
  <table class="placement-list">
    <tbody v-for="(item, key) in placementList" :key="key">
      <tr v-if="item.placement === 'CRM_DEAL_DETAIL_TAB'">
        <td colspan="3">
          <small v-if="store.scopeList.includes('crm')">Scope: crm</small>
          <small v-else class="error">Scope: crm не подключен</small>
        </td>
      </tr>
      <tr v-if="item.placement !== 'REST_APP_URI' && !store.scopeList.includes('crm')"></tr>
      <tr v-else-if="item.bind">
        <td>
          <small>{{ item.placement }}</small>
        </td>
        <td>
          <app-link v-if="item.placement === 'REST_APP_URI'" :href="store.appLink">
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
          <bx-input
            v-model="item.name"
            :placeholder="item.placement"
            size="xs"
            inline
            :disabled="item.placement === 'REST_APP_URI'"
          ></bx-input>
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
import { useRootStore } from '@/stores/RootStore';
import AppLink from './AppLink.vue';

const store = useRootStore();

const placementList = computed(() => store.placementList);

function bind(item: IPlacement) {
  store.bind(item);
}

function unbind(placement: string) {
  store.unbind(placement);
}
</script>

<style lang="scss">
.placement-list {
  small {
    color: gray;

    &.error {
      color: var(--ui-field-color-danger);
    }
  }
}
</style>
