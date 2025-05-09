<template>
  <table class="generator-list">
    <tbody v-for="(item, key) in entities" :key="key">
      <tr v-if="!entities[key - 1] || item.scope !== entities[key - 1].scope">
        <td colspan="3">
          <small v-if="store.scopeList.includes(item.scope)">Scope: {{ item.scope }}</small>
          <small v-else class="error">Scope: {{ item.scope }} не подключен</small>
        </td>
      </tr>
      <tr v-if="!store.scopeList.includes(item.scope)"></tr>
      <tr v-else>
        <td>
          <app-link class="generator-list__link" :href="item.link">
            {{ item.buttonName }}
          </app-link>
          <span v-if="item.help" class="generator-list__icon" :title="item.help">
            <app-icon icon="mdiHelpCircleOutline" :size="12"></app-icon>
          </span>
        </td>
        <td>
          <bx-input v-model="item.count" size="xs" inline></bx-input>
        </td>
        <td>
          <bx-button
            size="xs"
            color="primary"
            icon="add"
            :disabled="disabledButton"
            @click="add(item)"
          >
            Создать
          </bx-button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BxButton, BxInput } from 'vue-bitrix24';
import { useRootStore } from '@/stores/RootStore';
import { useBitrix24 } from '@/api/bitrix';
import AppLink from '@/components/AppLink.vue';
import AppIcon from '@/components/AppIcon.vue';
import env from '@/env';

type EntityNameType = 'task' | 'deal' | 'company' | 'contact' | 'lead';
type EntityType = {
  id: EntityNameType;
  method: string;
  userId: string;
  title: string;
  scope: string;
  link: string;
  count: string;
  buttonName: string;
  name: string;
  help?: string;
};

const store = useRootStore();
const { batch } = useBitrix24();
const placeholder = env.get('APP_NAME');
const defaultCount = 10;
const disabledButton = ref(false);
const entities: EntityType[] = [
  {
    id: 'task',
    method: 'tasks.task.add',
    userId: 'RESPONSIBLE_ID',
    title: 'TITLE',
    scope: 'task',
    link: `/company/personal/user/${store.currentId}/tasks/`,
    count: String(defaultCount),
    buttonName: 'Задачи',
    name: 'Задача',
  },
  {
    id: 'deal',
    method: 'crm.deal.add',
    userId: 'ASSIGNED_BY_ID',
    title: 'TITLE',
    scope: 'crm',
    link: '/crm/deal/list/',
    count: String(defaultCount),
    buttonName: 'Сделки',
    name: 'Сделка',
  },
  {
    id: 'company',
    method: 'crm.company.add',
    userId: 'ASSIGNED_BY_ID',
    title: 'TITLE',
    scope: 'crm',
    link: '/crm/company/list/',
    count: String(defaultCount),
    buttonName: 'Компании',
    name: 'Компания',
  },
  {
    id: 'contact',
    method: 'crm.contact.add',
    userId: 'ASSIGNED_BY_ID',
    title: 'NAME',
    scope: 'crm',
    link: '/crm/contact/list/',
    count: String(defaultCount),
    buttonName: 'Контакты',
    name: 'Контакт',
  },
  {
    id: 'lead',
    method: 'crm.lead.add',
    userId: 'ASSIGNED_BY_ID',
    title: 'TITLE',
    scope: 'crm',
    link: '/crm/lead/list/',
    count: String(defaultCount),
    buttonName: 'Лиды',
    name: 'Лид',
    help: 'Если лиды не включены, они создадутся в сделках',
  },
];

function add(entity: EntityType) {
  disabledButton.value = true;
  const count = Number(entity.count);
  const params = [];
  const title = (number: number) => `${entity.name} #${number} (${placeholder})`;

  for (let i = 0; i < count; i++) {
    params.push({
      method: entity.method,
      params: {
        fields: {
          [entity.title]: title(i + 1),
          [entity.userId]: store.currentId,
        },
      },
    });
  }

  batch
    .addEntities(params)
    .then(console.info)
    .catch(console.warn)
    .finally(() => {
      disabledButton.value = false;
    });
}
</script>

<style lang="scss">
.generator-list {
  small {
    color: gray;

    &.error {
      color: var(--ui-field-color-danger);
    }
  }

  &__link {
    color: #185ccf;
    text-decoration: none;
    border-bottom: 1px dashed;
  }

  &__icon {
    cursor: pointer;
    color: #185ccf;
    margin-left: 5px;
  }
}
</style>
