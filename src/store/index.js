import Vue from "vue";
import Vuex from "vuex";
import productsData from "@/assets/data/products.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: null,
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
  mutations: {
    SET_PRODUCTS(state, data) {
      state.products = data;
      localStorage.setItem("products", JSON.stringify(data));
    },
  },
  actions: {
    fetchProducts({ commit }, params) {
      const filterProducts = productsData;
      console.log(params);
      commit("SET_PRODUCTS", filterProducts);
    },
  },
  modules: {},
});
