<template>
  <example-table name="bx-dialog" :code="markup">
    <bx-dialog></bx-dialog>
  </example-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BxDialog from '../../../node_modules/vue-bitrix24/src/components/BxDialog.vue';
import ExampleTable from './Table.vue';

export default defineComponent({
  computed: {
    markup() {
      return `
<bx-dialog
></bx-dialog>
      `;
    },
  },
  components: {
    ExampleTable,
    BxDialog,
  },
  name: 'example-dialog',
});
</script>
