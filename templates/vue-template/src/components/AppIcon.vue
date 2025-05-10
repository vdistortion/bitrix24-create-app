<template>
  <svg-icon type="mdi" :path="icons[icon]" :size="size"></svg-icon>
</template>

<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon';
import {
  mdiHome,
  mdiTools,
  mdiReload,
  mdiDownload,
  mdiFormatListBulletedType,
  mdiHelpCircleOutline,
} from '@mdi/js';

const { icon, size = 24 } = defineProps<{
  icon: string;
  size?: number;
}>();

const icons: Record<string, string> = {
  mdiHome,
  mdiTools,
  mdiReload,
  mdiDownload,
  mdiFormatListBulletedType,
  mdiHelpCircleOutline,
};
</script>
