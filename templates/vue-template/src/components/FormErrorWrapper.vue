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
const props = defineProps({
  errors: {
    type: Array,
    default: () => [],
  },
  blur: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="stylus">
.form-error-wrapper
  & + &
    margin-top 10px

  &__error
    color var(--ui-field-color-danger)
    margin-top 5px

  &__error + &__error
    margin-top 0
</style>
