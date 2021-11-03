<template>
  <v-overlay :value="loader" :z-index="4">
    <v-progress-circular indeterminate size="17"/>
  </v-overlay>
</template>

<script>
export default {
  props: {
    loader: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
