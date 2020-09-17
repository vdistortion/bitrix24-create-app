<template>
  <v-overlay :value="visible" :z-index="4">
    <v-progress-circular indeterminate size="17"/>
  </v-overlay>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState('loader', ['visible']),
};
</script>
