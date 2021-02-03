import productAxios from '../../axios/goods';

export default {
  namespaced: true,
  state() {
    return {
      products: [],
      loading: false,
    };
  },
  mutations: {
    setProducts(state, newProducts) {
      //console.log('setProducts', newProducts);
      state.products = newProducts;
      //console.log(state.products);
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    async loadAll({ commit }) {
      const { data } = await productAxios.get();

      commit('setProducts', data);
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
    productById: (state) => (id) => {
      return state.products.find((p) => p.id === id);
    },
  },
};
