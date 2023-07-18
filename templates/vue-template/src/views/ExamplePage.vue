<template>
  <example-main></example-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ExampleMain from '../components/examples/Page.vue';

export default defineComponent({
  components: {
    ExampleMain,
  },
  name: 'example-page',
});
</script>
