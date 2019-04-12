<template>
  <div class="panel">
    <div class="panel-head">
      <h3>{{ stock.name }}</h3>
      <div>(price: {{ stock.price }}| quantity: {{ stock.quantity }})</div>
    </div>
    <div class="panel-body">
      <input
        type="number"
        class="form-contoal"
        placeholder="Quantity"
        v-model="quantity"
        :class="{ danger:insufficientQuantity }"
      >
    </div>
    <div>
      <button
        class="btn btn-success"
        @click="sellStock"
        :disabled="
      insufficientQuantity || quantity<=0 "
      >{{ insufficientQuantity ? '株数不足': '販売' }}</button>
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
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
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
<style scoped>
.danger {
  border: solid 1px red;
}
</style>
