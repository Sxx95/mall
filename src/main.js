import Vue from "vue";
import App from "./App.vue";
import "normalize.css/normalize.css";
import router from "@/router";
Vue.config.productionTip = true;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
