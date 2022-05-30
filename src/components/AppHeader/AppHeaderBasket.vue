<template>
  <div class="basket">
    <span class="basket__title"> Sepetim</span>
    <span class="basket__count">4</span>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.basket {
  position: relative;
  height: 100%;
  border: 1px solid var(--color-black-55);
  border-radius: var(--radius-default);
  display: grid;
  align-items: center;
  text-align: center;
  &__title {
    font-weight: 400;
    font-size: 17px;
    line-height: 24px;
    color: var(--color-black-55);
  }
  &__count {
    position: absolute;
    right: -9px;
    top: -9px;
    width: 18px;
    height: 18px;
    background: var(--color-orange);
    border-radius: var(--radius-default);
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #ffffff;
  }
}
</style>
