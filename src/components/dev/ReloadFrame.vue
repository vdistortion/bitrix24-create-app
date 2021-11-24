<template>
  <a
    href="#"
    class="button-icon-team"
    title="Обновить (Ctrl+R)"
    @click.prevent="reload"
  >
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
    window.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.code === 'KeyR') {
        e.preventDefault();
        this.reload();
      }
    });
  },
};
</script>
