<template>
  <div class="cart-bottom-bar">
    <div class="left-check">
      <check-button
        class="check-button"
        :isChecked="isSelectAll"
        @click.native="checkClick"
      />
      <span>全选</span>
    </div>
    <div class="middle-price">合计：¥{{ totalPrice }}</div>
    <div class="right-count">去计算（{{ totalCount }}）</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue";

import { mapGetters } from "vuex";

export default {
  name: "CartBottomBar",
  components: { CheckButton },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return this.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.count * item.price;
        }, 0)
        .toFixed(2);
    },
    totalCount() {
      return this.cartList.filter((item) => {
        return item.checked;
      }).length;
    },
    isSelectAll() {
      if (!this.cartList.length) return false;
      return !this.cartList.find((item) => !item.checked);
    },
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        this.cartList.forEach((item) => {
          return (item.checked = false);
        });
      } else {
        this.cartList.forEach((item) => {
          return (item.checked = true);
        });
      }
    },
  },
};
</script>

<style scoped>
.cart-bottom-bar {
  display: flex;
  height: 40px;
  background-color: #aaaaaa41;
  text-align: center;
  font-size: 15px;
  flex-wrap: nowrap;
  align-items: center;
}

.left-check {
  display: flex;
  width: 70px;
  align-items: center;
  flex-wrap: nowrap;
}

.check-button {
  margin-left: 8px;
  margin-right: 3px;
}

.middle-price {
  flex: 1;
}

.right-count {
  height: 100%;
  width: 100px;
  background-color: orangered;
  line-height: 40px;
  color: #fff;
}
</style>
