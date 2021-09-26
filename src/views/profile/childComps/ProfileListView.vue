<template>
  <div class="list-view">
    <div class="user-own">
      <div>
        <div><span>0.00</span>元</div>
        <div class="text">我的余额</div>
      </div>
      <div>
        <div><span>0</span>个</div>
        <div class="text">我的优惠</div>
      </div>
      <div>
        <div><span>0</span>分</div>
        <div class="text">我的积分</div>
      </div>
    </div>
    <div>
      <ul class="list">
        <li>
          <img src="~assets/img/profile/message.svg" alt="" />
          <span>我的消息</span>
        </li>
        <li>
          <img src="~assets/img/profile/pointer.svg" alt="" />
          <span>积分商城</span>
        </li>
        <li class="vip">
          <img src="~assets/img/profile/vip.svg" alt="" /> <span>会员卡</span>
        </li>
        <li>
          <img src="~assets/img/profile/cart.svg" alt="" />
          <span>我的购物车</span>
        </li>
        <li>
          <img src="~assets/img/profile/download.svg" alt="" />
          <span>下载购物APP</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileListView",
};
</script>

<style>
.user-own {
  display: flex;
  height: 83px;
  background-color: #fff;
  text-align: center;
}

.user-own > div {
  flex: 1;
  display: flex;
  border-right: 2px solid rgba(0, 0, 0, 0.05);
  flex-direction: column;
  justify-content: center;
}

.user-own div:nth-child(3) {
  border-right-width: 0;
}

.user-own span {
  color: #ff5f3e;
  font-size: 24px;
  font-weight: bolder;
}

.user-own .text {
  margin-top: 3px;
  font-size: 12px;
}

.list {
  margin-top: 15px;
  background-color: #fff;
  list-style: none;
}

.list li {
  display: flex;
  margin-left: 15px;
  align-items: center;
}

.list img {
  width: 18px;
  margin-right: 10px;
}

.list span {
  flex: 1;
  height: 44px;
  border-bottom: 1px solid #e7e7e7;
  line-height: 44px;
}

.list li:last-of-type span {
  border-bottom-width: 0;
}
</style>
