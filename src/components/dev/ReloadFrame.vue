<template>
  <a
    href="#"
    class="button-icon-team"
    title="Обновить (Ctrl+R)"
    @click.prevent="reload"
  >
    <v-icon>mdi-reload</v-icon>
  </a>
</template>

<script>
export default {
  created() {
    window.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.code === 'KeyR') {
        e.preventDefault();
        this.reload();
      }
    });
  },

  methods: {
    reload() {
      window.location.reload();
    },
  },
};
</script>
