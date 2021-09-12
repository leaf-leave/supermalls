<template>
  <div class="bottom-bar">
    <div class="check-conter">
      <check-button class="check--bottom" :is-checked="isSelectAll" @click.native="checkClick" />
      <span>全选</span>
    </div>
    <div class="price">合计：{{ totalPrice }}</div>
    <div class="calculate">结账：{{ checkLength }}</div>
  </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/CheckButton.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'CartBottomBar',
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return (
        '￥' +
        this.cartList
          .filter(item => {
            return item.checked
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count
          }, 0)
          .toFixed(2)
      )
    },
    checkLength() {
      return this.cartList.filter(item => item.checked).length
    },
    isSelectAll() {
      if (this.cartList.length === 0) return false
      return !this.cartList.find(item => !item.checked)
      // for(let item of this.cartList)
    }
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        this.cartList.forEach(item => (item.checked = false))
      } else {
        this.cartList.forEach(item => (item.checked = true))
      }
    }
  }
}
</script>

<style lang="less" scoped>
.bottom-bar {
  display: flex;
  .check-conter {
    display: flex;
    text-align: center;
    // width: 60px;
    .check--bottom {
      margin: 0 5px;
      margin-top: 10px;
      width: 20px;
      height: 20px;
    }
    span {
      font-size: 16px;
      line-height: 44px;
    }
  }
  .price {
    flex: 1;
    font-size: 16px;
    line-height: 44px;
    padding-left: 15px;
  }
  .calculate {
    width: 110px;
    color: #fff;
    text-align: center;
    line-height: 44px;
    background-color: #f31136;
  }
}
</style>
