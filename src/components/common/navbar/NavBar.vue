<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
.nav-bar {
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0; */
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  /* z-index: 1; */
}
.left,
.right {
  display: flex;
  width: 60px;
}
.center {
  flex: 1;
}
</style>
