<template>
  <div class="form-error-wrapper">
    <slot></slot>

    <transition-group v-if="blur && errors.length">
      <div v-for="error in errors" :key="error.$uid" class="form-error-wrapper__error">
        {{ error.$message }}
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import type { ErrorObject } from '@vuelidate/core';

const { errors = [], blur = true } = defineProps<{
  errors?: ErrorObject[];
  blur?: boolean;
}>();
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
