<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="showImg" alt="" @load="imageLoad" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    showImg() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit('itemImageLoad')
      // console.log('imageLoad')
      //   if (this.$route.path.indexOf('/home')) {
      //     this.$bus.$emit('itemImageLoad')
      //   } else if (this.$route.path.indexOf('/detail')) {
      //     this.$bus.$emit('itemImageLoad')
      //   }
    },
    itemClick() {
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  }
}
</script>

<style lang="less" scoped>
p {
  padding: 0;
  margin: 0;
}
.goods-item {
  position: relative;
  width: 48%;
  font-size: 14px;
  text-align: center;
}
.goods-item img {
  width: 100%;
}
.goods-item p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.price {
  color: red;
  padding-right: 5%;
}
</style>
