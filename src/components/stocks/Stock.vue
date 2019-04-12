<template>
  <div class="panel">
    <div class="panel-head">
      <h3>{{ stock.name }}</h3>
      <div>(price: {{ stock.price }})</div>
    </div>
    <div class="panel-body">
      <input
        type="number"
        class="form-contoal"
        placeholder="Quantity"
        v-model="quantity"
        :class="{ danger: insufficientFunds }"
      >
    </div>
    <div>
      <button
        class="btn btn-success"
        @click="buyStock"
        :disabled="insufficientFunds || quantity<=0 "
      >{{ insufficientFunds ? '資金不足です' : '購入' }}</button>
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
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        id: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      // eslint-disable-next-line
      console.log(order);
      this.$store.dispatch("buyStock", order);
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
  margin-left: 80px;
}
.btn {
  width: 100px;
}
</style>
<style scoped>
.danger {
  border: solid 1px red;
}
</style>
