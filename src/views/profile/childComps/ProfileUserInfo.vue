<template>
  <div class="user">
    <div class="user-info">
      <div class="user-img">
        <img src="~assets/img/profile/avatar.svg" alt="" />
      </div>
      <div class="load-info">
        <div class="load">登录/注册</div>
        <div class="phone">
          <img src="~assets/img/profile/phone.svg" alt="" />
          <span class="text">暂无绑定手机号</span>
        </div>
      </div>
    </div>
    <div class="more">
      <img src="~assets/img/profile/arrow-right.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileUserInfo",
};
</script>

<style>
.user {
  display: flex;
  height: 90px;
  padding: 0 20px;
  background: var(--color-tint);
  color: #fff;
  justify-content: space-evenly;
  align-items: center;
}

.user-info {
  display: flex;
  width: 350px;
  align-items: center;
}

.user-img {
  height: 100%;
  background-color: #fff;
  border-radius: 50%;
}

.user-img img {
  width: 60px;
}

.load-info {
  margin-left: 20px;
}

.phone {
  display: flex;
  margin-top: 10px;
  align-items: center;
}

.phone img {
  width: 20px;
}

.more img {
  width: 20px;
}
</style>
