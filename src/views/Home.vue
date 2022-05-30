/* eslint-disable comma-dangle */ /* eslint-disable implicit-arrow-linebreak */ /* eslint-disable
comma-dangle */ /* eslint-disable operator-linebreak */
<template>
  <div class="home">
    <AppContainer>
      <ListHeader />
      <div class="list">
        <ListFilter :filters="filters" />
        <ListProduct :products="products" />
      </div>
    </AppContainer>
  </div>
</template>

<script>
import productsData from "@/assets/data/products.json";

import AppContainer from "@/components/AppContainer.vue";
import ListHeader from "@/modules/ProductList/ListHeader/index.vue";
import ListProduct from "@/modules/ProductList/ListProduct/index.vue";
import ListFilter from "@/modules/ProductList/ListFilter/index.vue";

export default {
  components: {
    AppContainer,
    ListHeader,
    ListProduct,
    ListFilter,
  },
  data() {
    return {
      products: productsData,
    };
  },
  computed: {
    filters() {
      const colors = this.products.map((x) => ({
        ...x.color,
      }));

      const uniqueColors = colors.filter((i, index, arr) => this.getFirstIndex(arr, i) === index);
      const uniqueBrands = [...new Set(this.products.map((item) => item.brand))];

      const filters = [
        {
          filterType: "color",
          label: "Renk",
          data: [...uniqueColors],
        },
        {
          filterType: "brand",
          label: "Marka",
          data: [...uniqueBrands],
        },
      ];
      return filters;
    },
  },
  methods: {
    getFirstIndex(arr, item) {
      return arr.findIndex((a) => a.value === item.value);
    },
  },
};
</script>
<style lang="scss" scoped>
.list {
  display: grid;
  grid-template-columns: 206px auto;
}
</style>
