import Vue from "vue";
import App from "./App.vue";
import "normalize.css/normalize.css";
import router from "@/router";
Vue.config.productionTip = true;

// 事件总线对象
// Vue.prototype.$bus = new Vue();

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
