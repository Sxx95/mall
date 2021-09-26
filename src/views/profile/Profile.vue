<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <template #center>我的档案</template>
    </nav-bar>
    <profile-user-info />
    <profile-list-view></profile-list-view>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";

import ProfileUserInfo from "./childComps/ProfileUserInfo";
import ProfileListView from "./childComps/ProfileListView";

export default {
  name: "Profile",
  components: {
    NavBar,
    ProfileUserInfo,
    ProfileListView,
  },
};
</script>

<style scoped>
#profile {
  background-color: #aaaaaa25;
}

.nav-bar {
  background: var(--color-tint);
  color: #fff;
}
</style>
