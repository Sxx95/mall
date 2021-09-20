<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
    <div class="comment-top clear-fix">
      <span>用户评价</span>
      <span class="comment-more right">更多</span>
    </div>
    <div>
      <div class="comment-title clear-fix">
        <div class="comment-user-img left">
          <img :src="commentInfo.user.avatar" alt="" />
        </div>
        <span>{{ commentInfo.user.uname }}</span>
      </div>
      <p class="comment-content">{{ commentInfo.content }}</p>
      <div class="other-info">
        <span>{{ commentInfo.created | showDate }}</span>
        <span>{{ commentInfo.style }}</span>
      </div>
      <div v-if="commentInfo.images" class="comment-img">
        <img
          :src="item"
          alt=""
          v-for="(item, index) in commentInfo.images"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils.js";

export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    showDate(value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy/MM/dd hh:mm");
    },
  },
};
</script>

<style scoped>
.comment-info {
  padding: 25px 15px;
  margin-bottom: 15px;
  border-bottom: 4px solid rgba(100, 100, 100, 0.1);
}

.comment-top {
  padding-bottom: 20px;
  border-bottom: 2px solid rgba(100, 100, 100, 0.1);
  font-weight: 549;
}

.comment-more {
  font-size: 14px;
}

.comment-title {
  margin: 15px 0;
  /* background-color: pink; */
}

.comment-user-img {
  width: 50px;
  border-radius: 50%;
  overflow: hidden;
}
.comment-user-img img {
  width: 100%;
}

.comment-title span {
  position: relative;
  top: 17px;
  left: 5px;
}

.comment-content {
  font-size: 15px;
  line-height: 150%;
}

.other-info {
  margin: 10px 0;
  font-size: 13px;
  color: #2222336b;
}

.other-info span:first-child {
  margin-right: 10px;
}

.comment-img {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.comment-img img {
  width: 111px;
  height: 111px;
  margin-right: 6px;
  margin-bottom: 6px;
}

.comment-img img:nth-child(3n) {
  margin-right: 0;
}
</style>
