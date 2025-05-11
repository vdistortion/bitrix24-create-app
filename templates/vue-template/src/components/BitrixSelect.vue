<template>
  <vue-select
    class="bitrix-select"
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

<script setup lang="ts">
import VueSelect from 'vue-select';
import { loadStyles } from 'vue-bitrix24';
import { useBitrix24 } from '@/composable/bitrix';

const { BX24 } = useBitrix24();

loadStyles(BX24);

const {
  options,
  label = '',
  multiple = false,
  clearable = false,
} = defineProps<{
  options: any[];
  label?: string;
  multiple?: boolean;
  clearable?: boolean;
}>();
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
