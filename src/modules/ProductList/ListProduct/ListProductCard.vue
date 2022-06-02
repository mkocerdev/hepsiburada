<template>
  <div class="product-card">
    <div class="product-card__image">
      <img :src="require(`@/assets/img/products/${item.image}`)" :alt="item.title" />
    </div>
    <div class="product-card__info">
      <p class="product-card__title">{{ item.title }}</p>
      <div class="product-card__props">
        <p><strong>Marka: </strong> {{ item.brand }}</p>
        <p><strong>Renk: </strong> {{ item.color.label }}</p>
      </div>

      <div class="product-card__price">
        <p class="product-card__price-price">
          <strong>{{ item.price.price }} TL</strong>
        </p>
        <div v-if="hasDiscount">
          <span class="product-card__price-original"> {{ item.price.originalPrice }} TL </span>
          <span class="product-card__price-rate"> {{ item.price.discountRate }} %</span>
        </div>
      </div>

      <div class="product-card__addcart">
        <button class="product-card__addcart-button">Sepete Ekle</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    hasDiscount() {
      return this.item.price.discountRate > 0;
    },
  },
};
</script>
<style lang="scss" scoped>
.product-card {
  position: relative;
  cursor: pointer;
  &:hover {
    .product-card__addcart {
      visibility: visible;
      opacity: 1;
      z-index: 1;
    }
  }
  &__addcart {
    visibility: hidden;
    opacity: 0;
    transition: 0.2s ease;
    position: absolute;
    bottom: 0;
    top: 45px;
    left: 0;
    right: 0;
    background: white;
    padding: 0 11px 20px 11px;
    display: flex;
    align-items: flex-end;
    &-button {
      cursor: pointer;
      position: relative;
      z-index: 1;
      border: 0;
      background: rgba(255, 96, 0, 0.11);
      border-radius: var(--radius-lg);
      width: 100%;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;
      color: var(--color-orange);
    }
  }
  &__image {
    border: 1px solid #e5e5e5;
    border-radius: var(--radius-lg);
    height: 340px;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  &__info {
    position: relative;
  }
  &__title {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: var(--color-black-100);
    margin-bottom: 10px;
    margin-top: 10px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    height: 35px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__props {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: var(--color-black-100);
    margin-bottom: 13px;
    margin-top: 10px;
    p {
      margin-top: 0;
      margin-bottom: 5px;
    }
  }
  &__price {
    min-height: 40px;
    &-price {
      font-size: 14px;
      line-height: 18px;
      color: #000000;
      margin-top: 0;
      margin-bottom: 0;
    }
    &-original {
      font-weight: 400;
      font-size: 13px;
      line-height: 18px;
      text-decoration-line: line-through;
      color: var(--color-black-60);
      margin-top: 0;
      margin-bottom: 0;
    }
    &-rate {
      font-weight: 700;
      font-size: 12px;
      line-height: 18px;
      color: var(--color-red);
    }
  }
}
</style>
