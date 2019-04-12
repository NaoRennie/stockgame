<template>
  <div>
    <h1>Trade or View your Portfolio</h1>
    <h6>you may save and load your data</h6>
    <h6>click on 'End day' to begin a New day</h6>
    <hr>
    <p>Your Funds: {{ funds | currency }}</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>

<style>
</style>
