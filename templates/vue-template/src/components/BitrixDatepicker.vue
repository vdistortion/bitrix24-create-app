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

export type TypesProps = {
  after: PropAfter[];
};

export const propsValues: TypesProps = {
  after: ['after', 'ext-after'],
};
</script>

<script setup lang="ts">
import { inject, type PropType } from 'vue';
import VueDatepicker, { type ModelValue } from '@vuepic/vue-datepicker';
import type { IBitrix24Library } from 'bitrix24-library';
import { loadStyles } from 'vue-bitrix24';

const $BX24: IBitrix24Library | undefined = inject('$BX24');

loadStyles($BX24);

const props = defineProps({
  modelValue: {
    type: [Date, Number, String, Object, Array, null] as PropType<ModelValue>,
    default: null,
  },
  placeholder: {
    type: String,
    default: '',
  },
  after: {
    type: String as PropType<PropAfter>,
    default: 'after',
    validator(value: PropAfter) {
      return propsValues.after.includes(value);
    },
  },
});

defineEmits(['update:modelValue']);
</script>

<style>
@import '@vuepic/vue-datepicker/dist/main.css';
</style>
