<template>
  <div class="form-error-wrapper">
    <slot></slot>

    <transition-group v-if="props.blur && props.errors.length">
      <div v-for="error in errors" :key="error.$uid" class="form-error-wrapper__error">
        {{ error.$message }}
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { ErrorObject } from '@vuelidate/core';

const props = defineProps({
  errors: {
    type: Array as PropType<ErrorObject[]>,
    default: () => [],
  },
  blur: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss">
.form-error-wrapper {
  margin-bottom: 10px;

  & + & {
    margin-top: 10px;
  }

  &__error {
    color: var(--ui-field-color-danger);
    margin-top: 5px;
  }

  &__error + &__error {
    margin-top: 0;
  }
}
</style>
