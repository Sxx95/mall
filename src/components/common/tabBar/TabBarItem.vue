<template>
  <div class="item" @click="itemClick">
    <template v-if="!isActive">
      <slot name="item_icon"></slot>
    </template>
    <template v-else>
      <slot name="item_icon_active"></slot>
    </template>
    <div :style="activeStyle">
      <slot name="item_text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    link: {
      type: String,
      default: "/home",
    },
    activeColor: {
      type: String,
      // default: "red",
      default: "#d81e06",
    },
  },
  data() {
    return {
      // isActive: false,
    };
  },
  methods: {
    itemClick() {
      return this.$router.replace(this.link);
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) != -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
};
</script>

<style>
.item {
  flex: 1;
  height: 49px;
  text-align: center;
}
.item img {
  width: 25px;
  height: 25px;
  margin-top: 1px;
}
.item span {
  display: block;
}
</style>
