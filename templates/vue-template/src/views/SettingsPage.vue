<template>
  <div class="settings-page">
    <fieldset>
      <legend>Настройки портала</legend>
      <div class="settings-page__buttons">
        <app-link :href="`/devops/edit/application/${store.appId}/`">
          <bx-button icon="setting" size="xs">Настройки приложения</bx-button>
        </app-link>
        <app-link href="/devops/section/standard/">
          <bx-button icon="add" size="xs" color="primary-dark">Создать приложение</bx-button>
        </app-link>
        <app-link href="/devops/list/">
          <bx-button icon="list" size="xs" color="secondary">Все приложения</bx-button>
        </app-link>
      </div>
    </fieldset>

    <fieldset>
      <legend>Генерация данных</legend>
      <generator-list></generator-list>
    </fieldset>

    <fieldset>
      <legend>Встраивание</legend>
      <placement-list
        v-if="store.scopeList.includes('placement') && store.isAdmin"
      ></placement-list>
      <span v-else>Нет прав</span>
    </fieldset>
  </div>
</template>

<script setup lang="ts">
import { BxButton } from 'vue-bitrix24';
import { useRootStore } from '@/stores/RootStore';
import AppLink from '@/components/AppLink.vue';
import GeneratorList from '@/components/GeneratorList.vue';
import PlacementList from '@/components/PlacementList.vue';

const store = useRootStore();
</script>

<style lang="scss">
.settings-page {
  &__buttons > * + * {
    margin-left: 10px;
  }
}
</style>
