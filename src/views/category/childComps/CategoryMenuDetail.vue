<template>
  <div v-if="subCategories" class="category-menu-detail">
    <a
      :href="item.link"
      v-for="(item, index) in subCategories"
      :key="index"
      class="menu-detail"
    >
      <img :src="item.image" alt="" class="image" @load="imageLoad" />
      <div class="text">{{ item.title }}</div>
    </a>
  </div>
</template>

<script>
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
  methods: {
    imageLoad() {
      this.$emit("imageLoad");
    },
  },
};
</script>

<style scoped>
.category-menu-detail {
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.menu-detail {
  width: 90px;
  margin: 8px 0;
  font-size: 12px;
}

.div a:last-of-type {
  margin-bottom: 20px;
}

.image {
  width: 80%;
}

.text {
  margin-top: 5px;
}
</style>
