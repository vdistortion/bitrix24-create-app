<template>
  <a :href="dirname" :download="filename" title="Скачать последнюю версию">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import env from '@/env';
import config from '@/config';

const appName = env.get('APP_NAME');
const dirname = [config.path.root, `${appName}.zip`].join('');
const filename = `${appName}, ${new Date().toLocaleString()}.zip`;
</script>
