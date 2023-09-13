<script setup lang="ts">
import {useShopsStore} from '@/stores/shops'
import { ref } from 'vue';

const shopsStore = useShopsStore()

let displaySwitch = ref(false)
const showShopCart = (display:any)=>{
  displaySwitch.value = display
}

</script>


<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper" @click="showShopCart(true)">
          <div class="logo highlight">
            <i class="iconfont icon-31gouwuchexuanzhong"></i>
          </div>
          <div class="num">{{ shopsStore.totalQuantity }}</div>
        </div>
        <div class="price">￥{{ shopsStore.totalPrice }}</div>
        <div class="desc">配送费1</div>
      </div>
      <div class="content-right">
        <div class="pay enough">
          结算
        </div>
      </div>
    </div>
    <div class="shopcart-list" v-if="displaySwitch">
      <div class="list-header">
        <h1 class="title">购物车</h1>
        <span class="empty" @click="shopsStore.clearList()">清空</span>
      </div>
      <div class="list-content">
        <ul>
          <li class="food">
            <span class="name">{{ "小米粥" }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="list-mask" v-if="displaySwitch" @click="showShopCart(false)"></div>
</template>

<style  lang="scss" scoped>
.shopcart{
  position: fixed;
  height: 48px;
  width: 100%;
  bottom: 0;
  z-index: 50;
  
  .content{
    background-color: #141d27;
    height: 100%;
    display: flex;
    color: rgba(255,255,255,0.4);
    font-size: 0;
    .content-left{
      flex: 1;
      // width: 100%;
      .logo-wrapper{
        display: inline-block;
        vertical-align: top;
        position: relative;
        top: -10px;
        margin: 0 12px;
        padding: 6px;
        width: 56px;
        height: 56px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-radius: 50%;
        background: #141d27;
        .logo{
          width: 100%;
          height: 100%;
          border-radius: 50%;
          text-align: center;
          // background: #141d27;
          background: #02a774;
          .icon-31gouwuchexuanzhong{
            line-height: 44px;
            font-size: 24px;
            color: #80858a;
          }
        }
        .num{
          position: absolute;
          background-color: #f01414;
          top: 0;
          right: 0;
          font-size: 16px;
          color: #fff;
          border-radius: 50%;
          padding: 0 2px 0 2px;
        }
      }
      .price{
          display: inline-block;
          vertical-align: top;
          margin-top: 5px;
          line-height: 24px;
          padding-right: 12px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          font-size: 16px;
          font-weight: 700;
          color: #fff;
        }
        .desc{
          display: inline-block;
          vertical-align: bottom;
          margin-bottom: 15px;
          margin-left: -45px;
          font-size: 10px;
        }
    }
    .content-right{
      width: 105px;
      flex: 0 0 105px;
      .pay{
        height: 48px;
        line-height: 48px;
        text-align: center;
        font-size: 12px;
        font-weight: 700;
        color: #fff;
        background: #00b43c;
      }
    }
  }
  .shopcart-list{
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    .list-header{
      height: 40px;
      line-height: 40px;
      padding: 0 18px;
      background: #f3f5f7;
      border-bottom: 1px solid rgba(7,17,27,0.1);
      .title{
        float: left;
        font-size: 14px;
        color: #07111b;
      }
      .empty{
        float: right;
        font-size: 12px;
        color: #00a0dc;
      }
    }
    .list-content{
      padding: 0 18px;
      max-height: 217px;
      overflow: hidden;
      background: #fff;
      ul{
          .food{
            position: relative;
            padding: 12px 0;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            border: none;
            bottom: 10px;
          .name{
            float: left;
            line-height: 24px;
            font-size: 14px;
            color: #07111b;
          }
        }
      }
    }
  }
}

.list-mask{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 40;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  opacity: 1;
  background: rgba(7,17,27,0.6);
}

.iconfont{
  font-size: 16px;
  font-style: normal;
}

</style>