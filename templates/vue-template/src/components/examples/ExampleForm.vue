<template>
  <form-validation></form-validation>
</template>

<script>
import { defineComponent } from 'vue';
import FormValidation from '../FormValidation.vue';

export default defineComponent({
  components: {
    FormValidation,
  },
  name: 'example-form',
});
</script>
