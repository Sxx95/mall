<template>
  <div v-if="Object.keys(goods).length !== 0" id="detail-base-info">
    <h3>{{ goods.title }}</h3>
    <div class="goods-price">
      <span class="n-price">{{ goods.price }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span
        class="discount"
        :style="{ backgroundColor: goods.discountBgColor }"
        v-if="goods.discount"
        >{{ goods.discount }}
      </span>
    </div>
    <div class="other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="services">
      <span v-for="index in goods.services.length - 1" :key="index">
        <img
          :src="goods.services[index - 1].icon"
          alt=""
          v-if="goods.services[index - 1].icon"
        />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
#detail-base-info {
  margin: 10px 15px;
}

.goods-price {
  margin: 10px 0;
}

.n-price {
  font-size: 24px;
  color: var(--color-high-text);
}
.o-price {
  margin: 0 6px;
  font-size: 14px;
  color: #999;
  text-decoration-line: line-through;
}

.discount {
  position: relative;
  top: -8px;
  padding: 3px;
  border-radius: 5px;
  font-size: 13px;
  color: #fff;
}
.other {
  display: flex;
  padding: 15px 0;
  font-size: 13px;
  color: #999;
  justify-content: space-between;
}
.services {
  display: flex;
  padding: 20px 0;
  border-top: 1px solid rgba(100, 100, 100, 0.1);
  font-size: 14px;
  justify-content: space-between;
  flex-wrap: nowrap;
}

.services img {
  width: 14px;
}
</style>
