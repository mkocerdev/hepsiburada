<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from "@/components/AppHeader/index.vue";

export default {
  components: {
    Header,
  },
};
</script>
