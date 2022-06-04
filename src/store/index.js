/* eslint-disable no-restricted-syntax */
import Vue from "vue";
import Vuex from "vuex";
import productsData from "@/assets/data/products.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: JSON.parse(localStorage.getItem("products")) || null,
    cart: JSON.parse(localStorage.getItem("cart")) || [],
  },
  getters: {
    cartCount(state) {
      return state.cart.length;
    },
    cart(state) {
      return state.cart.reverse();
    },
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
    SET_CART(state, data) {
      state.cart.push(data);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    REMOVE_CART(state, data) {
      const index = state.cart.indexOf(data);
      if (index > -1) {
        state.cart.splice(index, 1);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
  actions: {
    removeToCart({ commit }, product) {
      commit("REMOVE_CART", product);
    },
    addToCart({ commit }, product) {
      commit("SET_CART", product);
    },
    fetchProducts({ commit }, queries) {
      const filters = queries;
      const sort = queries?.sort;
      delete filters.sort;

      const filterProducts = productsData
        .filter((item) => {
          for (const key in filters) {
            if (item[key] === undefined || item[key] !== filters[key]) {
              if (item[key].toLowerCase().includes(filters[key].toLowerCase())) {
                return true;
              }
              return false;
            }
          }
          return true;
        })
        .sort((a, b) => {
          let sortValue = "";
          if (sort === "En Yeniler (A>Z)") {
            sortValue = new Date(b.createdDate) - new Date(a.createdDate);
          } else if (sort === "En Yeniler (Z>A)") {
            sortValue = new Date(a.createdDate) - new Date(b.createdDate);
          } else if (sort === "En Yüksek Fiyat") {
            sortValue = b.price.price - a.price.price;
          } else if (sort === "En Düşük Fiyat") {
            sortValue = a.price.price - b.price.price;
          }
          return sortValue;
        });

      commit("SET_PRODUCTS", filterProducts);
    },
  },
  modules: {},
});
