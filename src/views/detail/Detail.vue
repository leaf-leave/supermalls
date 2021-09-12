<template>
  <div class="detail">
    <van-nav-bar class="detail_nav" title="标题" left-arrow @click-left="backClick" fixed>
      <div slot="title" class="title">
        <span :class="{ active: contIndex === index }" v-for="(item, index) in title" :key="index" @click="titleClick(index)">{{ item }}</span>
      </div>
    </van-nav-bar>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @detailImageLoad="detailImageLoad" />
      <detail-params-info :params-info="paramsInfo" ref="params" />
      <detail-comment-info :comment-info="commentInfo" ref="comment" />
      <goods-list :goods="recommends" ref="recommend" />
    </scroll>
    <detail-bottom-bar class="bottom-bar" @addCart="addToCart" />
    <back-top @click.native="backTop" v-show="isShowBackTop" />
  </div>
</template>

<script>
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParamsInfo from './childComps/DetailParamsInfo.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
import GoodsList from '@/components/content/goods/GoodsList.vue'
import DetailBottomBar from './childComps/DetailBottomBar.vue'

import Scroll from '@/components/common/srcoll/Scroll.vue'

import { getDetail, Goods, Shop, GoodsParam, getRecommend } from '@/netwrok/detail.js'
import { debounce } from '@/common/utils.js'
import { itemListenerMixin, backTopMixin } from '@/common/mixin.js'

export default {
  name: 'Detail',
  components: {
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar
  },
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      iid: null,
      title: ['商品', '参数', '评论', '推荐'],
      contIndex: 0,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0
    }
  },
  created() {
    this.iid = this.$route.params.iid
    getDetail(this.iid).then(res => {
      const deta = res.result
      // 获取顶部轮播图
      this.topImages = deta.itemInfo.topImages
      // 获取商品信息
      this.goods = new Goods(deta.itemInfo, deta.columns, deta.shopInfo.services)
      // 创建店铺信息的对象
      this.shop = new Shop(deta.shopInfo)
      // 保存商品的详情数据
      this.detailInfo = deta.detailInfo
      // 获取参数信息
      this.paramsInfo = new GoodsParam(deta.itemParams.info, deta.itemParams.rule)
      // 取出评论的信息
      if (deta.rate.cRate !== 0) {
        this.commentInfo = deta.rate.list[0]
      }
    })
    // q7请求推荐数据
    getRecommend().then(res => {
      this.recommends = res.data.list
    })
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      this.themeTopYs.push(Number.MAX_VALUE)
    }, 100)
  },
  methods: {
    detailImageLoad() {
      this.newRefresh()
      this.getThemeTopY()
    },
    titleClick(index) {
      this.contIndex = index
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500)
    },
    backClick() {
      this.$router.back()
    },
    contentScroll(position) {
      const positionY = -position.y
      const length = this.themeTopYs.length
      for (let i = 0; i < length - 1; i++) {
        if (this.currentIndex !== i && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) {
          this.currentIndex = i
          this.contIndex = this.currentIndex
        }
        // console.log(i++)
        // if (this.currentIndex !== i && ((i < length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) || (i === length - 1 && positionY >= this.themeTopYs[i]))) {
        //   this.currentIndex = i
        //   console.log(this.currentIndex)
        //   this.contIndex = this.currentIndex
        // }
      }
      // 判断返回顶部按钮是否显示
      this.isShowBackTop = -position.y > 1000
    },
    addToCart() {
      // 获取购物车需要展示的商品信息
      const probuct = {}
      probuct.image = this.topImages[0]
      probuct.title = this.goods.title
      probuct.desc = this.goods.desc
      probuct.price = this.goods.realPrice
      probuct.iid = this.iid
      // 将商品添加到购物车里
      this.$store.dispatch('addToCart', probuct).then(res => {
        this.$toast.show(res, 1500)
        console.log(this.$toast)
      })
    }
  },
  mounted() {},
  destroyed() {
    this.$bus.$off('itemImgLoad', this.itemImgListener)
  }
}
</script>

<style lang="less" scoped>
.detail {
  position: relative;
  padding-bottom: 100rem;
  height: 100vh;
  z-index: 9;
  .van-nav-bar {
    background-color: #fff;
    .title {
      color: #000;
      font-size: 0.9rem;
      span {
        padding: 0.8rem;
      }
      .active {
        color: #ef232f;
      }
    }
  }
  /deep/.van-icon-arrow-left:before {
    font-size: 1.28rem;
    color: #000;
  }
  .content {
    margin-top: 46px;
  }
  // .bottom-bar {
  //   height: 49px;
  //   // background-color: burlywood;
  //   position: relative;
  //   bottom: 60px;
  //   left: 0;
  // }
}
</style>
