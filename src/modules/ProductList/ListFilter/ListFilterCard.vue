<template>
  <div class="filter-card">
    <p class="filter-card__title">{{ filter.label }}</p>
    <div v-for="(item, index) in filter.data" :key="index">
      <p class="filter-card__item-title">{{ item.label || item }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filter: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    filterData() {
      return Array.isArray(this.filter.data);
    },
  },
};
</script>
<style lang="scss" scoped>
.filter-card {
  margin: 35px 0;
  &__title {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: var(--color-black-100);
    margin-top: 0px;
    margin-bottom: 20px;
  }
  &__item {
    &-title {
      cursor: pointer;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      margin: 0 0 5px 0;
      color: var(--color-black-90);
      &:hover {
        color: var(--color-orange);
      }
    }
  }
}
</style>
