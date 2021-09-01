<template>
  <div id="tabBar">
    <slot />
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style>
#tabBar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-flow: row nowrap;
  background-color: #f6f6f6;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.1);
  z-index: 1;
}
</style>
