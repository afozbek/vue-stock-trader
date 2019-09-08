<template>
  <div class="col-xl-4 col-sm-6 col-12">
    <div class="card mt-3 border-info">
      <div class="card-header text-white bg-info">
        <h4 class="card-title">
          {{ stock.name }}
          <small
            >(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small
          >
        </h4>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input
            type="number"
            :class="[{ 'border-danger': controlButton }, 'form-control']"
            placeholder="Quantity"
            v-model="quantity"
          />
        </div>
        <div class="float-right">
          <button
            class="btn btn-info"
            @click="sellStock"
            :disabled="controlButton"
          >
            {{
              !canSellStock
                ? "Poor Guy 😥"
                : controlButton
                ? "👈 Enter Count 😅"
                : "Sell It Now 😎"
            }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["stock"],

  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    ...mapActions({
      sellSelectedStock: "sellStock"
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: +this.quantity
      };

      this.sellSelectedStock(order);

      this.quantity = 0;
    }
  },
  computed: {
    canSellStock() {
      return this.quantity <= this.stock.quantity;
    },
    controlButton() {
      return (
        this.quantity <= 0 ||
        !Number.isInteger(+this.quantity) ||
        !this.canSellStock
      );
    }
  }
};
</script>
