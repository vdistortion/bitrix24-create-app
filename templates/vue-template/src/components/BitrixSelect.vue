<template>
  <vue-select
    class="bx-select"
    :options="options"
    :label="label"
    :multiple="multiple"
    :clearable="clearable"
  >
    <template #open-indicator="{ attributes }">
      <button class="ui-ctl-after ui-ctl-icon-angle" v-bind="attributes"></button>
    </template>
  </vue-select>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VueSelect from 'vue-select';
import { loadStyles } from 'vue-bitrix24/loadStyles';

export default defineComponent({
  created() {
    loadStyles(this.$BX24);
  },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      default: '',
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
  },
  inject: ['$BX24'],
  components: { VueSelect },
  name: 'bitrix-select',
});
</script>

<style>
@import 'vue-select/dist/vue-select.css';

.bx-select {
  width: 100%;
}

.bx-select:hover .vs__dropdown-toggle,
.bx-select.vs--open .vs__dropdown-toggle {
  border-color: #66afe9;
}

.bx-select .vs__dropdown-toggle {
  transition: border-color 0.5s;
}

.bx-select .vs__dropdown-toggle,
.bx-select .vs__selected {
  border-radius: 2px;
}

.bx-select .vs__selected {
  background-color: #bcedfc;
}
</style>
