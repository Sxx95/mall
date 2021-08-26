<template>
  <tab-bar>
    <tab-bar-item link="/home">
      <template #item_icon>
        <img src="~assets/icons/svg/shouye.svg" />
      </template>
      <template #item_icon_active>
        <img src="~assets/icons/svg/shouye-red.svg" />
      </template>
      <template #item_text>
        <span activeColor="blue">首页</span>
      </template>
    </tab-bar-item>
    <tab-bar-item link="/category" activeColor="blue">
      <template #item_icon>
        <img src="~assets/icons/svg/fenlei.svg" />
      </template>
      <template #item_icon_active>
        <img src="~assets/icons/svg/fenlei-red.svg" />
      </template>
      <template #item_text>
        <span>分类</span>
      </template>
    </tab-bar-item>
    <tab-bar-item link="/cart" activeColor="green">
      <template #item_icon>
        <img src="~assets/icons/svg/gouwuche.svg" />
      </template>
      <template #item_icon_active>
        <img src="~assets/icons/svg/gouwuche-red.svg" />
      </template>
      <template #item_text>
        <span>购物车</span>
      </template>
    </tab-bar-item>
    <tab-bar-item link="/profile" activeColor="pink">
      <template #item_icon>
        <img src="~assets/icons/svg/wode.svg" />
      </template>
      <template #item_icon_active>
        <img src="~assets/icons/svg/wode-red.svg" />
      </template>
      <template #item_text>
        <span>我的</span>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>
<style></style>
