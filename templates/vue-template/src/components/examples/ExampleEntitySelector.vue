<template>
  <example-table name="bx-entity-selector" :code="markup">
    <div style="flex-grow: 1">
      <bx-entity-selector
        :list="data.props.list"
        :display-field="data.props.displayField"
        :display-field-link="data.props.displayFieldLink"
        :multiple="data.props.multiple"
        :clickable="data.props.clickable"
        :inline="data.props.inline"
        :text-add="data.props.textAdd"
        :text-more="data.props.textMore"
        :text-change="data.props.textChange"
        @click="onClick"
        @auxclick="onAuxClick"
        @delete="onDelete"
        @add="onAdd"
      ></bx-entity-selector>
    </div>
    <template #params>
      <label>
        props.displayField
        <select v-model="data.props.displayField">
          <option v-for="(item, key) in data.settings.fields" :key="key" :value="item">
            {{ item }}
          </option>
        </select>
      </label>
      <label>
        props.displayFieldLink
        <input type="text" v-model="data.props.displayFieldLink" />
      </label>
      <label>
        <input type="checkbox" v-model="data.props.clickable" />
        props.clickable
      </label>
      <label>
        <input type="checkbox" v-model="data.props.multiple" />
        props.multiple
      </label>
      <label>
        <input type="checkbox" v-model="data.props.inline" />
        props.inline
      </label>
      <label>
        props.textAdd
        <input type="text" v-model="data.props.textAdd" />
      </label>
      <label>
        props.textMore
        <input type="text" v-model="data.props.textMore" />
      </label>
      <label>
        props.textChange
        <input type="text" v-model="data.props.textChange" />
      </label>
    </template>
  </example-table>
</template>

<script setup lang="ts">
import { reactive, computed, inject, type PropType } from 'vue';
import BxEntitySelector from 'vue-bitrix24/BxEntitySelector';
import ExampleTable from './ExampleTable.vue';

const $BX24: any = inject('$BX24');

const data = reactive({
  props: {
    list: {
      type: Array as PropType<IUserNew[]>,
      default: [],
    },
    displayField: 'name',
    displayFieldLink: '',
    multiple: false,
    clickable: false,
    inline: false,
    textAdd: 'Добавить',
    textMore: 'Добавить ещё',
    textChange: 'Сменить',
  },
  settings: {
    fields: ['id', 'name', 'position'],
  },
});

const markup = computed(
  () => `
<bx-entity-selector
  :list="[]"
  display-field="${data.props.displayField}"
  display-field-link="${data.props.displayFieldLink}"
  :multiple="${data.props.multiple}"
  :clickable="${data.props.clickable}"
  :inline="${data.props.inline}"
  text-add="${data.props.textAdd}"
  text-more="${data.props.textMore}"
  text-change="${data.props.textChange}"
  @click="onClick(index, item)"
  @auxclick="onAuxClick(index, item)"
  @delete="onDelete(index, item)"
  @add="onAdd"
></bx-entity-selector>
`,
);

function onClick(index: number, item: IUserNew) {
  if (!$BX24) return;
  console.info('click', index, item);
  $BX24.openLink(`/company/personal/user/${item.id}/`);
}

function onAuxClick(index: number, item: IUserNew) {
  if (!$BX24) return;
  console.info('auxclick', index, item);
  $BX24.openLink(`/company/personal/user/${item.id}/`, true);
}

function onDelete(index: number, item: IUserNew) {
  console.info('delete', index, item);
  //@ts-ignore
  data.props.list.splice(index, 1);
}

function onAdd() {
  console.info('add');
  if (!$BX24) return;

  if (data.props.multiple) {
    $BX24.selectUsers().then((users: IUserNew[]) => {
      //@ts-ignore
      data.props.list.push(...users);
    });
  } else {
    $BX24.selectUser().then((user: IUserNew) => {
      //@ts-ignore
      data.props.list = [user];
    });
  }
}
</script>
