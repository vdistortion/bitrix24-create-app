<template>
  <main class="example-main">
    <div class="example-main__menu">
      <slot name="menu"></slot>
    </div>
    <div class="example-main__content">
      <slot></slot>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'example-main',
});
</script>

<style>
.example-main {
  display: flex;
  max-width: 1024px;
  margin: 0 auto;
}
.example-main__menu {
  min-width: 200px;
}
.example-main__content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}
</style>
