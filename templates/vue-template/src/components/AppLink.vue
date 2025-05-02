<template>
  <a :href="props.href" target="_blank" @click.prevent="onClick" @auxclick.prevent="onMiddleClick">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import { useBitrix24 } from '@/api/bitrix';

const { openLink } = useBitrix24();

const props = defineProps<{
  href: string;
}>();

function onClick() {
  openLink(props.href);
}

function onMiddleClick() {
  openLink(props.href, true);
}
</script>
