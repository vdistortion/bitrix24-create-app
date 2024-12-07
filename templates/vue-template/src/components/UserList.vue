<template>
  <div class="user-list">
    <div v-for="user in props.users" :key="user.id" class="user-list__card">
      <a
        class="user"
        :class="classList(user.id)"
        :href="`${portal}${user.href}`"
        :target="user.target"
        :title="getTitle(user)"
        :data-birthday="user.birthday"
        @click.prevent="openLink(user.href)"
      >
        <img v-if="user.photo" :src="user.photo" :alt="user.fullName" loading="lazy" />
      </a>
      <div class="user-list__buttons">
        <bx-button
          color="light-border"
          size="xs"
          icon="chat"
          :round="true"
          @click="openMessenger(user.id)"
        >
          Открыть чат
        </bx-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import type { IBitrix24Library } from 'bitrix24-library';
import { BxButton } from 'vue-bitrix24';
import { useRootStore } from '@/stores/RootStore';

const store = useRootStore();

const $BX24: IBitrix24Library | undefined = inject('$BX24');

const props = defineProps<{
  users: IUsers;
}>();

const department = computed(() => <string[]>store.department);
const currentId = computed(() => store.currentId);
const portal = computed(() => store.portal);

function classList(id: string) {
  return {
    department: department.value.includes(id),
    current: currentId.value === id,
  };
}

function getTitle(user: any) {
  return [user.fullName, user.position].filter((s) => s).join('\n');
}

function openLink(href: string) {
  if ($BX24) $BX24.openLink(href);
}

function openMessenger(id: string) {
  if ($BX24) $BX24.im.openMessenger(id);
}
</script>

<style lang="scss">
@use '@/assets/grid' as grid;

$size: 170px;

.user-list {
  @include grid.row-flex();

  &__card {
    @include grid.col();
    @include grid.col-size(3);
    @include grid.col-size-w1600(4);
    @include grid.col-size-w1200(6);
  }

  h1 {
    @include grid.col();
    @include grid.col-size(24);
    text-align: center;
    margin-bottom: 20px;
  }

  a.user {
    display: block;
    margin: 0 auto;
    width: $size;
    height: $size;
    border: 5px solid black;
    border-radius: 50%;
    background-image: url('/nouserpic.svg');
    background-color: rgba(82, 92, 105, 0.23);
    background-size: 111px 124px;
    background-repeat: no-repeat;
    background-position: center;

    &.department {
      border-color: coral;
    }

    &.current {
      border-color: currentColor;
    }

    img {
      display: block;
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      font-size: 0;
    }
  }

  &__buttons {
    text-align: center;
    margin: 15px 0;
  }
}
</style>
