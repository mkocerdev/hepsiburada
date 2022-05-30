<template>
  <div class="header">
    <AppContainer>
      <div class="header__container">
        <AppHeaderLogo />
        <AppHeaderSearchBar />
        <AppHeaderBasket />
      </div>
    </AppContainer>
  </div>
</template>

<script>
import AppContainer from "@/components/AppContainer.vue";
import AppHeaderLogo from "@/components/AppHeader/AppHeaderLogo.vue";
import AppHeaderSearchBar from "@/components/AppHeader/AppHeaderSearchBar.vue";
import AppHeaderBasket from "@/components/AppHeader/AppHeaderBasket.vue";

export default {
  components: {
    AppContainer,
    AppHeaderLogo,
    AppHeaderSearchBar,
    AppHeaderBasket,
  },
};
</script>

<style lang="scss" scoped>
.header {
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.35);
  &__container {
    height: 48px;
    padding: 23px 0 25px 0;
    display: grid;
    align-items: center;
    grid-template-columns: 250px auto 120px;
    column-gap: 110px;
  }
}
</style>
