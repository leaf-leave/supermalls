<template>
  <div id="shop-item">
    <div class="item-selector" @click="checkClick">
      <Check-button :is-checked="itemInfo.checked"></Check-button>
    </div>
    <div class="item-img">
      <img :src="itemInfo.image" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ itemInfo.title }}</div>
      <div class="item-desc">{{ itemInfo.desc }}</div>
    </div>
    <div class="info-bottom">
      <div class="item-price left">￥{{ itemInfo.price }}</div>
      <div class="item-count right">×{{ itemInfo.count }}</div>
    </div>
  </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/CheckButton.vue'
export default {
  name: 'CartListItem',
  components: {
    CheckButton
  },
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    checkClick() {
      this.itemInfo.checked = !this.itemInfo.checked
    }
  }
}
</script>

<style lang="less" scoped>
#shop-item {
  position: relative;
  width: 100%;
  display: flex;
  padding: 5px;
  border-bottom: 1px solid #eee;
  .item-selector {
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-img {
    padding: 5px;
    img {
      width: 80px;
      height: 100px;
      display: block;
      border-radius: 5px;
    }
  }
  .item-info {
    width: 100vh;
    color: #333;
    height: 46px;
    padding: 5px 8px;
    position: relative;
    overflow: hidden;
    .item-title,
    .item-desc {
      font-size: 15px;
      line-height: 15px;
      overflow: hidden;
      padding: 5px 0;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .info-bottom {
    font-size: 16px;

    .item-price {
      color: orangered;
      position: absolute;
      bottom: 10px;
      left: 120px;
      right: 10px;
    }
    .item-count {
      position: absolute;
      bottom: 10px;
      // left: 120px;
      right: 30px;
    }
  }
}
</style>
