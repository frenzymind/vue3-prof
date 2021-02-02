<template>
  <div class="navbar">
    <h3>Игрушки</h3>

    <ul class="navbar-menu">
      <li>
        <router-link to="/">Магазин</router-link>
      </li>
      <li>
        <router-link to="/cart">Корзина</router-link>
      </li>
      <li>
        <a href="#" @click.prevent="logout">Выход</a>
      </li>
    </ul>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const router = useRouter();
    const store = useStore();

    return {
      logout: () => {
        store.commit("auth/logout");
        router.push("/auth");
      },
    };
  },
};
</script>

<style>
</style>