<template>
  <a href="#" title="Обновить (Ctrl+R)" @click.prevent="reload">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import { useBitrix24 } from '@/composable/bitrix';

const { BX24 } = useBitrix24();

BX24.bind(window, 'keydown', (e) => {
  if (e instanceof KeyboardEvent && e.ctrlKey && e.code === 'KeyR') {
    e.preventDefault();
    reload();
  }
});

function reload() {
  window.location.reload();
}
</script>
