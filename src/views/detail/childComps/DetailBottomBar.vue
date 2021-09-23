<template>
  <div class="detail-bottom-bar">
    <div class="bottom-bar-left">
      <img src="~assets/img/detail/service.svg" alt="" />
      <span>客服</span>
    </div>
    <div class="bottom-bar-left">
      <img src="~assets/img/detail/shop.svg" alt="" />
      <span>店铺</span>
    </div>
    <div class="bottom-bar-left" @click="collectClick">
      <img src="~assets/img/detail/collect.svg" alt="" v-if="!isActive" />
      <img src="~assets/img/detail/collect_active.svg" alt="" v-else />
      <span>收藏</span>
    </div>
    <div class="bottom-bar-right">
      <div @click="addCart">加入购物车</div>
      <div>购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  data() {
    return { isActive: false };
  },
  methods: {
    collectClick() {
      this.isActive = !this.isActive;
    },
    addCart() {
      this.$emit("addCart");
    },
  },
};
</script>

<style scoped>
.detail-bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  width: 100vw;
  display: flex;
  background-color: #fff;
  text-align: center;
  box-shadow: 0 -1px 15px rgba(0, 0, 0, 0.1);
  z-index: 3;
  justify-content: space-around;
  flex-wrap: nowrap;
}

.bottom-bar-left {
  flex: 1;
}

.bottom-bar-left img {
  width: 25px;
  height: 25px;
  margin-top: 1px;
}

.bottom-bar-left span {
  display: block;
}

.bottom-bar-right {
  display: flex;
  width: 50%;
  line-height: 49px;
  flex-wrap: nowrap;
}

.bottom-bar-right div {
  flex: 1;
}

.bottom-bar-right div:nth-child(1) {
  background-color: gold;
}

.bottom-bar-right div:nth-child(2) {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
