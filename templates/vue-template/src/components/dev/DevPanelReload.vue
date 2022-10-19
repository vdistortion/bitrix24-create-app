<template>
  <a href="#" title="Обновить (Ctrl+R)" @click.prevent="reload">
    <span class="mdi mdi-reload"></span>
  </a>
</template>

<script>
export default {
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
  name: 'dev-panel-reload',
};
</script>
