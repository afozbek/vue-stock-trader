<template>
  <div class="row">
    <app-stock
      v-for="stock in stocks"
      :key="stock.stockId"
      :stock="stock"
    ></app-stock>
  </div>
</template>

<script>
import Stock from "./Stock.vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["stocks"])
  },
  components: {
    appStock: Stock
  }
};
</script>

<style></style>
