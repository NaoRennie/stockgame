<template>
  <div>
    <h1>株取引シュミレーション</h1>
    <!-- <h6>you may save and load your data</h6> -->
    <h6>'End day'を押して新しいレートを取得！</h6>
    <hr>
    <p>全資産: {{ funds | currency }}</p>
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
