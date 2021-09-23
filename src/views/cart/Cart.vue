<template>
  <div id="cart">
    <nav-bar class="cart-nav-bar">
      <template #center>
        <div>购物车({{ cartListLength }})</div>
      </template>
    </nav-bar>
    <cart-list />
    <cart-bottom-bar />
  </div>
</template>

<script>
import CartList from "./childComps/CartList.vue";
import CartBottomBar from "./childComps/CartBottomBar.vue";

import NavBar from "components/common/navbar/NavBar.vue";

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    CartList,
    CartBottomBar,
    NavBar,
  },
  computed: {
    ...mapGetters(["cartListLength"]),
  },
};
</script>

<style scoped>
#cart {
  height: 100wh;
}

.cart-nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
