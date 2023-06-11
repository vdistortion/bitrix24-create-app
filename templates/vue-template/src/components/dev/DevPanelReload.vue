<template>
  <a href="#" title="Обновить (Ctrl+R)" @click.prevent="reload">
    <app-icon icon="mdiReload"></app-icon>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppIcon from '../AppIcon.vue';

export default defineComponent({
  methods: {
    reload() {
      window.location.reload();
    },
  },
  created() {
    this.$BX24.bind(window, 'keydown', (e) => {
      if (e.ctrlKey && e.code === 'KeyR') {
        e.preventDefault();
        this.reload();
      }
    });
  },
  inject: ['$BX24'],
  components: {
    AppIcon,
  },
  name: 'dev-panel-reload',
});
</script>
