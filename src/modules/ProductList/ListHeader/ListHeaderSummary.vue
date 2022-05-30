<template>
  <div class="result-summary">
    <h1 class="result-summary__title">iPhone iOS cep telefonu</h1>
    <p class="result-summary__search">
      Aranan Kelime <strong class="result-summary__search-key">iphone 11</strong>
    </p>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.result-summary {
  &__title {
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 28px;
    color: var(--color-black-100);
    margin: 0 0 5px 0;
  }
  &__search {
    font-weight: 400;
    font-size: 15px;
    line-height: 15px;
    color: var(--color-black-55);
    margin: 0;
    &-key {
      color: var(--color-black-100);
    }
  }
}
</style>
