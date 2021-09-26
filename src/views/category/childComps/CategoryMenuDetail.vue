<template>
  <grid-view v-if="subCategories" class="grid">
    <a
      :href="item.link"
      v-for="(item, index) in subCategories"
      :key="index"
      class="menu-detail"
    >
      <img :src="item.image" alt="" class="image" @load="imageLoad" />
      <div class="text">{{ item.title }}</div>
    </a>
  </grid-view>
</template>

<script>
import GridView from "components/common/gridview/GridView";

export default {
  name: "CategoryMenuDetail",
  props: {
    subCategories: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GridView,
  },
  methods: {
    imageLoad() {
      this.$emit("imageLoad");
    },
  },
};
</script>

<style scoped>
.menu-detail {
  width: 90px;
  margin: 8px 0;
  font-size: 12px;
}

.grid a:last-of-type {
  margin-bottom: 20px;
}

.image {
  width: 80%;
}

.text {
  margin-top: 5px;
}
</style>
