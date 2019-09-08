<template>
  <vue-fragment>
    <app-stock
      v-for="stock in stocks"
      :key="stock.id"
      :stock="stock"
    ></app-stock>
  </vue-fragment>
</template>

<script>
import Stock from "./Stock.vue";
import { Fragment } from "vue-fragment";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["stocks"])
  },
  components: {
    appStock: Stock,
    vueFragment: Fragment
  }
};
</script>

<style></style>
