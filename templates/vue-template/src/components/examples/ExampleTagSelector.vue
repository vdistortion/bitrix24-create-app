<template>
  <example-table name="bx-tag-selector" :code="markup">
    <div style="flex-grow: 1">
      <bx-tag-selector
        :list="data.props.list"
        :placeholder="data.props.placeholder"
        :display-field-name="data.props.displayFieldName"
        :display-field-link="data.props.displayFieldLink"
        :display-field-icon="data.props.displayFieldIcon"
        :default-icon="data.props.defaultIcon"
        :text-add-button="data.props.textAddButton"
        :text-create-button="data.props.textCreateButton"
        :text-more-button="data.props.textMoreButton"
        :text-change-button="data.props.textChangeButton"
        :show-add-button="data.props.showAddButton"
        :show-create-button="data.props.showCreateButton"
        :show-input-text="data.props.showInputText"
        :multiple="data.props.multiple"
        :clickable="data.props.clickable"
        :inline="data.props.inline"
        :icon="data.props.icon"
        @add="onAdd"
        @auxclick="onAuxClick"
        @click="onClick"
        @create="onCreate"
        @delete="onDelete"
        @enter="onEnter"
        @input="onInput"
      ></bx-tag-selector>
    </div>
    <template #params>
      <label>
        props.placeholder
        <input type="text" v-model="data.props.placeholder" />
      </label>
      <label>
        props.displayFieldName
        <select v-model="data.props.displayFieldName">
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
        props.displayFieldIcon
        <input type="text" v-model="data.props.displayFieldIcon" />
      </label>
      <label>
        props.defaultIcon
        <select v-model="data.props.defaultIcon">
          <option v-for="(item, key) in data.settings.defaultIcons" :key="key" :value="item">
            {{ item }}
          </option>
        </select>
      </label>
      <label>
        props.textAddButton
        <input type="text" v-model="data.props.textAddButton" />
      </label>
      <label>
        props.textCreateButton
        <input type="text" v-model="data.props.textCreateButton" />
      </label>
      <label>
        props.textMoreButton
        <input type="text" v-model="data.props.textMoreButton" />
      </label>
      <label>
        props.textChangeButton
        <input type="text" v-model="data.props.textChangeButton" />
      </label>
      <label>
        <input type="checkbox" v-model="data.props.showAddButton" />
        props.showAddButton
      </label>
      <label>
        <input type="checkbox" v-model="data.props.showCreateButton" />
        props.showCreateButton
      </label>
      <label>
        <input type="checkbox" v-model="data.props.showInputText" />
        props.showInputText
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
        <input type="checkbox" v-model="data.props.icon" />
        props.icon
      </label>
    </template>
  </example-table>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import type { IUser as IUserReadonly } from 'bitrix24-library';
import { BxTagSelector } from 'vue-bitrix24';
import { useBitrix24 } from '@/composable/bitrix';
import ExampleTable from './ExampleTable.vue';

const { BX24, openLink } = useBitrix24();

type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};

type IUser = Mutable<Omit<IUserReadonly, 'sub' | 'sup'>>;

const data = reactive({
  props: {
    list: [] as IUser[],
    placeholder: '',
    displayFieldName: '',
    displayFieldLink: '',
    displayFieldIcon: '',
    defaultIcon: 'default-tag-user',
    textAddButton: 'Добавить',
    textCreateButton: 'Создать',
    textMoreButton: 'Добавить ещё',
    textChangeButton: 'Сменить',
    showAddButton: true,
    showCreateButton: false,
    showInputText: false,
    clickable: false,
    multiple: false,
    inline: false,
    icon: false,
  },
  settings: {
    fields: ['id', 'name', 'position'],
    defaultIcons: ['default-tag-user', 'default-user', 'extranet-user', 'department'],
  },
});

const markup = computed(
  () => `
<BxTagSelector
  :list="[]"
  placeholder="${data.props.placeholder}"
  display-field-name="${data.props.displayFieldName}"
  display-field-link="${data.props.displayFieldLink}"
  display-field-icon="${data.props.displayFieldIcon}"
  default-icon="${data.props.defaultIcon}"
  text-add-button="${data.props.textAddButton}"
  text-create-button="${data.props.textCreateButton}"
  text-more-button="${data.props.textMoreButton}"
  text-change-button="${data.props.textChangeButton}"
  :show-add-button="${data.props.showAddButton}"
  :show-create-button="${data.props.showCreateButton}"
  :show-input-button="${data.props.showInputText}"
  :multiple="${data.props.multiple}"
  :clickable="${data.props.clickable}"
  :inline="${data.props.inline}"
  :icon="${data.props.icon}"
  @add="onAdd(text)"
  @auxclick="onAuxClick(index, item)"
  @click="onClick(index, item)"
  @create="onCreate"
  @delete="onDelete(index, item)"
  @enter="onEnter(text)"
  @input="onInput(text)"
></BxTagSelector>
`,
);

function onCreate() {
  console.info('create');
}

function onEnter(text: string) {
  console.info('enter', text);
}

function onInput(text: string) {
  console.info('input', text);
}

function onClick(index: number, item: IUser) {
  console.info('click', index, item);
  openLink(`/company/personal/user/${item.id}/`);
}

function onAuxClick(index: number, item: IUser) {
  console.info('auxclick', index, item);
  openLink(`/company/personal/user/${item.id}/`, true);
}

function onDelete(index: number, item: IUser) {
  console.info('delete', index, item);
  data.props.list.splice(index, 1);
}

function onAdd(text: string) {
  console.info('add', text);
  const fakeIcon = 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png';

  BX24.selectUsersAsync(data.props.multiple).then((users) => {
    if (Array.isArray(users)) {
      users.forEach((user) => {
        data.props.list.push({
          id: user.id,
          name: user.name,
          photo: fakeIcon,
          position: user.position,
          url: user.url,
        });
      });
    } else {
      data.props.list = [
        {
          id: users.id,
          name: users.name,
          photo: fakeIcon,
          position: users.position,
          url: users.url,
        },
      ];
    }
  });
}
</script>
