<template>
  <div class="settings-page">
    <fieldset>
      <legend>Настройки</legend>
      <app-link href="/devops/edit/application/1/">
        <bx-button icon="setting" size="xs">Настройки приложения</bx-button>
      </app-link>
    </fieldset>

    <fieldset>
      <legend>Генерация данных</legend>
      <generator-list></generator-list>
    </fieldset>

    <fieldset>
      <legend>Встраивание</legend>
      <placement-list></placement-list>
    </fieldset>
  </div>
</template>

<script setup lang="ts">
import { BxButton } from 'vue-bitrix24';
import AppLink from '@/components/AppLink.vue';
import GeneratorList from '@/components/GeneratorList.vue';
import PlacementList from '@/components/PlacementList.vue';
</script>
