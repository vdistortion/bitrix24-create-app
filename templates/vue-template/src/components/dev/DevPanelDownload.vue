<template>
  <a :href="filename" :download="filename" title="Скачать последнюю версию">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import env from '@/env';

const filename = [env.get('APP_NAME'), 'zip'].join('.');
</script>
