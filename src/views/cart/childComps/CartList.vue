<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item, index) in cartList" :key="index" :item-info="item" />
    </scroll>
  </div>
</template>

<script>
import CartListItem from './CartListItem.vue'
import Scroll from '@/components/common/srcoll/Scroll.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'CartList',
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style lang="less" scoped>
.cart-list {
  height: calc(100% - 139px);
  .content {
    height: 100%;
    overflow: hidden;
  }
}
</style>
