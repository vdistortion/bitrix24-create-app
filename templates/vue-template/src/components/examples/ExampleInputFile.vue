<template>
  <example-table name="bx-input-file" :code="markup">
    <bx-input-file
      :placeholder="props.placeholder"
      :type="props.type"
      :multiple="props.multiple"
      :disabled="props.disabled"
      @change="onChange"
      @delete="onDelete"
    ></bx-input-file>
    <template #params>
      <label>
        props.placeholder
        <input type="text" v-model="props.placeholder">
      </label>
      <label>
        props.type
        <select v-model="props.type">
          <option
            v-for="item in settings.types"
            :value="item"
          >{{ item }}</option>
        </select>
      </label>
      <label>
        <input type="checkbox" v-model="props.multiple">
        props.multiple
      </label>
      <label>
        <input type="checkbox" v-model="props.disabled">
        props.disabled
      </label>
    </template>
  </example-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BxInputFile from 'vue-bitrix24/BxInputFile';
import ExampleTable from './Table.vue';

export default defineComponent({
  methods: {
    onChange(files) {
      console.log('change', files);
    },
    onDelete(files, file) {
      console.log('delete', files, file);
    },
  },
  computed: {
    markup() {
      return `
<bx-input-file
  :value="[]"
  type="${this.props.type}"
  :multiple="${this.props.multiple}"
  :disabled="${this.props.disabled}"
  @change="onChange(files)"
  @delete="onDelete(files, deletedFile)"
>${this.slot.default}</bx-input-file>
      `;
    },
  },
  data() {
    return {
      slot: {
        default: '',
      },
      props: {
        placeholder: '',
        type: 'drop',
        multiple: false,
        disabled: false,
      },
      settings: {
        types: ['drop', 'button', 'link'],
      },
    };
  },
  components: {
    ExampleTable,
    BxInputFile,
  },
  name: 'example-input-file',
});
</script>
