<template>
  <div class="filter-card">
    {{ currentValue }}
    <p class="filter-card__title">{{ filter.label }}</p>
    <div v-for="(item, index) in filter.data" :key="index">
      <button class="filter-card__item-title" @click="setFilter(filter.key, item.value || item)">
        {{ item.label || item }}
      </button>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  props: {
    filter: {
      type: Object,
      default: () => {},
    },
    value: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      currentValue: _.cloneDeep(this.value),
    };
  },
  computed: {
    filterData() {
      return Array.isArray(this.filter.data);
    },
  },
  methods: {
    async setFilter(key, value) {
      this.currentValue[key].push(value);

      const query = {
        ...this.$route.query,
        ...this.currentValue,
      };

      this.$router.replace({
        query,
      });

      this.$emit("input", query);
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
      background-color: transparent;
      border: 0;
      cursor: pointer;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      padding: 0;
      margin: 0;
      color: var(--color-black-90);
      &:hover {
        color: var(--color-orange);
      }
    }
  }
}
</style>
