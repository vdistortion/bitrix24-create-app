<template>
  <placement-list></placement-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PlacementList from '../components/PlacementList.vue';

export default defineComponent({
  components: {
    PlacementList,
  },
  name: 'placement-page',
});
</script>
