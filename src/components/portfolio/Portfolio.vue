<template>
  <div>
    <Stock :stock="stock" v-for="(stock, index) in stocks" :key="index"></Stock>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock.vue";
export default {
  name: "Portfolios",
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio"
    })
  },
  components: {
    Stock
  }
};
</script>

<style>
</style>
