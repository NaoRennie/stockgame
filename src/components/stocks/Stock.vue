<template>
  <div class="panel">
    <div class="panel-head">
      <h3>{{ stock.name }}</h3>
      <div>(price: {{ stock.price}})</div>
    </div>
    <div class="panel-body">
      <input type="number" class="form-contoal" placeholder="Quantity" v-model="quantity">
    </div>
    <div>
      <button class="btn btn-success" @click="buyStock" :disabled="quantity<=0 ">Buy</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stock",
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
        quantity: this.quantity
      };
      // eslint-disable-next-line
      console.log(order);
      this.quantity = 0;
    }
  }
};
</script>

<style>
.panel {
  padding: 10px;
  margin: 30px;
  display: inline-block;
  width: 200px;
  height: 150px;
  border: solid #32a1ce;
}
.panel-head {
  background-color: aliceblue;
  border-bottom-color: black;
}
.panel-body {
  padding-top: 20px;
}
.btn-success {
  margin-top: 10px;
  margin-left: 130px;
}
</style>
