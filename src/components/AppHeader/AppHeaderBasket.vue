<template>
  <div class="basket" @mouseover="show = true" @mouseleave="show = false">
    <div class="basket__button">
      <span class="basket__title"> Sepetim</span>
      <span class="basket__count" v-if="cartCount > 0">{{ cartCount }}</span>
    </div>
    <transition name="fade">
      <div class="basket__items" key="3" v-if="show && cartCount > 0">
        <div v-for="(item, index) in cart" :key="index" class="basket-product">
          <div class="basket-product__image">
            <img :src="require(`@/assets/img/products/${item.image}`)" :alt="item.title" />
          </div>
          <div class="product-car__info">
            <p class="basket-product__title">{{ item.title }}</p>
            <button class="basket-product__remove" @click="removeToCart(item)">Remove</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      showAlert: false,
    };
  },
  computed: {
    cart() {
      return this.$store.getters.cart;
    },
    cartCount() {
      return this.$store.getters.cartCount;
    },
  },
  methods: {
    async removeToCart(product) {
      const confirmed = await this.$confirm({
        title: "Ürünü silmek istediğinize emin misiniz?",
        message:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiall....",
      });
      if (confirmed) {
        await this.$store.dispatch("removeToCart", product);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.basket {
  position: relative;
  height: 100%;
  border: 1px solid var(--color-black-55);
  border-radius: var(--radius-default);
  z-index: 2;
  cursor: pointer;
  &:hover {
    .basket__items {
      opacity: 1;
      visibility: visible;
    }
  }
  &__button {
    height: 100%;
    position: relative;
    z-index: 2;
    background: white;
    border-radius: var(--radius-default);
    display: flex;
    align-items: center;
    justify-content: center;
  }
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
    text-align: center;
    color: #ffffff;
  }
  &__items {
    background: #ffffff;
    border: 1px solid var(--color-black-55);
    border-radius: var(--radius-default);
    border-top-right-radius: 0px;
    width: 360px;
    padding: 25px;
    height: auto;
    position: absolute;
    right: -1px;
    top: calc(100% - 2px);
    z-index: -1;
  }
  .basket-product {
    display: grid;
    grid-template-columns: 60px auto;
    align-items: center;
    margin-bottom: 20px;
    &__image {
      padding: 7px;
      border: 1px solid #e5e5e5;
      border-radius: var(--radius-default);
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
    &__title {
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      color: var(--color-black-100);
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      display: -webkit-box;
      margin-top: 0;
      height: 15px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &__remove {
      cursor: pointer;
      font-weight: 400;
      font-size: 10px;
      line-height: 18px;
      display: flex;
      align-items: center;
      text-align: center;
      color: var(--color-red);
      background: #ffffff;
      border: 1px solid var(--color-red);
      border-radius: var(--radius-default);
    }
  }
}
</style>
