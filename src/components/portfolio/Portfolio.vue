<template>
  <vue-fragment>
    <app-stock
      v-for="stock in stocks"
      :stock="stock"
      :key="stock.id"
    ></app-stock>
  </vue-fragment>
</template>

<script>
import { mapGetters } from "vuex";
import { Fragment } from "vue-fragment";
import Stock from "./Stock.vue";

export default {
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio"
    })
  },
  components: {
    appStock: Stock,
    vueFragment: Fragment
  }
};
</script>

<style></style>
