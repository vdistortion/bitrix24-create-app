<template>
  <div class="placement-page">
    <placement-list></placement-list>
  </div>
</template>

<script>
import PlacementList from '../components/PlacementList.vue';

export default {
  components: {
    PlacementList,
  },
  name: 'placement-page',
};
</script>

<style lang="stylus">
.placement-page
  display flex
  justify-content center
</style>
