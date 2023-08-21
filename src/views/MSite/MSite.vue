<script setup lang="ts">
import HeaderTop from '@/components/HeaderTop/HeaderTop.vue'
import ShopList from '@/components/ShopList/ShopList.vue'
</script>

<template>
  <div class="msite">
    <!-- 头部 -->
    <HeaderTop title="地址">
      <template #left>
        <router-link class="header_search" to="/msite">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
      </template>
      <template #right>
        <router-link class="header_login" to="/msite">
          登录|注册
        </router-link>
      </template>
    </HeaderTop>
    <div class="miste-content-wrapper">
      <!-- 首页 -->
      <!-- 轮播导航 -->
      <nav class="msite_nav">
        <van-swipe class="my-swipe"  indicator-color="#02a774"  :show-indicators="true">
          <van-swipe-item class="swiper-item" >
            <div class="swiper-navigation">
              <a class="link_to_food" href="">
                <div class="food_container">
                  <img src="../../common/images/nav/1.jpg" alt="">
                  <span>商品</span>
                </div>
              </a>
              <a class="link_to_food" href="">
                <div class="food_container">
                  <img src="../../common/images/nav/2.jpg" alt="">
                  <span>商品</span>
                </div>
              </a>
              <a class="link_to_food" href="">
                <div class="food_container">
                  <img src="../../common/images/nav/3.jpg" alt="">
                  <span>商品</span>
                </div>
              </a>
              <a class="link_to_food" href="">
                <div class="food_container">
                  <img src="../../common/images/nav/4.jpg" alt="">
                  <span>商品</span>
                </div>
              </a>
              <a class="link_to_food" href="">
                <div class="food_container">
                  <img src="../../common/images/nav/5.jpg" alt="">
                  <span>商品</span>
                </div>
              </a>
              <a class="link_to_food" href="">
                <div class="food_container">
                  <img src="../../common/images/nav/6.jpg" alt="">
                  <span>商品</span>
                </div>
              </a>
              <a class="link_to_food" href="">
                <div class="food_container">
                  <img src="../../common/images/nav/7.jpg" alt="">
                  <span>商品</span>
                </div>
              </a>
              <a class="link_to_food" href="">
                <div class="food_container">
                  <img src="../../common/images/nav/8.jpg" alt="">
                  <span>商品</span>
                </div>
              </a>
            </div>
          </van-swipe-item>
          <van-swipe-item class="swiper-item" >
            <div class="swiper-navigation">
              <a class="link_to_food" href="">
                <div class="food_container">
                  <img src="../../common/images/nav/9.jpg" alt="">
                  <span>商品</span>
                </div>
              </a>
              <a class="link_to_food" href="">
                <div class="food_container">
                  <img src="../../common/images/nav/10.jpg" alt="">
                  <span>商品</span>
                </div>
              </a>
              <a class="link_to_food" href="">
                <div class="food_container">
                  <img src="../../common/images/nav/11.jpg" alt="">
                  <span>商品</span>
                </div>
              </a>
              <a class="link_to_food" href="">
                <div class="food_container">
                  <img src="../../common/images/nav/12.jpg" alt="">
                  <span>商品</span>
                </div>
              </a>
              <a class="link_to_food" href="">
                <div class="food_container">
                  <img src="../../common/images/nav/13.jpg" alt="">
                  <span>商品</span>
                </div>
              </a>
              <a class="link_to_food" href="">
                <div class="food_container">
                  <img src="../../common/images/nav/14.jpg" alt="">
                  <span>商品</span>
                </div>
              </a>
              <a class="link_to_food" href="">
                <div class="food_container">
                  <img src="../../common/images/nav/2.jpg" alt="">
                  <span>商品</span>
                </div>
              </a>
              <a class="link_to_food" href="">
                <div class="food_container">
                  <img src="../../common/images/nav/13.jpg" alt="">
                  <span>商品</span>
                </div>
              </a>
            </div>
          </van-swipe-item>
        </van-swipe>
      </nav>
      <!--首页附近商家-->
      <div class="msite_shop_list">
        <div class="shop_header">
          <i class="iconfont icon-xuanxiang"></i>
          <span class="shop_header_title">附近商家</span>
        </div>
      </div>
      <!-- 附件商家内容 -->
      <ShopList/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../common//style/mixins.scss";

.msite { //首页
  width: 100%;
  
  .header_login{//HeaderTap的组件样式
  position: absolute;
  top: 50%;
  color: #fff;
  transform: translateY(-50%);
  font-size: 14px;
  right: 20px;
  }
  .header_search{//HeaderTap的组件样式
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
    font-size: 20px;
  }
  .iconfont{//HeaderTap的组件样式
    font-size: 30px;
  }
  .msite_nav {//首页
    position: relative;
    @include bottom-border-1px(#e4e4e4);
    height: 200px;
    margin-top: 45px;
    background: #fff;
    .my-swipe{//轮播导航样式
      display: inline-block;
      width: 100%;
      height: 100%;
      color: #fff;
      text-align: center;
      .swiper-item{
        display: inline-block;
        .swiper-navigation{
          width: 100%;
          height: 100%;
          display: flex;
          align-items: flex-start;
          flex-wrap: wrap;
          .link_to_food{
            width: 25%;
            margin-bottom: 10px;
            .food_container{
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              img{
                display: inline;
                width: 50px;
                height: 50px;
              }
              span{
                display: block;
                width: 100%;
                text-align: center;
                padding-bottom: 10px;
                margin-top: 10px;
              }
            }
          }
        }
      }
      
    }
    .van-swipe__indicators{//轮播图下面圆点
      position: absolute;
      text-align: center;
      transform: translate3d(0, 0, 0);
      width: 100%;
      height: 10px;
      z-index: 10;
      margin-top: -25px;
      .van-swipe__indicator{
        display: inline-block;
        background: #000;
        border-radius: 100%;
        margin: 0 4px;
        opacity: 0.4;
        height: 8px;
        width: 8px;
      }
    }
  }

  .msite_shop_list {
    @include top-border-1px(#e4e4e4);
    margin-top: 10px;
    background: #fff;

    .shop_header {
      padding: 10px 10px 0;
      font-size: 10px;
      .icon-xuanxiang{
        font-size: 16px;
        color: #999;
      }

      .shop_header_title {
        color: #999;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
}

</style>