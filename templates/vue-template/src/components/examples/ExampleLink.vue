<template>
  <example-table name="app-link" :code="markup">
    <app-link
      :href="props.href"
    >
      <img v-if="slots.default === 'image'" src="/favicon.svg" alt="logo">
      <span v-else-if="slots.default === 'text'">Текст</span>
    </app-link>
    <template #params>
      <label>
        slots.default
        <select v-model="slots.default">
          <option
            v-for="(item, key) in settings.slots"
            :key="key"
            :value="item"
          >{{ item }}</option>
        </select>
      </label>
      <label>
        props.href
        <input type="text" v-model="props.href">
      </label>
    </template>
  </example-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppLink from '../AppLink.vue';
import ExampleTable from './Table.vue';

export default defineComponent({
  computed: {
    slot() {
      const tags = {
        image: '<img src="logo.png" alt="logo">',
        text: '<span>Текст</span>',
      };
      return tags[this.slots.default];
    },
    markup() {
      return `
<app-link
  href="${this.props.href}"
>
  ${this.slot}
</app-link>
      `;
    },
  },
  data() {
    return {
      slots: {
        default: 'image',
      },
      props: {
        href: '/marketplace/',
      },
      settings: {
        slots: [
          'image',
          'text',
        ],
      },
    };
  },
  components: {
    ExampleTable,
    AppLink,
  },
  name: 'example-link',
});
</script>
