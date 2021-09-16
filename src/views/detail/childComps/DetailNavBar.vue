<template>
  <nav-bar class="nav-bar">
    <template #left>
      <div @click="goBack" class="back">
        <img src="~assets/img/common/leftarrow.svg" alt="" />
      </div>
    </template>
    <template #center>
      <div class="titles">
        <span
          v-for="(item, index) in titles"
          :key="index"
          :class="{ active: currentIndex === index }"
          @click="titleClick(index)"
        >
          {{ item }}
        </span>
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    titleClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.back {
  flex: 1;
  display: flex;
}
.back img {
  width: 30px;
  height: 30px;
  margin: auto;
}

.titles {
  display: flex;
  font-size: 13px;
}

.titles span {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}
</style>
