<template>
  <example-table
    name="bitrix-select"
    :code="markup"
    :based="['https://vue-select.org', 'vue-select']"
  >
    <bitrix-select
      :label="data.props.label"
      :options="data.props.users"
      :multiple="data.props.multiple"
      :clearable="false"
    ></bitrix-select>
    <template #params>
      <label>
        props.label
        <select v-model="data.props.label">
          <option v-for="(item, key) in data.settings.labels" :key="key" :value="item">
            {{ item }}
          </option>
        </select>
      </label>
      <label>
        props.multiple
        <select v-model="data.props.multiple">
          <option v-for="(item, key) in data.settings.multiple" :key="key" :value="item">
            {{ item }}
          </option>
        </select>
      </label>
    </template>
  </example-table>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue';
import ExampleTable from '@/components/examples/ExampleTable.vue';
import BitrixSelect from '@/components/BitrixSelect.vue';
import api from '@/api';

const data = reactive({
  props: {
    users: [],
    label: 'name',
    multiple: false,
  },
  settings: {
    labels: ['name', 'username', 'id', 'website', 'phone', 'email'],
    multiple: [false, true],
  },
});

onMounted(() => {
  api.getUsers(10).then((userList) => {
    // @ts-ignore
    data.props.users = userList;
  });
});

const markup = computed(
  () => `
<bitrix-select
  label="${data.props.label}"
  :options="[users]"
  :multiple="${data.props.multiple}"
  :clearable="false"
></bitrix-select>
`,
);
</script>
