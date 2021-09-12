<template>
  <div class="bottom-bar">
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="收藏" dot />
      <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-button text="加入购物车" type="warning" @click="addToCart" />
      <van-goods-action-button text="立即购买" type="danger" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    addToCart() {
      this.$emit('addCart')
    }
  }
}
</script>

<style lang="less" scoped></style>
