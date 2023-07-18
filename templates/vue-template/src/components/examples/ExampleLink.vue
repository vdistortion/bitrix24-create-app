<template>
  <example-table name="bx-link" :code="markup">
    <bx-link
      :href="props.href"
    >
      <img v-if="slots.default === 'image'" src="/favicon.svg" alt="logo">
      <span v-else-if="slots.default === 'text'">Текст</span>
    </bx-link>
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
import BxLink from 'vue-bitrix24/BxLink';
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
<bx-link
  href="${this.props.href}"
>
  ${this.slot}
</bx-link>
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
    BxLink,
  },
  name: 'example-link',
});
</script>
