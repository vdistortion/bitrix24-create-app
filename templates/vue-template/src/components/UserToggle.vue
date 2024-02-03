<template>
  <div class="user-toggle">
    <button
      class="user-toggle__button"
      :class="{ active: data.type === 'users' }"
      @click="onClick('users')"
    >
      Сотрудники
    </button>
    <button
      class="user-toggle__button"
      :class="{ active: data.type === 'disabled' }"
      @click="onClick('disabled')"
    >
      Уволенные
    </button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const props = defineProps({
  defaultType: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['click']);

const data = reactive({
  type: props.defaultType, // users, disabled
});

function onClick(type) {
  data.type = type;
  emit('click', type);
}
</script>

<style lang="stylus">
.user-toggle
  display flex
  justify-content center
  margin 14px 0

  &__button
    border 1px solid #e2e5e6
    padding 6px 14px 6px 16px
    cursor pointer
    transition all .53s
    font-style normal
    font-weight bold
    font-size 14px
    line-height 19px
    background-color #f5f7f8
    color #697281

    &:first-child
      border-radius 25px 0 0 25px

    &:last-child
      border-radius 0 25px 25px 0

    &:only-child
      border-radius 25px

    &.active
      background-color transparent
      color #185ccf
      cursor default
</style>
