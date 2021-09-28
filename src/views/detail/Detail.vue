<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" ref="detailNav" />
    <scroll
      class="content"
      :observeDOM="true"
      :observeImage="true"
      :probeType="3"
      ref="scroll"
      @scroll="contentScroll"
    >
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shopInfo="shopInfo" />
      <detail-images-info
        :imagesInfo="imagesInfo"
        @detailImageLoad="detailImageLoad"
      />
      <detail-params-info :paramsInfo="paramsInfo" ref="params" />
      <detail-comment-info :commentInfo="commentInfo" ref="comment" />
      <goods-list :goods="recommendInfo" ref="recommend" />
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop" />
    <detail-bottom-bar @addCart="addCart" />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailImagesInfo from "./childComps/DetailImagesInfo.vue";
import DetailParamsInfo from "./childComps/DetailParamsInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList.vue";

import { getDetail, getRecommend, Goods } from "network/detail.js";

import { debouce } from "common/utils.js";
import { backTopMixin } from "common/mixin.js";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImagesInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shopInfo: {},
      imagesInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommendInfo: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndexY: 0,
    };
  },
  mixins: [backTopMixin],
  created() {
    this.iid = this.$route.params.iid;
    this.getDetail(this.iid);
    this.getRecommend();
    this.getThemeTopY = debouce(() => {
      this.$refs.scroll.refresh();
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE);
      // console.log(this.themeTopYs);
    }, 100);
  },
  // mounted() {
  //   this.titleClick(0);
  // },
  methods: {
    detailImageLoad() {
      this.getThemeTopY();
    },

    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
    },
    contentScroll(position) {
      // this.isShowBackTop = -position.y > 0;
      const positionY = -position.y;
      for (let i = 0; i < this.themeTopYs.length - 1; i++) {
        if (
          this.currentIndexY !== i &&
          this.themeTopYs[i] <= positionY &&
          positionY < this.themeTopYs[i + 1]
        ) {
          this.currentIndexY = i;
          this.$refs.detailNav.currentIndex = this.currentIndexY;
        }
      }
      this.listenShowBackTop(position);
    },
    addCart() {
      const product = {};
      product.iid = this.iid;
      product.img = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.imagesInfo.desc;
      product.price = this.goods.lowNowPrice;
      this.$store.dispatch("addCart", product).then((res) => {
        this.$toast.show(res);
        // console.log(this.$toast);
        // console.log(res);
      });
    },
    // 请求数据
    getDetail(id) {
      getDetail(id).then((res) => {
        // console.log(res);
        const data = res.result;
        this.topImages = data.itemInfo.topImages;
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        this.shopInfo = data.shopInfo;
        this.imagesInfo = data.detailInfo;
        this.paramsInfo = data.itemParams;
        if (data.rate.cRate != 0) {
          this.commentInfo = data.rate.list[0];
        }
      });
    },
    getRecommend() {
      getRecommend().then((res) => {
        // console.log(res);
        this.recommendInfo = res.data.list;
      });
    },
  },
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
