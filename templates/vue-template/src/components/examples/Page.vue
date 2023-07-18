<template>
  <main class="example-main">
    <div class="example-main__menu">
      <ul v-if="components.length" style="padding-left: 0;list-style-type: none;">
        <li v-for="component in components" :key="component">
          <label>
            <input type="radio" :value="component" v-model="componentVisible">
            <span>{{ component }}</span>
          </label>
        </li>
        <li>
          <a
            href="https://astrotrain55.github.io/vue-bitrix24/"
            target="_blank"
            style="margin-left: 5px;"
          >
            More components...
          </a>
        </li>
      </ul>
    </div>
    <div class="example-main__content">
      <example-link
        v-if="componentVisible === 'bx-link'"
      ></example-link>
      <example-entity-selector
        v-if="componentVisible === 'bx-entity-selector'"
      ></example-entity-selector>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ExampleLink from './ExampleLink.vue';
import ExampleEntitySelector from './ExampleEntitySelector.vue';

export default defineComponent({
  mounted() {
    if (!this.$BX24) return;
    const RestCall = this.$BX24.createBatch();

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
  },
  data() {
    return {
      componentVisible: 'bx-link',
      components: [
        'bx-link',
        'bx-entity-selector',
      ],
    };
  },
  inject: ['$BX24'],
  components: {
    ExampleLink,
    ExampleEntitySelector,
  },
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
