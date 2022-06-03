<template>
  <div>
    <div class="filter-card">
      <p class="filter-card__label">{{ filter.label }}</p>
      <div v-for="(item, index) in filter.data" :key="index">
        <button
          class="filter-card__value"
          :class="{ 'filter-card__value--active': hasActiveFilters(filter.key, item) }"
          @click="setFilter(filter.key, item)"
        >
          {{ item }}
        </button>
      </div>
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
    value: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      currentValue: this.value,
    };
  },
  methods: {
    hasActiveFilters(filterKey, value) {
      if (this.$route.query[filterKey] === value) {
        return true;
      }
      return false;
    },
    setFilter(filterKey, value) {
      if (this.currentValue[filterKey] === value) {
        this.currentValue[filterKey] = "";
      } else {
        this.currentValue[filterKey] = value;
      }

      const query = {
        ...this.$route.query,
        ...this.currentValue,
      };

      Object.keys(query).forEach((key) => {
        if (query[key] === null || query[key] === "") {
          delete query[key];
        }
      });
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
  &__label {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: var(--color-black-100);
    margin-top: 0px;
    margin-bottom: 20px;
  }
  &__value {
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
    &--active {
      color: var(--color-orange);
    }
  }
}
</style>
