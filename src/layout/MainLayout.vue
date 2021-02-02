<template >
  <the-nav-bar></the-nav-bar>
  <the-side-bar></the-side-bar>
  <div class="container with-nav">
    <app-message />
    <router-view></router-view>
  </div>
</template>
<script>
import TheNavBar from "../components/TheNavbar.vue";
import TheSideBar from "../components/TheSideBar.vue";
import AppMessage from "../components/UI/AppMessage.vue";

export default {
  components: { TheNavBar, AppMessage, TheSideBar },
};
</script>
<style>
</style>