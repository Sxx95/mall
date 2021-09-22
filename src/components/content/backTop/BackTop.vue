<template>
  <div class="back-top">
    <img src="~assets/img/common/backtop.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
};
</script>

<style scoped>
.back-top {
  position: fixed;
  right: 8px;
  bottom: 60px;
  z-index: 99;
}

.back-top img {
  display: block;
  width: 43px;
  height: 43px;
}
</style>
