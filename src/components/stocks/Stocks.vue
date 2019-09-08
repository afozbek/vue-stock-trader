<template>
  <vue-fragment>
    <app-stock
      v-for="stock in stocks"
      :key="stock.id"
      :name="stock.name"
      :price="stock.price"
    ></app-stock>
  </vue-fragment>
</template>

<script>
import Stock from "./Stock.vue";
import { Fragment } from "vue-fragment";

export default {
  data() {
    return {
      stocks: [
        {
          id: 1,
          name: "BMW",
          price: 110
        },
        {
          id: 2,
          name: "Google",
          price: 200
        },
        {
          id: 3,
          name: "Apple",
          price: 250
        },
        {
          id: 4,
          name: "Twitter",
          price: 8
        },
        {
          id: 5,
          name: "Youtube",
          price: 8
        }
      ]
    };
  },
  components: {
    appStock: Stock,
    vueFragment: Fragment
  }
};
</script>

<style></style>
