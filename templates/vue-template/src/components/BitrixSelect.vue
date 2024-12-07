<template>
  <vue-select
    class="bitrix-select"
    :options="props.options"
    :label="props.label"
    :multiple="props.multiple"
    :clearable="props.clearable"
  >
    <template #open-indicator="{ attributes }">
      <button class="ui-ctl-after ui-ctl-icon-angle" v-bind="attributes"></button>
    </template>
  </vue-select>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import VueSelect from 'vue-select';
import type { IBitrix24Library } from 'bitrix24-library';
import { loadStyles } from 'vue-bitrix24';

const $BX24: IBitrix24Library | undefined = inject('$BX24');

loadStyles($BX24);

const props = withDefaults(
  defineProps<{
    options: any[];
    label?: string;
    multiple?: boolean;
    clearable?: boolean;
  }>(),
  {
    label: '',
    multiple: false,
    clearable: false,
  },
);
</script>

<style>
@import 'vue-select/dist/vue-select.css';

.bitrix-select {
  width: 100%;
}

.bitrix-select:hover .vs__dropdown-toggle,
.bitrix-select.vs--open .vs__dropdown-toggle {
  border-color: #66afe9;
}

.bitrix-select .vs__dropdown-toggle {
  transition: border-color 0.5s;
}

.bitrix-select .vs__dropdown-toggle,
.bitrix-select .vs__selected {
  border-radius: 2px;
}

.bitrix-select .vs__selected {
  background-color: #bcedfc;
}
</style>
