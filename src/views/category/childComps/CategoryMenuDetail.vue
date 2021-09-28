<template>
  <div v-if="subCategories" class="menu-detail">
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
.menu-detail {
  display: flex;
  width: 90px;
  margin: 8px 0;
  font-size: 12px;
  text-align: center;
  flex-wrap: wrap;
  justify-content: flex-start;
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
