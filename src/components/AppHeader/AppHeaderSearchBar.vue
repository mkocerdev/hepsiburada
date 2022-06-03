<template>
  <div class="search">
    <img class="search__icon" src="@/assets/img/icons/search.svg" alt="Search icon" />
    <input
      class="search__input"
      type="text"
      placeholder="25 milyon'dan fazla ürün içerisinde ara"
      :value="title"
      @input="searchTitle($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: this.$route.query.title || "",
    };
  },
  methods: {
    searchTitle(search) {
      let query = {
        ...this.$route.query,
        title: "",
      };
      if (search.length > 2) {
        const title = {
          title: search,
        };
        query = {
          ...this.$route.query,
          ...title,
        };
      }

      Object.keys(query).forEach((key) => {
        if (query[key] === null || query[key] === "") {
          delete query[key];
        }
      });
      this.$router.replace({
        query,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  height: 100%;
  background: var(--color-black-20);
  border-radius: 100px;
  display: grid;
  grid-template-columns: 70px auto;
  align-items: stretch;
  &__icon {
    display: grid;
    align-self: center;
    justify-self: center;
  }
  &__input {
    background-color: transparent;
    border: 0;
    &::placeholder {
      font-weight: 400;
      font-size: 15px;
      display: flex;
      align-items: center;
      color: var(--color-black-55);
    }
    &:focus {
      outline: none;
    }
  }
}
</style>
