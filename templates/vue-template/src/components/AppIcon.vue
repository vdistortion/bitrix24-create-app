<template>
  <svg-icon type="mdi" :path="path" :size="size"></svg-icon>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import {
  mdiHome,
  mdiTools,
  mdiReload,
  mdiDownload,
  mdiFormatListBulletedType,
  mdiHelpCircleOutline,
  mdiReceiptTextPlus,
} from '@mdi/js';

const props = defineProps<{
  icon: string;
  size?: number;
}>();

const data = reactive({
  icons: {
    mdiHome,
    mdiTools,
    mdiReload,
    mdiDownload,
    mdiFormatListBulletedType,
    mdiHelpCircleOutline,
    mdiReceiptTextPlus,
  } as { [key: string]: string },
});

const path = computed(() => data.icons[props.icon]);
</script>
