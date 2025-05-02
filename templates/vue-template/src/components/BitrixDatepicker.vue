<template>
  <vue-datepicker
    :model-value="props.modelValue"
    :placeholder="props.placeholder"
    :clearable="false"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template #dp-input="{ value, onInput, onEnter, onTab }">
      <div
        class="ui-ctl"
        :class="{
          'ui-ctl-after-icon': props.after === 'after',
          'ui-ctl-ext-after-icon': props.after === 'ext-after',
        }"
        style="width: 100%"
      >
        <button
          class="ui-ctl-icon-calendar"
          :class="{
            'ui-ctl-after': props.after === 'after',
            'ui-ctl-ext-after': props.after === 'ext-after',
          }"
        ></button>
        <input
          class="ui-ctl-element"
          type="text"
          :value="value"
          :placeholder="props.placeholder"
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

const props = withDefaults(
  defineProps<{
    modelValue?: ModelValue;
    placeholder?: string;
    after?: PropAfter;
  }>(),
  {
    modelValue: null,
    placeholder: '',
    after: 'after',
  },
);

defineEmits(['update:modelValue']);
</script>

<style>
@import '@vuepic/vue-datepicker/dist/main.css';
</style>
