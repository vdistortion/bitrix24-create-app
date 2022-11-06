<template>
  <a
    :href="dirname"
    :download="filename"
    title="Скачать последнюю версию"
  >
    <span class="mdi mdi-download"></span>
  </a>
</template>

<script>
import config from '../../config';

export default {
  computed: {
    dirname() {
      return [config.path, config.global.archiveName].join('');
    },
    filename() {
      return `${config.global.appDirName}, ${new Date().toLocaleString()}.zip`;
    },
  },
  name: 'dev-panel-download',
};
</script>
