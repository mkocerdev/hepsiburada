/* eslint-disable no-restricted-syntax */
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
    filters(state) {
      const uniqueColors = [...new Set(state.products.map((item) => item.color))];
      const uniqueBrands = [...new Set(state.products.map((item) => item.brand))];
      const sortOptions = [
        "En Düşük Fiyat",
        "En Yüksek Fiyat",
        "En Yeniler (A>Z)",
        "En Yeniler (Z>A)",
      ];

      const filters = [
        {
          key: "color",
          label: "Renk",
          data: [...uniqueColors],
        },
        {
          key: "sort",
          label: "Siralama",
          data: [...sortOptions],
        },
        {
          key: "brand",
          label: "Marka",
          data: [...uniqueBrands],
        },
      ];
      return filters;
    },
  },
  mutations: {
    SET_PRODUCTS(state, data) {
      state.products = data;
      localStorage.setItem("products", JSON.stringify(data));
    },
  },
  actions: {
    fetchProducts({ commit }, filters) {
      const filterProducts = productsData
        .filter((item) => {
          for (const key in filters) {
            if (item[key] === undefined || item[key] !== filters[key]) {
              if (key === "sort") {
                return true;
              }
              return false;
            }
          }
          return true;
        })
        .sort((a, b) => {
          let sort = "";
          if (filters?.sort === "En Yeniler (A>Z)") {
            sort = new Date(b.createdDate) - new Date(a.createdDate);
          } else if (filters?.sort === "En Yeniler (Z>A)") {
            sort = new Date(a.createdDate) - new Date(b.createdDate);
          } else if (filters?.sort === "En Yüksek Fiyat") {
            sort = b.price.price - a.price.price;
          } else if (filters?.sort === "En Düşük Fiyat") {
            sort = a.price.price - b.price.price;
          }
          return sort;
        });

      commit("SET_PRODUCTS", filterProducts);
    },
  },
  modules: {},
});
