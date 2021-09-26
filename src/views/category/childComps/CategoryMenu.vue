<template>
  <scroll :observeDOM="true" class="content" v-if="categories">
    <div
      v-for="(item, index) in categories"
      :key="index"
      class="title"
      :class="{ active: index === currentIndex }"
      @click="titleClick(index)"
    >
      {{ item.title }}
    </div>
  </scroll>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "CategoryMenu",
  components: {
    Scroll,
  },
  props: {
    categories: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("selectItem", index);
    },
  },
};
</script>

<style scoped>
.content {
  height: 100%;
  width: 100px;
  background: #f6f6f6;
  text-align: center;
}

.title {
  line-height: 45px;
  font-size: 14px;
}

.active {
  background: #fff;
  border-left: 3px solid var(--color-tint);
  color: var(--color-high-text);
  font-weight: 700;
}
</style>
