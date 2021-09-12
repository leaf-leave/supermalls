<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment_info">
    <div class="header">
      <div class="info-header">用户评价</div>
      <div class="header-more">更多</div>
    </div>
    <div class="user">
      <img :src="commentInfo.user.avatar" alt="" />
      <div class="name">{{ commentInfo.user.uname }}</div>
    </div>
    <div class="comment">
      <p>{{ commentInfo.content }}</p>
      <div class="data">{{ commentInfo.created | showDate }}</div>
      <span>{{ commentInfo.style }}</span>
    </div>
    <div class="img">
      <img :src="item" v-for="(item, index) in commentInfo.images" :key="index" alt="" />
    </div>
  </div>
</template>

<script>
import { dateFormat } from '@/common/utils.js'

export default {
  name: 'DetailCommentInfo',
  props: {
    commentInfo: {
      typr: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    showDate(value) {
      const date = new Date(value * 1000)
      return dateFormat('yyyy-MM-dd hh:mm', date)
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  border-top: 5px solid #ececec;
  font-size: 0.48rem;
  line-height: 1;
  height: 36px;
  padding: 0 1rem;
  .info-header {
    float: left;
  }
  .header-more {
    float: right;
  }
}
.comment_info {
  margin-top: 0.4rem;
  border-top: 0.06rem solid #ececec;
  padding: 0 0.3rem;
  .user {
    display: flex;
    align-items: center;
    border-top: 0.2rem solid #ececec;
    margin: 0.5rem;
    img {
      width: 2rem;
      height: 2rem;
      border: 1px solid #f5f4f7;
      border-radius: 100%;
      margin: 0.5rem 0.5rem 0 0;
    }
    .name {
      font-size: 0.64rem;
      font-weight: bold;
      padding-top: 0.5rem;
    }
  }
  .comment {
    font-size: 0.8rem;
    p {
      margin-top: 1rem;
      line-height: 2;
      padding: 0 0.8rem;
    }
    .data {
      display: inline-block;
      margin-right: 0.8rem;
      padding-left: 0.8rem;
    }
  }
  .img {
    padding: 0.3rem 0 0.3rem 0.8rem;
    img {
      width: 5rem;
      height: 5rem;
      padding-right: 0.5rem;
    }
  }
}
</style>
