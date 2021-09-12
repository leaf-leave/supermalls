<template>
  <div class="cart">
    <van-nav-bar title="购物车" left-arrow @click-left="onClickLeft" />
    <!-- 商品的列表 -->
    <cart-list />
    <!-- 底部汇总 -->
    <cart-bottom-bar class="cart-bottom-bar" />
  </div>
</template>

<script>
import CartList from './childComps/CartList.vue'
import CartBottomBar from './childComps/CartBottomBar.vue'
export default {
  name: 'Cart',
  components: {
    CartList,
    CartBottomBar
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.cart {
  height: 100vh;
}
/deep/.van-icon-arrow-left:before {
  font-size: 1.28rem;
  color: #fff;
}
.cart-bottom-bar {
  height: 44px;
  background-color: #eee;
  position: relative;
}
</style>
