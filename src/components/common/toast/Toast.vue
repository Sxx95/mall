<template>
  <div class="toast" v-show="isShow">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      isShow: false,
      timer: null,
    };
  },
  methods: {
    show(message, delay = 2000) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.message = message;
      this.isShow = true;

      this.timer = setTimeout(() => {
        this.message = "";
        this.isShow = false;
      }, delay);
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.7);
  text-align: center;
  color: #fff;
  transform: translate(-50%, -50%);
  z-index: 999;
}
</style>
