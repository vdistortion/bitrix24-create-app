<template>
  <a
    :href="dirname"
    :download="filename"
    title="Скачать последнюю версию"
  >
    <app-icon icon="mdiDownload"></app-icon>
  </a>
</template>

<script>
import AppIcon from '../AppIcon.vue';
import config from '../../config';

export default {
  computed: {
    dirname() {
      return [config.path.root, config.global.archiveName].join('');
    },
    filename() {
      return `${config.global.appDirName}, ${new Date().toLocaleString()}.zip`;
    },
  },
  components: {
    AppIcon,
  },
  name: 'dev-panel-download',
};
</script>
