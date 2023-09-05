<script setup lang="ts">
import { onMounted, ref } from 'vue';
import {reqShopInfo} from '@/api/utils'

//url
const baseImageUrl = 'https://fuss10.elemecdn.com'
//获取商家信息
const shopInfoList:any = ref({})

const shopInfo = async () => {
  const res = await reqShopInfo()
  shopInfoList.value = res.data
  console.log(res)
}

onMounted(() => {
  shopInfo()
})
</script>

<template>
  <div class="shop-header">
    <nav class="shop-nav" :style="{background: `url(${shopInfoList.bgImg})`}">
      <a class="back" href="/">
        <i class="iconfont icon-jiantou1"></i>
      </a>
    </nav>
    <div class="shop-content" >
      <img class="content-image" :src="shopInfoList.avatar">
      <div class="header-content">
        <h2 class="content-title">
          <span class="content-tag">
            <span class="mini-tag">品牌</span>
          </span>
          <span class="content-name">{{shopInfoList.name}}</span>
          <i class="content-icon"></i>
        </h2>
        <div class="shop-message">
          <span class="shop-message-detail">{{shopInfoList.score}}</span>
          <span class="shop-message-detail">月售{{shopInfoList.sellCount}}单</span>
          <span class="shop-message-detail">
            {{shopInfoList.description}}
            <span>约{{shopInfoList.deliveryTime}}分钟</span>
          </span>
          <span class="shop-message-detail">距离{{shopInfoList.distance}}</span>
        </div>
      </div>
    </div>

    <!-- <div class="shop-header-discounts">
      <div class="discounts-left">
        <div class="activity" >
          <span class="content-tag">
            <span class="mini-tag">{{}}</span>
          </span>
          <span class="activity-content ellipsis">{{}}</span>
        </div>
      </div>
      <div class="discounts-right">
        {{}}个优惠
      </div>
    </div>

    <transition name="fade">
      <div class="shop-brief-modal" >
        <div class="brief-modal-content">
          <h2 class="content-title">
          <span class="content-tag">
            <span class="mini-tag">品牌</span>
          </span>
            <span class="content-name">{{}}</span>
          </h2>
          <ul class="brief-modal-msg">
            <li>
              <h3>{{}}</h3>
              <p>评分</p>
            </li>
            <li>
              <h3>{{}}单</h3>
              <p>月售</p>
            </li>
            <li>
              <h3>{{}}</h3>
              <p>约{{}}分钟</p>
            </li>
            <li>
              <h3>{{}}元</h3>
              <p>配送费用</p>
            </li>
            <li>
              <h3>{{}}</h3>
              <p>距离</p>
            </li>
          </ul>
          <h3 class="brief-modal-title">
            <span>公告</span>
          </h3>
          <div class="brief-modal-notice">
            {{}}
          </div>
          <div class="mask-footer">
            <span class="iconfont icon-close"></span>
          </div>
        </div>
        <div class="brief-modal-cover"></div>
      </div>
    </transition>

    <transition name="fade">
      <div class="activity-sheet" >
        <div class="activity-sheet-content">
          <h2 class="activity-sheet-title">优惠活动</h2>
          <ul class="list">
            <li class="activity-item">
            <span class="content-tag">
                <span class="mini-tag">{{}}</span>
              </span>
              <span class="activity-content">{{}}</span>
            </li>
          </ul>
          <div class="activity-sheet-close" >
            <span class="iconfont icon-close"></span>
          </div>
        </div>
        <div class="activity-sheet-cover"></div>
      </div>
    </transition> -->
  </div>
</template>

