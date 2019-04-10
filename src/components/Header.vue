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
      <a class="active ui item">End day</a>
      <a class="active ui item">
        <div class="ui dropdown">
          <div class="text">Save&Load</div>
          <i class="dropdown icon"></i>
          <div class="menu">
            <div class="item">
              <span class="description">ctrl + o</span>
              Open...
            </div>
            <div class="item">Load</div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
</style>
