<template>
  <scroll :observeDOM="true" :observeImage="true" class="content" ref="scroll">
    <cart-list-item
      v-for="(item, index) in cartList"
      :key="index"
      :product="item"
    />
  </scroll>
</template>

<script>
import CartListItem from "./CartListItem.vue";

import Scroll from "components/common/scroll/Scroll.vue";

import { mapGetters } from "vuex";

export default {
  name: "CartList",
  components: { CartListItem, Scroll },
  computed: {
    ...mapGetters(["cartList"]),
  },
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>

<style scoped>
.content {
  height: calc(100vh - 44px - 40px - 49px);
  overflow: hidden;
}
</style>
