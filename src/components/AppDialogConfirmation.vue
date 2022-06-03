<template>
  <div class="confirmation">
    <div class="confirmation__overlay"></div>
    <div class="confirmation__content">
      <div class="confirmation__title">
        <p>{{ title }}</p>
      </div>
      <div class="confirmation__message">{{ message }}</div>
      <div class="confirmation__actions">
        <button class="confirmation__button confirmation__button--success" @click="confirm">
          EVET
        </button>
        <button class="confirmation__button confirmation__button--error" @click="cancel">
          HAYIR
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
  },
  methods: {
    confirm() {
      this.$emit("confirm", true);
    },
    cancel() {
      this.$emit("confirm", false);
    },
  },
};
</script>
<style lang="scss" scoped>
.confirmation {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &__overlay {
    opacity: 0.46;
    background-color: rgb(33, 33, 33);
    align-items: center;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), z-index 1ms;
  }
  &__content {
    position: relative;
    width: 400px;
    padding: 15px 0;
    background-color: #fff;
    background: #ffffff;
    border: 1px solid rgba(228, 228, 228, 0.6);
    box-shadow: 0px 6px 12px rgba(50, 50, 71, 0.07);
    border-radius: 4px;
  }
  &__title {
    padding: 0 20px;
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;
    color: var(--color-black-100);
    border-bottom: 1px solid #cdcdcd;
    margin-bottom: 15px;
  }
  &__message {
    padding: 0 20px;
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    color: var(--color-black-100);
  }
  &__actions {
    margin-top: 10px;
    padding: 0 20px;
    float: right;
  }
  &__button {
    cursor: pointer;
    font-weight: 700;
    font-size: 12px;
    line-height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    width: 70px;
    border: 0;
    height: 26px;
    border-radius: 4px;
    &--success {
      background-color: #90d659;
      margin-right: 10px;
    }
    &--error {
      background-color: #d65959;
    }
  }
}
</style>
