<template>
  <div class="Category">
    <van-nav-bar title="商品分类" placeholder>
      <template #right>
        <van-icon size="18" />
      </template>
    </van-nav-bar>
    <category-list :category-list="categoryList" />
  </div>
</template>

<script>
import { getCategory } from '@/netwrok/category.js'
import CategoryList from './childComps/CategoryList.vue'
export default {
  name: 'Category',
  components: {
    CategoryList
  },
  data() {
    return {
      categoryList: []
    }
  },
  created() {
    getCategory().then(res => {
      const { list } = res.data.category
      this.categoryList = list
    })
  }
}
</script>

<style></style>
