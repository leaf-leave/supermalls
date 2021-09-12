<template>
  <div class="category-list">
    <div class="category-title">
      <div :class="{ active: count == index }" v-for="(item, index) in categoryList" :key="index" @click="indexChange(index, item)">{{ item.title }}</div>
    </div>
    <div class="category-conter">
      <div v-for="(item, index) in cateContentList" :key="index">
        <img :src="item.image" alt="" />
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getSubCategory } from '@/netwrok/category.js'

export default {
  name: 'CategoryList',
  props: {
    categoryList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      count: 0,
      maitKey: 3627,
      cateContentList: []
    }
  },
  created() {
    getSubCategory(this.maitKey).then(res => {
      console.log(res)
      this.cateContentList = res.data.list
    })
  },
  methods: {
    indexChange(index, item) {
      this.count = index
      this.maitKey = item.maitKey
      getSubCategory(this.maitKey).then(res => {
        this.cateContentList = res.data.list
      })
    }
  }
}
</script>

<style lang="less" scoped>
.category-list {
  margin-top: 46px;
  overflow: hidden;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  .category-title {
    background-color: #f7f7f7;
    text-align: center;
    float: left;
    overflow: auto;
    width: 30%;
    height: 100%;
    div {
      line-height: 2.5rem;
      font-size: 1rem;
    }
    div:hover {
      cursor: pointer;
    }
    .active {
      background-color: #ffffff;
      border-left: 3px solid #ff8a9d;
      color: #ff8a9d;
    }
  }
  .category-conter {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    float: left;
    overflow: auto;
    width: 70%;
    height: 100%;
    div {
      img {
        width: 90px;
      }
      p {
        margin: 8px 0;
        font-size: 1rem;
        text-align: center;
      }
    }
  }
}
</style>
