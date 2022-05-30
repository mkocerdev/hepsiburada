<template>
  <div class="product-list">
    <template v-for="(product, index) in products">
      <ListProductCard :item="product" :key="index" />
    </template>
  </div>
</template>

<script>
import ListProductCard from "@/modules/ProductList/ListProduct/ListProductCard.vue";

export default {
  components: {
    ListProductCard,
  },
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="scss" scoped>
.product-list {
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  display: grid;
  grid-template-columns: repeat(4, minmax(211px, 349.33px));
  margin-top: 14px;
  grid-gap: 14px;
  scroll-margin: 14px;
}
</style>
