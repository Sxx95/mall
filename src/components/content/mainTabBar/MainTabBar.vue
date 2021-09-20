<template>
  <tab-bar>
    <tab-bar-item link="/home">
      <template #item_icon>
        <img src="~assets/img/tabbar/shouye.svg" />
      </template>
      <template #item_icon_active>
        <img src="~assets/img/tabbar/shouye-red.svg" />
      </template>
      <template #item_text>
        <span activeColor="blue">首页</span>
      </template>
    </tab-bar-item>
    <tab-bar-item link="/category" activeColor="blue">
      <template #item_icon>
        <img src="~assets/img/tabbar/fenlei.svg" />
      </template>
      <template #item_icon_active>
        <img src="~assets/img/tabbar/fenlei-red.svg" />
      </template>
      <template #item_text>
        <span>分类</span>
      </template>
    </tab-bar-item>
    <tab-bar-item link="/cart" activeColor="green">
      <template #item_icon>
        <img src="~assets/img/tabbar/gouwuche.svg" />
      </template>
      <template #item_icon_active>
        <img src="~assets/img/tabbar/gouwuche-red.svg" />
      </template>
      <template #item_text>
        <span>购物车</span>
      </template>
    </tab-bar-item>
    <tab-bar-item link="/profile" activeColor="pink">
      <template #item_icon>
        <img src="~assets/img/tabbar/wode.svg" />
      </template>
      <template #item_icon_active>
        <img src="~assets/img/tabbar/wode-red.svg" />
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
