<template>
  <a href="#" title="Обновить (Ctrl+R)" @click.prevent="reload">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import { inject } from 'vue';

const $BX24 = inject('$BX24');

$BX24.bind(window, 'keydown', (e) => {
  if (e.ctrlKey && e.code === 'KeyR') {
    e.preventDefault();
    reload();
  }
});

function reload() {
  window.location.reload();
}
</script>
