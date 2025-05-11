<template>
  <example-table
    name="bitrix-datepicker"
    :code="markup"
    :based="['https://vue3datepicker.com', '@vuepic/vue-datepicker']"
  >
    <bitrix-datepicker
      v-model="data.props.date"
      :placeholder="data.props.placeholder"
      :after="data.props.after"
    ></bitrix-datepicker>
    <template #params>
      <label>
        props.after
        <select v-model="data.props.after">
          <option v-for="(item, key) in data.settings.after" :key="key" :value="item">
            {{ item }}
          </option>
        </select>
      </label>
      <label>
        props.placeholder
        <input type="text" v-model="data.props.placeholder" />
      </label>
    </template>
  </example-table>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
import ExampleTable from './ExampleTable.vue';
import BitrixDatepicker, { type PropAfter } from '../BitrixDatepicker.vue';

const data = reactive({
  props: {
    date: null,
    placeholder: 'BxInputDate',
    after: 'after' as PropAfter,
  },
  settings: {
    after: ['after', 'ext-after'],
  },
});

const markup = computed(
  () => `
<BitrixDatepicker
  v-model="${data.props.date}"
  placeholder="${data.props.placeholder}"
  after="${data.props.after}"
></BitrixDatepicker>
`,
);
</script>
