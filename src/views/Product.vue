<template>
  <div class="card">
    <h1>Profuct page /product/{{ id }}</h1>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();

    return {
      id: route.params.id,
    };
  },
};
</script>
<style>
</style>