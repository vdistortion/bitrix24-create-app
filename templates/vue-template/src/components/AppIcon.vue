<template>
  <svg-icon type="mdi" :path="path"></svg-icon>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import {
  mdiHome, mdiTools, mdiReload, mdiDownload, mdiFormatListBulletedType,
} from '@mdi/js';

export default defineComponent({
  computed: {
    path() {
      return this.icons[this.icon];
    },
  },
  data() {
    return {
      icons: {
        mdiHome, mdiTools, mdiReload, mdiDownload, mdiFormatListBulletedType,
      },
    };
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  components: {
    SvgIcon,
  },
  name: 'app-icon',
});
</script>
