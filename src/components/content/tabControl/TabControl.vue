<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="item.id" class="tab-control-item" @click="itemClick(index)">
      <span :class="{ active: index === currentIndex }">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('itemClick', index)
    }
  }
}
</script>

<style lang="less" scoped>
.tab-control {
  display: flex;
  width: 100%;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
  text-align: center;
}
.tab-control-item span {
  line-height: 44px;
  padding: 3px;
}
.active {
  color: red;
  border-bottom: 3px solid red;
}
</style>
