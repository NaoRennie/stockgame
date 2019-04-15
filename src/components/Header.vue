<template>
  <div class="ui secondary pointing menu">
    <router-link class="active item" to="/">STOCK TRADER</router-link>
    <router-link activeClass="active" class="active item" to="/stocks" tag="li">
      <a>株</a>
    </router-link>
    <router-link activeClass="active" class="active item" to="/portfolio" tag="li">
      <a>所有株</a>
    </router-link>
    <div class="right menu">
      <a class="active ui item" @click="endDay">End day</a>
      <a class="active ui item" @click="saveData">Save data</a>
      <a class="active ui item" @click="loadData">Load data</a>
      <strong class="active ui item">全資産: {{ funds | currency }}</strong>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Header",

  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData"
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put("data.json", data);
    },
    loadData() {
      this.fetchData();
    }
  }
};
</script>

<style>
</style>
