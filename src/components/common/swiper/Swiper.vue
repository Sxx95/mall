<template>
  <div
    id="xx-swiper"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd"
  >
    <div class="swiper">
      <slot />
    </div>
    <slot name="indicator-left" @click="previous" />
    <slot name="indicator-right" @click="next" />
    <div class="indicator" v-if="showIndicator && slideCount > 1">
      <slot name="idicator">
        <div
          class="indi-item"
          v-for="(item, index) in slideCount"
          :class="{ active: index === currentIndex - 1 }"
          :key="index"
        ></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    intervel: {
      type: Number,
      default: 3000,
    },
    animDuration: {
      type: Number,
      default: 300,
    },
    moveRatio: {
      type: Number,
      default: 0.25,
    },
    showIndicator: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      // 轮播图个数
      slideCount: 0,
      // 当前数
      currentIndex: 1,
      // 轮播图宽度
      totalWidth: 0,
      // 轮播图样式
      swiperStyle: {},
      // 是否滚动
      scrolling: false,
    };
  },
  mounted() {
    setTimeout(() => {
      // 添加slide前后元素
      this.handleDom();
      // 开启定时器
      this.startTimer();
    }, 100);
  },
  methods: {
    startTimer() {
      this.playTimer = window.setInterval(() => {
        this.currentIndex++;
        this.scrollContent(-this.currentIndex * this.totalWidth);
      }, this.intervel);
    },
    stopTimer() {
      window.clearInterval(this.playTimer);
    },
    // 滚动
    scrollContent(currentPosition) {
      this.scrolling = true;
      this.swiperStyle.transition = "transform" + this.animDuration + "ms";
      this.setTransform(currentPosition);
      this.checkPosition();
      this.scrolling = false;
    },
    // 检测位置
    checkPosition() {
      window.setTimeout(() => {
        this.swiperStyle.transition = "0ms";
        if (this.currentIndex >= this.slideCount + 1) {
          this.currentIndex = 1;
          this.setTransform(-this.currentIndex * this.totalWidth);
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.slideCount;
          this.setTransform(-this.currentIndex * this.totalWidth);
        }
        this.$emit("transitionEnd", this.currentIndex - 1);
      }, this.animDuration);
    },
    // 到达位置
    setTransform(position) {
      this.swiperStyle.transform = `translate3d(${position}px,0,0)`;
      this.swiperStyle["-webkit-transform"] = `translate3d(${position}px,0,0)`;
      this.swiperStyle["-ms-transform"] = `translate3d(${position}px,0,0)`;
    },
    handleDom() {
      let swiperEl = document.querySelector(".swiper");
      let slideEls = document.querySelectorAll(".slide");
      this.slideCount = slideEls.length;
      if (this.slideCount > 1) {
        let firstSlide = slideEls[this.slideCount - 1].cloneNode(true);
        let lastSlide = slideEls[0].cloneNode(true);
        swiperEl.insertBefore(firstSlide, slideEls[0]);
        swiperEl.appendChild(lastSlide);
        this.totalWidth = swiperEl.offsetWidth;
        this.swiperStyle = swiperEl.style;
      }
      // 让swiper显示第一个元素，当前显示的是第一个图
      this.setTransform(-this.totalWidth);
    },
    touchStart(e) {
      // 如果正在滚动，不可拖动
      if (this.scrolling) return;
      // 停止定时器
      this.stopTimer();
      this.startX = e.touches[0].pageX;
    },
    touchMove(e) {
      this.currentX = e.touches[0].pageX;
      this.distance = this.currentX - this.startX;
      let currentPosition = -this.currentIndex * this.totalWidth;
      let moveDistance = this.distance + currentPosition;
      this.setTransform(moveDistance);
    },
    touchEnd() {
      let currentMove = Math.abs(this.distance);
      if (this.distance === 0) {
        return;
      } else if (
        this.distance > 0 &&
        currentMove > this.moveRatio * this.totalWidth
      ) {
        this.currentIndex--;
      } else if (
        this.distance < 0 &&
        currentMove > this.moveRatio * this.totalWidth
      ) {
        this.currentIndex++;
      }
      this.scrollContent(-this.currentIndex * this.totalWidth);
      // 移动完成后重开定时器
      this.startTimer();
    },
    previous() {
      this.changeItem(-1);
    },
    next() {
      this.changeItem(1);
    },
    changeItem(num) {
      // 移除定时器
      this.stopTimer();
      this.currentIndex += num;
      this.scrollContent(-this.currentIndex * this.totalWidth);
      // 重新开启定时器
      this.startTimer();
    },
  },
};
</script>

<style>
#xx-swiper {
  position: relative;
  overflow: hidden;
}

.swiper {
  display: flex;
}

.indicator-left,
.indicator-right {
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);
  -webkit-transform: translateY(50%);
  -ms-transform: translateY(50%);
}

.indicator-left {
  left: 8px;
}

.indicator-right {
  right: 8px;
}

.indicator {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 8px;
}

.indi-item {
  box-sizing: border-box;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  margin: 0 5px;
  font-size: 12px;
  line-height: 8px;
  text-align: center;
  background-color: #fff;
}

.indicator .active {
  background-color: #d81e06;
}
</style>
