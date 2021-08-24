<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        <div>购物街</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultiData } from "network/home.js";
export default {
  name: "Home",
  components: {
    NavBar,
  },
  data() {
    return {
      result: null,
      banner: [],
      recommend: [],
    };
  },
  created() {
    getHomeMultiData().then((res) => {
      this.result = res;
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });
  },
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
