<template>
  <div id="home">
    <van-nav-bar title="购物街" placeholder>
      <template #right>
        <van-icon size="18" />
      </template>
    </van-nav-bar>
    <tab-control :titles="['流行', '新款', '精选']" @itemClick="tabClick" ref="tabControls" class="tab-control" v-show="isTabFixed" />
    <scroll ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <fearure-view />
      <tab-control :titles="['流行', '新款', '精选']" @itemClick="tabClick" ref="tabControl" v-show="!isTabFixed" />
      <goods-list :goods="goods[currentType].list" />
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop" />
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import FearureView from './childComps/FearureView.vue'

import TabControl from '@/components/content/tabControl/TabControl.vue'
import GoodsList from '@/components/content/goods/GoodsList.vue'
import Scroll from '@/components/common/srcoll/Scroll.vue'

import { getHomeMultidata, getHomeGoods } from '@/netwrok/home.js'
import { itemListenerMixin, backTopMixin } from '@/common/mixin.js'
export default {
  name: 'Home',
  // 图片加载完成，事件监听
  mixins: [itemListenerMixin, backTopMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop',
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    }
  },
  created() {
    // 1、请求多个数据
    this.getHomeMultidata()
    // 2、
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {},
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    // 保存y值
    this.saveY = this.$refs.scroll.getScrolly()

    // 取消全局事件监听
    this.$bus.$off('itemImageLoad', this.itemImageListener)
  },
  methods: {
    // 事件监听相关方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControls.currentIndex = index
      this.$refs.tabControl.currentIndex = index
    },
    contentScroll(position) {
      // 判断返回顶部按钮是否显示
      this.isShowBackTop = -position.y > 1000
      // 判断tabControl是否吸顶
      this.isTabFixed = -position.y > this.tabOffsetTop
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
    },
    swiperImageLoad() {
      // 求取tabOffsetTop的offsetTop
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      // console.log(this.$refs.tabControl.$el.offsetTop)
    },
    // 网络请求相关方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res)
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // console.log(res)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        // 完成加载更多
        this.$refs.scroll.finishPullUp()
      })
    }
  },
  components: {
    HomeSwiper,
    RecommendView,
    FearureView,
    TabControl,
    GoodsList,
    Scroll
  }
}
</script>

<style lang="less" scoped></style>
