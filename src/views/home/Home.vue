<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <home-swiper :banners="banners" />
    <home-recommend-view :recommends="recommends" />
    <home-feature-view />
    <tab-control :titles="titles" class="home-tab-control" />
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper.vue";
import HomeRecommendView from "./childComps/HomeRecommendView.vue";
import HomeFeatureView from "./childComps/HomeFeatureView.vue";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl.vue";

import { getHomeMultiData } from "network/home.js";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
    NavBar,
    TabControl,
  },
  data() {
    return {
      result: null,
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
    };
  },
  created() {
    getHomeMultiData().then((res) => {
      this.result = res;
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style>
#home {
  margin-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.home-tab-control {
  position: sticky;
  top: 44px;
}
</style>
