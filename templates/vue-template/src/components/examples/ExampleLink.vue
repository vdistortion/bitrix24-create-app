<template>
  <example-table name="app-link" :code="markup">
    <app-link :href="data.props.href">
      <img v-if="data.slots.default === 'image'" src="../../assets/vite.svg" alt="logo" />
      <span v-else-if="data.slots.default === 'text'">Текст</span>
    </app-link>
    <template #params>
      <label>
        slots.default
        <select v-model="data.slots.default">
          <option v-for="(item, key) in data.settings.slots" :key="key" :value="item">
            {{ item }}
          </option>
        </select>
      </label>
      <label>
        props.href
        <input type="text" v-model="data.props.href" />
      </label>
    </template>
  </example-table>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import ExampleTable from './ExampleTable.vue';
import AppLink from '../AppLink.vue';

const data = reactive({
  slots: {
    default: 'image' as 'image' | 'text',
  },
  props: {
    href: '/marketplace/',
  },
  settings: {
    slots: ['image', 'text'],
  },
});

const slot = computed(() => {
  const tags: { image: string; text: string } = {
    image: '<img src="logo.png" alt="logo">',
    text: '<span>Текст</span>',
  };
  return tags[data.slots.default];
});

const markup = computed(
  () => `
<AppLink
  href="${data.props.href}"
>
  ${slot.value}
</AppLink>
`,
);
</script>
