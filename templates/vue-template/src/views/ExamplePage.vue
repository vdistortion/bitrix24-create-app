<template>
  <plugin-example-page></plugin-example-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PluginExamplePage from 'vue-bitrix24/ExamplePage';

export default defineComponent({
  components: {
    PluginExamplePage,
  },
  name: 'example-page',
});
</script>
