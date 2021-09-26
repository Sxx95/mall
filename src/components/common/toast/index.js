import Toast from "./Toast.vue";

const obj = {};

obj.install = function (Vue) {
  // 创建组件构造器
  const toastConstructor = Vue.extend(Toast);
  // 用new的方式，根据组件构造器，可以创建一个组件对象
  const toast = new toastConstructor();
  // 将组件对象手动地挂载到某一个元素上
  toast.$mount(document.createElement("div"));
  document.body.appendChild(toast.$el);
  // 将toast组件对象放在vue原型上，使得其他任意组件都可使用$toast方法使用toast组件对象
  Vue.prototype.$toast = toast;
};

export default obj;
