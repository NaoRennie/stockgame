<template>
  <div class="contianer">
    <Header></Header>
    <!-- <EachCompany></EachCompany> -->

    <div class="ui segment">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import EachCompany from "./components/EachCompany";
export default {
  name: "App",
  components: {
    EachCompany,
    Header
  },
  created() {
    this.$store.dispatch("initStocks");
  }
};
</script>

<style>
.slide-enter {
  /* transform: rotateY(0deg) */
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
}
.slide-leave {
  /* transform: rotateY(0deg) */
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
}
@keyframes slide-in {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-30px);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(-30px);
  }
  to {
    transform: translateY(0);
  }
}
.segment {
  height: 500px;
}
</style>
