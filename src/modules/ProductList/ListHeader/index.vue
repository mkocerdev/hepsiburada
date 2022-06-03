<template>
  <div class="search-header">
    <ListHeaderSummary />
    <ListHeaderSorting v-bind="$attrs" v-on="$listeners" />
  </div>
</template>

<script>
import ListHeaderSorting from "@/modules/ProductList/ListHeader/ListHeaderSorting.vue";
import ListHeaderSummary from "@/modules/ProductList/ListHeader/ListHeaderSummary.vue";

export default {
  components: { ListHeaderSummary, ListHeaderSorting },
};
</script>

<style lang="scss" scoped>
.search-header {
  margin: 15px 0 17px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
