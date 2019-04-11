<template>
  <div class="panel">
    <div class="panel-head">
      <h3>{{ stock.name }}</h3>
      <div>(price: {{ stock.price }}| quantity: {{ stock.quantity }})</div>
    </div>
    <div class="panel-body">
      <input type="number" class="form-contoal" placeholder="Quantity" v-model="quantity">
    </div>
    <div>
      <button class="btn btn-success" @click="sellStock" :disabled="quantity<=0 ">sell</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Stock",
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),
    sellStock() {
      console.log(this.stock);
      const order = {
        id: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
};
</script>

<style>
</style>
