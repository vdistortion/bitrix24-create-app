<template>
  <div class="user-list">
    <div v-for="user in users" :key="user.id" class="user-list__card">
      <a
        class="user"
        :href="`https://${BX24.getDomain()}${user.href}`"
        target="_blank"
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
          @click="BX24.im.openMessenger(user.id)"
        >
          {{ user.fullName ?? 'Открыть чат' }}
        </bx-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BxButton } from 'vue-bitrix24';
import { useBitrix24 } from '@/composable/bitrix';

const { BX24, openLink } = useBitrix24();

const { users } = defineProps<{
  users: Record<string, IUserNew>;
}>();

function getTitle(user: IUserNew) {
  return [user.fullName, user.position].filter((s) => s).join('\n');
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

  .user {
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

    &:hover {
      border-color: var(--ui-field-color-link);
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
