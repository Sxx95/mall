<template>
  <div class="grid-view" ref="gridView">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GridView",
};
</script>

<style>
.grid-view {
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>
