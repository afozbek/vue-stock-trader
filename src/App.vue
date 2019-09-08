<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderVue from "./components/Header.vue";

export default {
  components: {
    appHeader: HeaderVue
  }
};
</script>

<style lang="scss">
body {
  padding: 30px;
}
</style>
