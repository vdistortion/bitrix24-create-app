<template>
  <a
    :href="href"
    target="_blank"
    @click.prevent="openLink(href)"
    @auxclick.prevent="openLink(href, true)"
  >
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import { useBitrix24 } from '@/composable/bitrix';

const { openLink } = useBitrix24();

const { href } = defineProps<{
  href: string;
}>();
</script>
