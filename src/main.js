import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Stocks from "./components/stocks/Stocks";
import store from "./store/store";
import VueResource from "vue-resource";

import App from "./App.vue";

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = "https://stock-9c452.firebaseio.com/";

Vue.filter("currency", value => {
  return "¥" + value.toLocaleString();
});

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/portfolio", component: Portfolio },
    { path: "/stocks", component: Stocks }
  ]
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
