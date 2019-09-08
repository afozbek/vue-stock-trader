<template>
  <div class="col-xl-4 col-sm-6 col-12">
    <div class="card mt-3 border-success">
      <div class="card-header text-white bg-success">
        <h4 class="card-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price }})</small>
        </h4>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model="quantity"
          />
        </div>
        <div class="float-right">
          <button
            class="btn btn-success"
            @click="buyStock"
            :disabled="controlButton"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: +this.quantity
      };
      console.log(order);

      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  },
  computed: {
    controlButton() {
      return this.quantity <= 0 || !Number.isInteger(+this.quantity);
    }
  }
};
</script>
