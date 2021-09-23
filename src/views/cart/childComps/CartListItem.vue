<template>
  <div class="cart-list-item">
    <div>
      <check-button :isChecked="product.checked" @click.native="cartChecked" />
    </div>
    <div class="cart-img">
      <img :src="product.img" alt="" />
    </div>
    <div class="cart-info">
      <h3>{{ product.title }}</h3>
      <p>{{ product.desc }}</p>
      <div class="cart-item-price">
        <span>¥{{ product.price }}</span>
        <span>x{{ product.count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue";

export default {
  name: "CartListItem",
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: { CheckButton },
  methods: {
    cartChecked() {
      this.product.checked = !this.product.checked;
    },
  },
};
</script>

<style scoped>
.cart-list-item {
  display: flex;
  width: 100vw;
  height: 150px;
  padding: 15px 10px;
  border-bottom: 2px solid rgba(100, 100, 100, 0.2);
  flex-wrap: nowrap;
  align-items: center;
}

/* .cart-list-item > div {
  margin: auto;
} */

.cart-img {
  width: 90px;
  height: 120px;
  margin-left: 4px;
  margin-right: 10px;
  border-radius: 10px;
  overflow: hidden;
}

.cart-img img {
  width: 100%;
  height: 100%;
}

.cart-info {
  display: flex;
  height: 120px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.cart-info h3,
.cart-info p {
  max-width: 225px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.cart-info p {
  font-size: 14px;
}

.cart-item-price {
  display: flex;
  width: 100%;
  font-size: 18px;
  justify-content: space-between;
}

.cart-item-price span:nth-child(1) {
  color: #ffa600;
}
</style>
