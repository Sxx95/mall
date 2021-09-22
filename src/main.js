import Vue from "vue";
import App from "./App.vue";
import "normalize.css/normalize.css";
import router from "@/router";
import store from "@/store";

Vue.config.productionTip = true;

// 事件总线对象
// Vue.prototype.$bus = new Vue();

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
