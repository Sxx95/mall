<template>
  <div v-if="Object.keys(shopInfo).length !== 0" class="shop-info">
    <div class="shop-top">
      <img :src="shopInfo.shopLogo" alt="" />
      <span>{{ shopInfo.name }}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-sell">
        <div>
          <div class="sell-info">{{ shopInfo.cSells | sellCount }}</div>
          <div class="sell-title">总销量</div>
        </div>
        <div>
          <div class="sell-info">{{ shopInfo.cGoods }}</div>
          <div class="sell-title">全部宝贝</div>
        </div>
      </div>
      <div class="shop-desc">
        <table>
          <tr v-for="(item, index) in shopInfo.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="scoreLColor" :class="{ scoreHColor: item.isBetter }">
              {{ item.score }}
            </td>
            <td class="scorebgLColor" :class="{ scorebgHColor: item.isBetter }">
              <span>{{ item.isBetter ? "高" : "低" }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">进店逛逛</div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    sellCount(value) {
      if (value > 10000) {
        value = (value / 10000).toFixed(1) + "万";
      }
      return value;
    },
  },
};
</script>

<style scoped>
.shop-info {
  padding: 10px 15px;
  border-top: 4px solid rgba(100, 100, 100, 0.1);
  border-bottom: 4px solid rgba(100, 100, 100, 0.1);
}

.shop-top {
  height: 60px;
  vertical-align: center;
}

.shop-top img {
  height: 85%;
}

.shop-top span {
  position: relative;
  top: -18px;
  left: 6px;
  font-size: 17px;
}

.shop-middle {
  display: flex;
  font-weight: 549;
}

.shop-sell {
  flex: 1;
  display: flex;
  margin: auto;
  border-right: 2px solid rgba(100, 100, 100, 0.1);
  text-align: center;
  justify-content: space-around;
}

.shop-desc {
  flex: 1;
  font-size: 13px;
}

.sell-info {
  font-size: 16px;
}

.sell-title {
  padding-top: 5px;
  font-size: 13px;
}

table {
  margin: auto;
}

table td {
  padding: 5px;
}

.scoreLColor {
  color: green;
}

.scoreHColor {
  color: var(--color-high-text);
}

.scorebgLColor span {
  background-color: green;
  color: #fff;
}

.scorebgHColor span {
  background-color: var(--color-high-text);
  color: #fff;
}

.shop-bottom {
  height: 30px;
  width: 40%;
  margin: 10px auto;
  background-color: rgba(100, 100, 100, 0.1);
  border-radius: 10px;
  text-align: center;
  font-size: 14px;
  line-height: 30px;
}
</style>
