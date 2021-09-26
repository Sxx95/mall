import Vue from "vue";
import App from "./App.vue";
import "normalize.css/normalize.css";
import router from "@/router";
import store from "@/store";
import toast from "components/common/toast";
import FastClick from "fastclick";

Vue.config.productionTip = true;

// 安装插件,就相当于调用了toast的install函数方法
Vue.use(toast);
// 事件总线对象
// Vue.prototype.$bus = new Vue();

// 解决移动端300ms延迟
FastClick.attach(document.body);

new Vue({
  render: (h) => h(App),
  router,
  store,
  toast,
}).$mount("#app");
