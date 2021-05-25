<template>
  <a
    :href="dirname"
    class="button-icon-team"
    title="Скачать последнюю версию"
    download
  >
    <v-icon>mdi-download</v-icon>
  </a>
</template>

<script>
export default {
  computed: {
    dirname() {
      const { origin, pathname } = window.location;
      const path = pathname.split('/');
      path[path.length - 1] = window.ARCHIVE_NAME;

      return [origin, path.join('/')].join('');
    },
  },
};
</script>
