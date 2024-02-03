<template>
  <main class="example-main">
    <div class="example-main__menu">
      <div v-for="(components, group) in data.componentsGroups" :key="group">
        <h4 style="margin-bottom: 5px">{{ group }}</h4>
        <ul v-if="components.length" style="margin-top: 0; padding-left: 0; list-style-type: none">
          <li v-for="component in components" :key="component">
            <label>
              <input type="radio" :value="component" v-model="data.componentVisible" />
              <span>{{ component }}</span>
            </label>
          </li>
          <li v-if="group === 'vue-bitrix24'">
            <a
              href="https://astrotrain55.github.io/vue-bitrix24/"
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
      <example-form v-if="data.componentVisible === 'form-validation'"></example-form>
      <example-link v-if="data.componentVisible === 'app-link'"></example-link>
      <example-entity-selector
        v-if="data.componentVisible === 'bx-entity-selector'"
      ></example-entity-selector>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, reactive, inject } from 'vue';
import ExampleForm from './ExampleForm.vue';
import ExampleLink from './ExampleLink.vue';
import ExampleEntitySelector from './ExampleEntitySelector.vue';

const $BX24 = inject('$BX24');

onMounted(() => {
  if (!$BX24) return;
  const RestCall = $BX24.createBatch();

  RestCall.batch({
    scope: ['scope'],
  }).then((response) => {
    if (response.scope.includes('user_brief')) {
      RestCall.batch({
        userCurrent: ['user.current'],
        users: ['user.get'],
      }).then(console.info);
    }
  });
});

const data = reactive({
  componentVisible: 'form-validation',
  componentsGroups: {
    'bitrix24-create-app': ['form-validation', 'app-link'],
    'vue-bitrix24': ['bx-entity-selector'],
  },
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
