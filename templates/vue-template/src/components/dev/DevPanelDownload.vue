<template>
  <a :href="filename" :download="filename" title="Скачать последнюю версию">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import { env } from '@/utils/helpers';

const filename = `${env('APP_NAME')}.zip`;
</script>
