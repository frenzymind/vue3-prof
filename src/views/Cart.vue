<template>
  <div class="card">
    <h1>Корзина</h1>
    <h2 v-if="!loading"></h2>
    <h3 class="text-center">В корзине пока ничего нет</h3>
    <table class="table">
      <thead>
        <tr>
          <th>Наименование</th>
          <th>Количество</th>
          <th>Цена (шт)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Название товара</td>
          <td>
            <button class="btn primary">+</button>
            42 шт.
            <button class="btn danger">-</button>
          </td>
          <td>42 000 руб.</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <p class="text-right"><strong>Всего: 14 200 руб.</strong></p>
    <p class="text-right">
      <button class="btn">Оплатить</button>
    </p>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted, ref, watch } from "vue";

const CART_MODEL = {
  2: 3,
  5: 1,
};

export default {
  setup() {
    console.log("CART CREATED");

    const store = useStore();

    const loading = ref(true);
    //const cartProducts = ref(store.getters["product/products"]);

    const cartProducts = computed(() => store.getters["product/products"]);

    watch(cartProducts, () => {
      console.log(cartProducts);
      console.log("watching");
    });

    onMounted(async () => {
      await store.dispatch("product/loadAll");
      loading.value = false;
      //cartProducts.value = store.getters["product/products"];
      // console.log("PRODUCTS GETTED", store.getters["product/products"]);
      //console.log("GETTED");
    });

    return { loading, cartProducts };
  },
};
</script>

<style scoped>
</style>