<template>
  <example-table name="bx-tag-selector" :code="markup">
    <bx-tag-selector></bx-tag-selector>
  </example-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BxTagSelector from '../../../node_modules/vue-bitrix24/src/components/BxTagSelector.vue';
import ExampleTable from './Table.vue';

export default defineComponent({
  computed: {
    markup() {
      return `
<bx-tag-selector
></bx-tag-selector>
      `;
    },
  },
  components: {
    ExampleTable,
    BxTagSelector,
  },
  name: 'example-tag-selector',
});
</script>
