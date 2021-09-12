<template>
  <div class="my">
    <van-nav-bar title="我的信息" placeholder>
      <template #right>
        <van-icon size="18" />
      </template>
    </van-nav-bar>
    <div class="header">
      <div class="info">
        <img src="../../assets/img/profile/avatar.svg" />
        <div class="center">
          <p class="login">登录/注册</p>
          <p class="iphone"><van-icon name="graphic" />暂无绑定的手机号</p>
        </div>
        <div class="i">
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    <div class="detail">
      <div>
        <p><span>0.00</span>&nbsp;元</p>
        <p>我的余额</p>
      </div>
      <div class="center">
        <p><span>0</span>&nbsp;个</p>
        <p>我的优惠</p>
      </div>
      <div>
        <p><span>0</span>&nbsp;分</p>
        <p>我的积分</p>
      </div>
    </div>
    <div class="news">
      <div>
        <img src="@/assets/img/profile/message.svg" />
        <span>我的消息</span>
      </div>
      <div class="shop">
        <img src="../../assets\/img/profile/pointer.svg" />
        <p>我的商城</p>
      </div>
      <div>
        <img src="../../assets/img/profile/vip.svg" />
        <p>会员卡</p>
      </div>
    </div>
    <div class="cart">
      <div>
        <img src="../../assets/img/profile/cart.svg" />
        <span>我的购物车</span>
      </div>
      <div>
        <img src="../../assets/img/profile/shopping.svg" />
        <p class="app">下载购物APP</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
}
.my {
  .header {
    padding: 0.2rem 0.2rem 0.4rem 0.2rem;
    height: 5rem;
    background-color: #ff8e96;
    .info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: white;
      margin-top: 0.1rem;
      img {
        margin-left: 0.8rem;
        width: 4.5rem;
        height: 4.5rem;
      }
      .center {
        margin-left: -4rem;
        .login {
          font-size: 1.2rem;
          line-height: 1.5;
        }
        .iphone {
          display: flex;
          align-items: center;
          font-size: 0.8rem;
        }
      }
      .i {
        font-size: 1.5rem;
      }
    }
  }
  .detail {
    display: flex;
    height: 4.5rem;
    border-bottom: 0.5rem solid #f2f2f2;
    .center {
      border-left: 1px solid #fafafa;
      border-right: 1px solid #fafafa;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
      font-size: 1rem;
      p {
        span {
          color: #e67962;
          font-weight: bold;
        }
      }
    }
  }
  .news {
    display: flex;
    flex-direction: column;
    height: 9rem;
    padding: 0 1rem;
    border-bottom: 0.12rem solid #f2f2f2;
    .shop {
      p {
        display: flex;
        align-items: center;
        width: calc(100% - 0.6rem);
        height: 100%;
        border-top: 1px solid #f2f2f2;
        border-bottom: 1px solid #f2f2f2;
      }
    }
    div {
      flex: 1;
      display: flex;
      align-items: center;
      font-size: 1rem;
      img {
        margin-right: 0.8rem;
        width: 2rem;
        height: 2rem;
      }
    }
  }
  .cart {
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 8rem;
    div {
      flex: 1;
      display: flex;
      align-items: center;
      font-size: 1rem;
      img {
        margin-right: 0.5rem;
        width: 2rem;
        height: 2rem;
      }
      .app {
        display: flex;
        align-items: center;
        width: calc(100% - 0.6rem);
        height: 100%;
        border-top: 1px solid #f2f2f2;
      }
    }
  }
}
</style>
