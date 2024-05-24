<template>
  <a :href="props.href" target="_blank" @click="onClick" @auxclick="onMiddleClick">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import { inject } from 'vue';

const $BX24: any = inject('$BX24');

const props = defineProps({
  href: {
    type: String,
    required: true,
  },
});

function onClick(e: MouseEvent) {
  if ($BX24) {
    e.preventDefault();
    $BX24.openLink(props.href);
  }
}

function onMiddleClick(e: MouseEvent) {
  if ($BX24) {
    e.preventDefault();
    $BX24.openLink(props.href, true);
  }
}
</script>
