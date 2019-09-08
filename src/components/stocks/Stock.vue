<template>
  <div class="col-lg-4 col-sm-6 col-12">
    <div class="card mt-3 border-success">
      <div class="card-header text-white bg-success">
        <h4 class="card-title">
          {{ name }}
          <small>(Price: {{ price }})</small>
        </h4>
      </div>
      <div class="card-body">
        <div class="float-left">
          <input type="number" class="form-control" placeholder="Quantity" />
        </div>
        <div class="float-right">
          <button class="btn btn-success">Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "price"]
};
</script>

<style></style>
