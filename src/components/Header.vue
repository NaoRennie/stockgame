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
      <!-- <a class="active ui item">Save data</a>
      <a class="active ui item">Load data</a>-->
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
    ...mapActions(["randomizeStocks"]),
    endDay() {
      this.randomizeStocks();
    }
  }
};
</script>

<style>
</style>
