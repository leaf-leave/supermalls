<template>
  <div class="params_info" v-if="Object.keys(paramsInfo).length !== 0">
    <div class="explain">{{ paramsInfo.key }}</div>
    <table class="rule">
      <tr v-for="(item1, index1) in paramsInfo.sizes[0]" :key="index1">
        <td align="right" v-for="(item2, index2) in item1" :key="index2">{{ item2 }}</td>
      </tr>
    </table>

    <div class="explain">{{ paramsInfo.key }}</div>
    <table class="info">
      <tr v-for="(item, index) in paramsInfo.info" :key="index">
        <td class="left">{{ item.key }}</td>
        <td class="right">{{ item.value }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: 'DetailParamsInfo',
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style lang="less" scoped>
.params_info {
  .explain {
    font-size: 0.36rem;
    margin: 0 0 0.3rem 0.3rem;
  }
  .rule {
    border-top: 0.06rem solid #ebebeb;
    padding: 0.3rem;
    width: 100vw;
    font-size: 0.64rem;
    line-height: 1;
    tr {
      display: flex;
      justify-content: space-between;
      padding: 0.2rem 0;
      // align-items: center;
      border-bottom: 1px solid #ebebeb;
    }
    td {
      padding: 0.2rem 0;
    }
  }
  .info {
    border-top: 0.06rem solid #ebebeb;
    width: 100%;
    font-size: 0.4rem;
    padding: 0 1rem 0;
    tr {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ebebeb;
      justify-content: space-around;
      padding: 0.3rem 0;
      .left {
        display: flex;
        // align-items: center;
        // justify-content: flex-start;
        height: 20px;
        flex: 4;
        // border: 1px solid red;
      }
      .right {
        font-size: 0.26rem;
        margin-left: 1rem;
        color: #f02430;
        flex: 8;
      }
    }
  }
}
</style>
