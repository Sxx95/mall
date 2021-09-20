<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
    observeDOM: {
      type: Boolean,
      default: false,
    },
    observeImage: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  computed: {
    scrollY() {
      return this.scroll.y;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initScroll();
    });
  },
  methods: {
    initScroll() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        observeDOM: this.observeDOM,
        observeImage: this.observeImage,
        // useTransition: false,
      });
      // 监听滚动事件
      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on("scroll", (position) => {
          this.$emit("scroll", position);
        });
      }
      if (this.pullUpLoad) {
        // 监听上拉加载事件
        this.scroll.on("pullingUp", () => {
          this.$emit("pullingUp");
        });
      }
    },
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
  },
};
</script>
