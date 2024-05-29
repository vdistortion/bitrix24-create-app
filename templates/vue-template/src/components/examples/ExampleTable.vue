<template>
  <table class="example-table">
    <caption>
      {{
        props.name
      }}
    </caption>
    <tbody>
      <tr>
        <td colspan="2">
          <div class="example-table__components">
            <slot></slot>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="example-table__params">
            <slot name="params"></slot>
          </div>
        </td>
        <td>
          <pre class="example-table__code" v-text="props.code.trim()"></pre>
        </td>
      </tr>
    </tbody>
    <tfoot v-if="props.based.length">
      Component based on
      <a :href="props.based[0]" target="_blank">{{ props.based[1] ?? props.based[0] }}</a>
    </tfoot>
  </table>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  code: {
    type: String,
    default: '',
  },
  based: {
    type: Array as PropType<any>,
    default: () => [],
  },
});
</script>

<style lang="scss">
.example-table {
  margin: 10px;
  width: 100%;

  & caption {
    font-weight: bold;
  }

  &__components,
  &__code,
  &__params {
    padding: 10px;
  }

  &__components {
    display: flex;
    column-gap: 10px;
    border-bottom: 1px solid;
  }

  &__code {
    width: 100%;
    vertical-align: top;
    margin-right: 20px;
    padding: 10px;
    background-color: #eee;
    border-radius: 5px;
    box-sizing: border-box;
  }

  &__params {
    display: flex;
    flex-direction: column;

    & > *:not(:first-child) {
      margin-top: 5px;
    }
  }
}
</style>
