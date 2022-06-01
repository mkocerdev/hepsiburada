<template>
  <div class="list-filter">
    <template v-for="(filter, index) in filters">
      <ListFilterCard :filter="filter" v-bind="$attrs" v-on="$listeners" :key="index" />
    </template>
  </div>
</template>

<script>
import ListFilterCard from "@/modules/ProductList/ListFilter/ListFilterCard.vue";

export default {
  components: {
    ListFilterCard,
  },
  props: {
    filters: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.list-filter {
  display: block;
}
</style>
