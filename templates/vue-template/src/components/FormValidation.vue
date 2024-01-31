<template>
  <form class="form-validation" @reset="onReset" @submit.prevent="onSubmit" style="width: 100%;">
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

<script>
import { defineComponent } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import {
  email, required, minLength, sameAs, helpers,
} from '@vuelidate/validators';
import FormErrorWrapper from './FormErrorWrapper.vue';

export default defineComponent({
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  validations() {
    return {
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
          sameAs: helpers.withMessage('Пароли не совпадают', sameAs(this.form.password)),
        },
      },
    };
  },
  methods: {
    onReset() {
      this.form.email = '';
      this.form.password = '';
      this.form.passwordConfirm = '';
      this.v$.$reset();
    },
    onSubmit() {
      this.v$.$touch();
      if (this.v$.$error) return;
      console.info({
        email: this.form.email,
        password: btoa(this.form.password),
      });
    },
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
        passwordConfirm: '',
      },
    };
  },
  provide: {
    $BX24: null,
  },
  components: {
    FormErrorWrapper,
  },
  name: 'form-validation',
});
</script>

<style lang="stylus">
.form-validation
  &__buttons
    margin-top 10px
    text-align right
</style>
