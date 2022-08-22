<template>
  <a :href="dirname" title="Скачать последнюю версию" download>
    <span class="mdi mdi-download"></span>
  </a>
</template>

<script>
import config from '../../config';

export default {
  computed: {
    dirname() {
      const { origin, pathname } = window.location;
      const path = pathname.split('/');
      path[path.length - 1] = config.global.archiveName;
      return [origin, path.join('/')].join('');
    },
  },
  name: 'dev-panel-download',
};
</script>
