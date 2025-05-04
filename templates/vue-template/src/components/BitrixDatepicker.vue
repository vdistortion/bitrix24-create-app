<template>
  <vue-datepicker
    :model-value="modelValue"
    :placeholder="placeholder"
    :clearable="false"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template #dp-input="{ value, onInput, onEnter, onTab }">
      <div
        class="ui-ctl"
        :class="{
          'ui-ctl-after-icon': after === 'after',
          'ui-ctl-ext-after-icon': after === 'ext-after',
        }"
        style="width: 100%"
      >
        <button
          class="ui-ctl-icon-calendar"
          :class="{
            'ui-ctl-after': after === 'after',
            'ui-ctl-ext-after': after === 'ext-after',
          }"
        ></button>
        <input
          class="ui-ctl-element"
          type="text"
          :value="value"
          :placeholder="placeholder"
          @input="onInput"
          @keydown.enter="onEnter"
          @keydown.tab="onTab"
        />
      </div>
    </template>
  </vue-datepicker>
</template>

<script lang="ts">
export type PropAfter = 'after' | 'ext-after';
</script>

<script setup lang="ts">
import VueDatepicker, { type ModelValue } from '@vuepic/vue-datepicker';
import { loadStyles } from 'vue-bitrix24';
import { useBitrix24 } from '@/api/bitrix';

const { BX24 } = useBitrix24();

loadStyles(BX24);

const { modelValue = null, placeholder = '', after = 'after' } = defineProps<{
  modelValue?: ModelValue;
  placeholder?: string;
  after?: PropAfter;
}>();

defineEmits(['update:modelValue']);
</script>

<style>
@import '@vuepic/vue-datepicker/dist/main.css';
</style>
