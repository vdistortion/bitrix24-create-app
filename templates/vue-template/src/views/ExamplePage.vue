<template>
  <example-main>
    <example-alert
      v-if="componentVisible === 'bx-alert'"
    ></example-alert>
    <example-button
      v-if="componentVisible === 'bx-button'"
    ></example-button>
    <example-checkbox
      v-if="componentVisible === 'bx-checkbox'"
    ></example-checkbox>
<!--    <example-dialog -->
<!--      v-if="componentVisible === 'bx-dialog'"-->
<!--    ></example-dialog>-->
    <example-entity-selector
      v-if="componentVisible === 'bx-entity-selector'"
    ></example-entity-selector>
    <example-icon
      v-if="componentVisible === 'bx-icon'"
    ></example-icon>
    <example-input
      v-if="componentVisible === 'bx-input'"
    ></example-input>
    <example-input-date
      v-if="componentVisible === 'bx-input-date'"
    ></example-input-date>
    <example-input-file
      v-if="componentVisible === 'bx-input-file'"
    ></example-input-file>
    <example-link
      v-if="componentVisible === 'bx-link'"
    ></example-link>
    <example-progressbar
      v-if="componentVisible === 'bx-progressbar'"
    ></example-progressbar>
    <example-radio
      v-if="componentVisible === 'bx-radio'"
    ></example-radio>
    <example-select
      v-if="componentVisible === 'bx-select'"
    ></example-select>
<!--    <example-tag-selector -->
<!--      v-if="componentVisible === 'bx-tag-selector'"-->
<!--    ></example-tag-selector>-->
    <example-textarea
      v-if="componentVisible === 'bx-textarea'"
    ></example-textarea>
    <template #menu>
      <ul v-if="components.length" style="padding-left: 0;list-style-type: none;">
        <li v-for="component in components" :key="component">
          <label>
            <input type="radio" :value="component" v-model="componentVisible">
            <span>{{ component }}</span>
          </label>
        </li>
      </ul>
    </template>
  </example-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ExampleAlert from '../components/examples/ExampleAlert.vue';
import ExampleButton from '../components/examples/ExampleButton.vue';
import ExampleCheckbox from '../components/examples/ExampleCheckbox.vue';
// import ExampleDialog from '../components/examples/ExampleDialog.vue';
import ExampleEntitySelector from '../components/examples/ExampleEntitySelector.vue';
import ExampleIcon from '../components/examples/ExampleIcon.vue';
import ExampleInput from '../components/examples/ExampleInput.vue';
import ExampleInputDate from '../components/examples/ExampleInputDate.vue';
import ExampleInputFile from '../components/examples/ExampleInputFile.vue';
import ExampleLink from '../components/examples/ExampleLink.vue';
import ExampleProgressbar from '../components/examples/ExampleProgressbar.vue';
import ExampleRadio from '../components/examples/ExampleRadio.vue';
import ExampleSelect from '../components/examples/ExampleSelect.vue';
// import ExampleTagSelector from '../components/examples/ExampleTagSelector.vue';
import ExampleTextarea from '../components/examples/ExampleTextarea.vue';
import ExampleMain from '../components/examples/Page.vue';

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
      componentVisible: 'bx-button',
      components: [
        'bx-alert',
        'bx-button',
        'bx-checkbox',
        // 'bx-dialog',
        'bx-entity-selector',
        'bx-icon',
        'bx-input',
        'bx-input-date',
        'bx-input-file',
        'bx-link',
        'bx-progressbar',
        'bx-radio',
        'bx-select',
        // 'bx-tag-selector',
        'bx-textarea',
      ],
    };
  },
  inject: ['$BX24'],
  components: {
    ExampleAlert,
    ExampleButton,
    ExampleCheckbox,
    // ExampleDialog,
    ExampleEntitySelector,
    ExampleIcon,
    ExampleInput,
    ExampleInputDate,
    ExampleInputFile,
    ExampleLink,
    ExampleProgressbar,
    ExampleRadio,
    ExampleSelect,
    // ExampleTagSelector,
    ExampleTextarea,
    ExampleMain,
  },
  name: 'example-page',
});
</script>
