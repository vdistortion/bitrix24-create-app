<template>
  <a href="#" title="Обновить (Ctrl+R)" @click.prevent="reload">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import type { IBitrix24Library } from 'bitrix24-library';

const $BX24: IBitrix24Library | undefined = inject('$BX24');

if ($BX24) {
  $BX24.bind(window, 'keydown', (e: KeyboardEvent) => {
    if (e.ctrlKey && e.code === 'KeyR') {
      e.preventDefault();
      reload();
    }
  });
}

function reload() {
  window.location.reload();
}
</script>
