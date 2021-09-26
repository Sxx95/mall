<template>
  <div class="wrapper">
    <nav-bar class="nav-bar">
      <template #center>商品分类</template>
    </nav-bar>
    <tab-control
      :titles="['综合', '新品', '销量']"
      @tabClick="tabClick"
      v-show="isTabFixed"
      ref="tabControl1"
      class="tab-control-copy"
    />
    <div class="middle-content">
      <category-menu :categories="categories" @selectItem="selectItem" />
      <scroll
        class="tab-content"
        ref="scroll"
        :probe-type="3"
        :observeDOM="true"
        :observeImage="true"
        @scroll="contentScroll"
      >
        <category-menu-detail
          :subCategories="showSubCategory"
          @imageLoad="imageLoad"
        />
        <tab-control
          :titles="['综合', '新品', '销量']"
          @tabClick="tabClick"
          ref="tabControl2"
        />
        <goods-list :goods="showContentDetail" />
      </scroll>
    </div>
    <back-top @click.native="backTop" v-show="isShowBackTop" />
  </div>
</template>

<script>
import CategoryMenu from "./childComps/CategoryMenu";
import CategoryMenuDetail from "./childComps/CategoryMenuDetail";

import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import {
  getCategory,
  getSubCategory,
  getContentDetail,
} from "network/category.js";

import { backTopMixin } from "common/mixin.js";
import { debouce } from "common/utils.js";

export default {
  name: "Category",
  components: {
    CategoryMenu,
    CategoryMenuDetail,
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      categories: [],
      categoryData: [],
      currentIndex: -1,
      currentType: "pop",
      tabOffsetTop: 0,
      getTabOffsetTop: null,
      isTabFixed: false,
    };
  },
  mixins: [backTopMixin],
  created() {
    this.getCategory();
    // this.getSubCategory(0);
    this.getTabOffsetTop = debouce(() => {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    }, 100);
  },
  computed: {
    showSubCategory() {
      if (this.currentIndex === -1) return [];
      return this.categoryData[this.currentIndex].subCategories;
    },
    showContentDetail() {
      if (this.currentIndex === -1) return [];
      return this.categoryData[this.currentIndex].categoryDetail[
        this.currentType
      ];
    },
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      // console.log(this.currentType);
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    selectItem(index) {
      this.getSubCategory(index);
    },
    contentScroll(position) {
      this.listenShowBackTop(position);
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    imageLoad() {
      this.getTabOffsetTop();
    },

    // 数据请求
    getCategory() {
      getCategory().then((res) => {
        // console.log(res);
        // 1.获取分类数据
        this.categories = res.data.category.list;
        // 2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subCategories: [],
            categoryDetail: {
              pop: [],
              new: [],
              sell: [],
            },
          };
        }
        //   主数据请求到之后才能接着请求后面的子数据
        this.getSubCategory(0);
      });
    },
    getSubCategory(index) {
      this.currentIndex = index;
      const maitKey = this.categories[index].maitKey;
      getSubCategory(maitKey).then((res) => {
        // console.log(res);
        this.categoryData[index].subCategories = res.data.list;
        this.categoryData = { ...this.categoryData };
        this.getContentDetail("pop");
        this.getContentDetail("new");
        this.getContentDetail("sell");
        // console.log(this.categoryData);
      });
    },
    getContentDetail(type) {
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      // console.log(miniWallkey);
      getContentDetail(miniWallkey, type).then((res) => {
        // console.log(res);
        this.categoryData[this.currentIndex].categoryDetail[type] = res;
        this.categoryData = { ...this.categoryData };
        // console.log(this.categoryData);
      });
    },
  },
};
</script>

<style scoped>
.wrapper {
  position: relative;
  height: 100vh;
}

.nav-bar {
  background: var(--color-tint);
  color: #fff;
}

.middle-content {
  position: absolute;
  display: flex;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}

.tab-content {
  flex: 1;
  height: 100%;
  overflow: hidden;
}

.tab-control-copy {
  position: relative;
  top: 0;
  left: 100px;
  right: 0;
  width: calc(100% - 100px);
  z-index: 9;
}
</style>
