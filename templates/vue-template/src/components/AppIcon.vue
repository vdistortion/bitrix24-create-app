<template>
  <svg-icon type="mdi" :path="path"></svg-icon>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiHome, mdiTools, mdiReload, mdiDownload, mdiFormatListBulletedType } from '@mdi/js';

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
});

const data = reactive({
  icons: {
    mdiHome,
    mdiTools,
    mdiReload,
    mdiDownload,
    mdiFormatListBulletedType,
  } as { [key: string]: string },
});

const path = computed(() => data.icons[props.icon]);
</script>
