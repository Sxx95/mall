<template>
  <div id="detail">
    <detail-nav-bar />
    <scroll class="content" :observeDOM="true" :observeImage="true">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shopInfo="shopInfo" />
      <detail-images-info :imagesInfo="imagesInfo" />
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailImagesInfo from "./childComps/DetailImagesInfo.vue";

import Scroll from "components/common/scroll/Scroll";

import { getDetail, Goods } from "network/detail.js";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImagesInfo,
    Scroll,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shopInfo: {},
      imagesInfo: {},
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shopInfo = data.shopInfo;
      this.imagesInfo = data.detailInfo;
    });
  },
  methods: {},
};
</script>

<style scoped>
#detail {
  position: relative;
  height: 100vh;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  overflow: hidden;
  z-index: 2;
}
</style>
