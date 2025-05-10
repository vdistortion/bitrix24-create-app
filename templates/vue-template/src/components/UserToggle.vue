<template>
  <div class="user-toggle">
    <button
      class="user-toggle__button"
      :class="{ active: type === 'users' }"
      @click.stop="onClick('users')"
    >
      Сотрудники
    </button>
    <button
      class="user-toggle__button"
      :class="{ active: type === 'disabled' }"
      @click.stop="onClick('disabled')"
    >
      Уволенные
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const { defaultType } = defineProps<{
  defaultType: string;
}>();

const emit = defineEmits(['click']);

const type = ref(defaultType);

function onClick(newType: string) {
  type.value = newType;
  emit('click', newType);
}
</script>

<style lang="scss">
.user-toggle {
  display: flex;
  justify-content: center;
  margin: 14px 0;

  &__button {
    border: 1px solid #e2e5e6;
    padding: 6px 14px 6px 16px;
    cursor: pointer;
    transition: all 0.53s;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    background-color: #f5f7f8;
    color: #697281;

    &:first-child {
      border-radius: 25px 0 0 25px;
    }

    &:last-child {
      border-radius: 0 25px 25px 0;
    }

    &:only-child {
      border-radius: 25px;
    }

    &.active {
      background-color: transparent;
      color: #185ccf;
      cursor: default;
    }
  }
}
</style>
