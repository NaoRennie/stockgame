<template>
  <div class="ui secondary pointing menu">
    <router-link class="active item" to="/">Stock Trader</router-link>
    <router-link activeClass="active" class="active item" to="/stocks" tag="li">
      <a>Stocks</a>
    </router-link>
    <router-link activeClass="active" class="active item" to="/portfolio" tag="li">
      <a>portfolio</a>
    </router-link>
    <div class="right menu">
      <a class="active ui item" @click="endDay">End day</a>
      <a class="active ui item">Save data</a>
      <a class="active ui item">Load data</a>
      <strong class="active ui item">Funds: {{ funds | currency }}</strong>
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
    ...mapActions(["randomizeStocks"]),
    endDay() {
      this.randomizeStocks();
    }
  }
};
</script>

<style>
</style>
