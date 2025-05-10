<template>
  <main class="example-main">
    <div class="example-main__menu">
      <div v-for="(components, group) in componentsGroups" :key="group">
        <h4 style="margin-bottom: 5px">{{ group }}</h4>
        <ul v-if="components.length" style="margin-top: 0; padding-left: 0; list-style-type: none">
          <li v-for="component in components" :key="component">
            <label>
              <input type="radio" :value="component" v-model="componentVisible" />
              <span>{{ component }}</span>
            </label>
          </li>
          <li v-if="group === 'vue-bitrix24'">
            <a
              href="https://vdistortion.github.io/ui-bitrix24/"
              target="_blank"
              style="margin-left: 5px"
            >
              More components...
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="example-main__content">
      <example-form v-if="componentVisible === 'form-validation'"></example-form>
      <example-link v-if="componentVisible === 'app-link'"></example-link>
      <example-select v-if="componentVisible === 'bitrix-select'"></example-select>
      <example-datepicker v-if="componentVisible === 'bitrix-datepicker'"></example-datepicker>
      <example-tag-selector v-if="componentVisible === 'bx-tag-selector'"></example-tag-selector>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ExampleForm from './ExampleForm.vue';
import ExampleLink from './ExampleLink.vue';
import ExampleSelect from './ExampleSelect.vue';
import ExampleDatepicker from './ExampleDatepicker.vue';
import ExampleTagSelector from './ExampleTagSelector.vue';

const componentVisible = ref('form-validation');
const componentsGroups = {
  'bitrix24-create-app': ['form-validation', 'app-link', 'bitrix-select', 'bitrix-datepicker'],
  'vue-bitrix24': ['bx-tag-selector'],
};
</script>

<style lang="scss">
.example-main {
  display: flex;
  max-width: 1024px;
  margin: 0 auto;

  &__menu {
    min-width: 200px;
  }

  &__content {
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }
}
</style>
