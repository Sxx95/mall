<template>
  <div v-if="Object.keys(imagesInfo).length !== 0">
    <div class="images-desc clear-fix">
      <div class="start left"></div>
      <p>{{ imagesInfo.desc }}</p>
      <div class="end right"></div>
    </div>
    <div v-for="(item, index) in imagesInfo.detailImage" :key="index">
      <div class="info-key">{{ item.key }}</div>
      <div class="info-list">
        <img
          v-for="(item, index) in item.list"
          :key="index"
          :src="item"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailImagesInfo",
  props: {
    imagesInfo: {
      type: Object,
      default() {},
    },
  },
};
</script>

<style scoped>
.images-desc {
  position: relative;
  margin: 20px;
}

.start,
.end {
  height: 1px;
  width: 20%;
  background-color: #333;
}

.start::before,
.end::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
}

.start::before {
  left: 0;
  top: -5px;
}

.end::after {
  right: 0;
  bottom: 0;
}

.images-desc p {
  padding: 15px 0;
  font-size: 15px;
}

.info-key {
  margin: 10px 20px;
  font-weight: 550;
}

.info-list img {
  width: 100%;
}
</style>
