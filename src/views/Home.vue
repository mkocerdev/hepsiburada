<template>
  <div class="home">
    <AppContainer>
      <ListHeader />
      <p>
        {{ selectedFilters }}
      </p>
      <p>
        {{ filters }}
      </p>
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
  async created() {
    await this.getData();
  },
  data() {
    return {
      selectedFilters: null,
      filters: null,
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
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
      const { brand = [], color = [] } = this.$route.query;
      console.log("brand");
      console.log(brand);
      this.selectedFilters = { brand, color };
      this.filters = await this.getFilters();
    },
    getFilters() {
      const colors = this.products.map((x) => ({
        ...x.color,
      }));

      const uniqueColors = colors.filter((i, index, arr) => this.getFirstIndex(arr, i) === index);
      const uniqueBrands = [...new Set(this.products.map((item) => item.brand))];

      const filters = [
        {
          key: "color",
          label: "Renk",
          data: [...uniqueColors],
        },
        {
          key: "brand",
          label: "Marka",
          data: [...uniqueBrands],
        },
      ];
      return filters;
    },
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
