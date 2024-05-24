<template>
  <div v-if="isVisible" class="dev-panel">
    <dev-panel-reload class="dev-panel__button-icon">
      <app-icon icon="mdiReload"></app-icon>
    </dev-panel-reload>
    <dev-panel-pages class="dev-panel__button-icon">
      <template #default="{ icon }">
        <app-icon :icon="icon"></app-icon>
      </template>
    </dev-panel-pages>
    <dev-panel-download class="dev-panel__button-icon">
      <app-icon icon="mdiDownload"></app-icon>
    </dev-panel-download>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import env from '@/env';
import DevPanelReload from './DevPanelReload.vue';
import DevPanelPages from './DevPanelPages.vue';
import DevPanelDownload from './DevPanelDownload.vue';
import AppIcon from '../AppIcon.vue';

const $BX24 = inject('$BX24');

const isVisible = computed(() => $BX24 && env.get('TEST_DOMAINS').includes($BX24.getDomain()));
</script>

<style lang="scss">
.dev-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__button-icon {
    text-decoration: none;
    transition: opacity 0.4s;
    opacity: 0.4;
    color: rgba(0, 0, 0, 0.5);

    &:first-child {
      margin-right: auto;
    }

    &:hover {
      opacity: 1;
    }
  }
}
</style>