<style lang="scss" scoped>
@import '../../common/style/mixins.scss';
.shop-header {
  height: 100%;
  position: relative;
  background: #fff;
  color: #fff;
  overflow: hidden;

  .shop-nav {
    background-size: cover;
    background-repeat: no-repeat;
    height: 40px;
    padding: 5px 10px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: rgba(119, 103, 137, 0.43);
    }

    .back {
      position: absolute;
      top: 10px;

      .icon-jiantou1 {
        display: block;
        padding: 5px;
        font-size: 20px;
        color: #fff;
      }
    }
  }

  .shop-content {
    padding: 30px 20px 5px 20px;
    position: relative;
    display: flex;
    background: #fff;
    text-align: center;

    img {
      box-shadow: 0 0 0.4vw 0 rgba(0, 0, 0, 0.2);
      position: absolute;
      top: 0;
      left: 50%;
      width: 66px;
      height: 66px;
      border-radius: 2px;
      margin-left: -33px;
      margin-top: -40px;
    }

    .header-content {
      flex: 1;
      width: 72%;

      .content-title {
        font-size: 20px;
        line-height: 24px;
        font-weight: 700;
        white-space: nowrap;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #333;

        .content-tag {
          border-radius: 2px;
          background-image: linear-gradient(90deg, #fff100, #ffe339);
          width: 36px;
          height: 18px;
          margin-right: 10px;
          color: #6a3709;
          font-style: normal;
          font-weight: 700;
          position: relative;

          .mini-tag {
            position: absolute;
            left: 0;
            top: 0;
            right: -100%;
            bottom: -100%;
            font-size: 24px;
            font-weight: 600;
            transform: scale(0.5);
            transform-origin: 0 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        .content-name {
          font-weight: 700;
          text-align: left;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .content-icon {
          width: 20px;
          position: relative;
          height: 16px;

          &::after {
            content: "";
            border-style: solid;
            border-width: 6px 0 6px 7px;
            border-color: transparent transparent transparent rgba(0, 0, 0, 0.67);
            position: absolute;
            left: 8px;
            top: 3px;
          }
        }
      }

      .shop-message {
        white-space: nowrap;
        height: 12px;
        margin-top: 8px;
        font-size: 11px;
        color: #333;

        .shop-message-detail:not(:last-child)::after {
          content: " \B7 ";
          opacity: 0.2;
        }
      }

      .shop-notice {
        width: 63%;
        font-size: 11px;
        font-weight: 300;
        color: #999;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 8px auto 10px;
        white-space: nowrap;
      }
    }

    .shop-header-discounts {
      display: flex;
      background: #fff;
      border-radius: 1px;
      border: 1px solid #eee;
      padding: 5px 7px;
      font-size: 11px;
      color: #666;
      margin: 0 30px;
      align-items: center;

      .discounts-left {
        flex: 1;
        overflow: hidden;

        .activity {
          display: flex;
          align-items: center;

          .content-tag {
            border-radius: 1px;
            width: 25px;
            height: 13px;
            margin-right: 5px;
            color: #fff;
            font-style: normal;
            font-weight: 700;
            position: relative;
            background-color: rgb(112, 188, 70);

            .mini-tag {
              position: absolute;
              left: 0;
              top: 0;
              right: -100%;
              bottom: -100%;
              font-size: 18px;
              font-weight: 600;
              transform: scale(0.5);
              transform-origin: 0 0;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        }
      }

      .discounts-right {
        width: 50px;
        flex-shrink: 0;
        position: relative;
        padding-right: 10px;
        text-align: right;

        &::after {
          content: "";
          display: block;
          border-style: solid;
          border-width: 4px 4px 0;
          border-color: rgba(0, 0, 0, 0.57) transparent transparent;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 0;
        }
      }
    }

    .shop-brief-modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 52;
      flex-direction: column;
      color: #333;

      &.fade-enter-active,
      &.fade-leave-active {
        transition: opacity 0.5s;
      }

      &.fade-enter,
      &.fade-leave-to {
        opacity: 0;
      }

      .brief-modal-cover {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
      }

      .brief-modal-content {
        position: relative;
        width: 80%;
        padding: 25px 20px;
        border-radius: 5px;
        background: #fff;
        z-index: 99;
        display: flex;
        flex-direction: column;

        .content-title {
          font-size: 20px;
          line-height: 24px;
          font-weight: 700
        }
      }
    }
  }
}
</style>

