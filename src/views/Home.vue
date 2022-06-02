<template>
  <div class="home">
    <AppContainer>
      <ListHeader />
      <div class="list">
        <ListFilter :filters="filters" v-model="selectedFilters" />
        <ListProduct :products="products" />
      </div>
    </AppContainer>
  </div>
</template>

<script>
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
      selectedFilters: {
        brand: "",
        color: "",
      },
    };
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
    filters() {
      return this.$store.getters.filters;
    },
  },
  watch: {
    "$route.query": {
      handler() {
        this.getData();
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    async getData() {
      await this.$store.dispatch("fetchProducts", {
        ...this.$route.query,
      });
      const { brand = "", color = "" } = this.$route.query;
      this.selectedFilters = { brand, color };
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
