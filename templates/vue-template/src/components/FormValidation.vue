<template>
  <form class="form-validation" @reset="onReset" @submit.prevent="onSubmit" style="width: 100%">
    <fieldset>
      <legend>Форма с валидацией</legend>
      <form-error-wrapper :errors="v$.form.email.$errors">
        <bx-input
          v-model="v$.form.email.$model"
          :color="v$.form.email.$error ? 'danger' : ''"
          placeholder="Почта"
        ></bx-input>
      </form-error-wrapper>
      <form-error-wrapper :errors="v$.form.password.$errors">
        <bx-input
          v-model="v$.form.password.$model"
          :color="v$.form.password.$error ? 'danger' : ''"
          placeholder="Пароль"
          type="password"
        ></bx-input>
      </form-error-wrapper>
      <form-error-wrapper :errors="v$.form.passwordConfirm.$errors">
        <bx-input
          v-model="v$.form.passwordConfirm.$model"
          :color="v$.form.passwordConfirm.$error ? 'danger' : ''"
          placeholder="Подтвердите пароль"
        ></bx-input>
      </form-error-wrapper>
      <div class="form-validation__buttons">
        <bx-button type="reset" color="light-border">Сбросить</bx-button>
        <bx-button type="submit" :disabled="v$.$error">Отправить</bx-button>
      </div>
    </fieldset>
  </form>
</template>

<script setup lang="ts">
import { reactive, computed, provide, type Ref } from 'vue';
import { useVuelidate, type Validation } from '@vuelidate/core';
import { email, required, minLength, sameAs, helpers } from '@vuelidate/validators';
import FormErrorWrapper from './FormErrorWrapper.vue';

provide('$BX24', null);

const data = reactive({
  form: {
    email: '',
    password: '',
    passwordConfirm: '',
  },
});

const rules = computed(() => ({
  form: {
    email: {
      required: helpers.withMessage('Заполните это поле', required),
      email: helpers.withMessage('Неверный адрес эл. почты', email),
    },
    password: {
      required: helpers.withMessage('Заполните это поле', required),
      minLength: helpers.withMessage('Пароль должен быть не менее 8 символов', minLength(8)),
    },
    passwordConfirm: {
      required: helpers.withMessage('Заполните это поле', required),
      sameAs: helpers.withMessage('Пароли не совпадают', sameAs(data.form.password)),
    },
  },
}));

const v$: Ref<Validation> = useVuelidate(rules, data);

function onReset() {
  data.form.email = '';
  data.form.password = '';
  data.form.passwordConfirm = '';
  v$.value.$reset();
}

function onSubmit() {
  v$.value.$touch();
  if (v$.value.$error) return;
  console.info({
    email: data.form.email,
    password: btoa(data.form.password),
  });
}
</script>

<style lang="scss">
.form-validation {
  input {
    width: 100%;
  }

  &__buttons {
    text-align: right;

    [type='submit'] {
      margin-left: 10px;
    }
  }
}
</style>
