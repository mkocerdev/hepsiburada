<template>
  <div class="sorting">
    <select class="sorting__select" name="order" id="order">
      <option value="" disabled selected>Sıralama</option>
      <option value="1">En Düşük Fiyat</option>
      <option value="2">En Yüksek Fiyat</option>
      <option value="3">En Yeniler (A>Z)</option>
      <option value="4">En Yeniler (Z>A)</option>
    </select>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.sorting {
  &__select {
    width: 120px;
    height: 48px;
    border: 1px solid #b4b4bb;
    border-radius: var(--radius-default);
    font-weight: 400;
    font-size: 17px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    color: var(--color-black-55);
    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
    background-image: url("data:image/svg+xml;utf8,<svg fill='%23BDBDBD'%20height='24'%20viewBox='0%200%2024%2024'%20width='24'%20xmlns='http://www.w3.org/2000/svg'><path%20d='M7%2010l5%205%205-5z'/><path%20d='M0%200h24v24H0z'%20fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 10px;
    padding-right: 15px;
  }
}
</style>
