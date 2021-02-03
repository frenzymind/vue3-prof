<template>
  <div class="card">
    <h1>магазин /</h1>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    console.log("SHOP CREATED");

    onMounted(() => {
      console.log("SHOP MOUNTED");
    });
  },
};
</script>

<style>
</style>