<script lang="ts" setup>
import {useShopsStore} from '@/stores/shops'
import { computed, onMounted } from 'vue';
import Star from '@/components/Star/Star.vue'
const shopsStore = useShopsStore()
const reqShopsList:any = computed(()=>shopsStore.reqShopsList)

onMounted(() => {
  shopsStore.reqShopsStores()
})
</script>

<template>
  <div class="shop_container">
    <ul class="shop_list" v-if="reqShopsList.length">
      <li class="shop_li" v-for=" (shopList,index) in reqShopsList" :key="index"
           @click="$router.push('/shop')">
        <a>
          <div class="shop_left">
            <img src="../../common/images/shop/2.jpg" alt="">
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis">{{shopList.name}}</h4>
              <ul class="shop_detail_ul">
                <li class="supports" v-for="(support, index) in shopList.supports" :key="index">
                  {{support.icon_name}}
                </li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <section class="shop_rating_order_left">
                <Star :score="shopList.rating" :size="24"/>
                <div class="rating_section">
                  {{shopList.rating}}
                </div>
                <div class="order_section">
                  月售{{shopList.recent_order_num}}单
                </div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">{{shopList.delivery_mode.text}}</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥{{shopList.float_minimum_order_amount}}起送</span>
                <span class="segmentation">/</span>
                <span>{{shopList.delivery_mode.piecewise_agent_fee}}</span>
              </p>
            </section>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '../../common/style/mixins.scss';
.shop_container{
  margin-top: -15px;
  margin-bottom: 50px;
  position: relative;
  background-color: #fff;
  .shop_list{
    width: 100%;
    .shop_li{
      display: block;
      margin:10px 0 10px 0;
      a{
        display: block;
        width: 100%;
        padding: 15px 8px;
        overflow: hidden;
        .shop_left{
          float: left;
          width: 23%;
          height: 75px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .shop_right {
          float: right;
          width: 77%;
          .shop_detail_header {
            @include clearFix();
            width: 100%;

            .shop_title {
              float: left;
              width: 200px;
              color: #333;
              font-size: 16px;
              line-height: 16px;
              font-weight: 700;

              &::before {
                content: '品牌';
                display: inline-block;
                font-size: 11px;
                line-height: 11px;
                color: #333;
                background-color: #ffd930;
                padding: 2px 2px;
                border-radius: 2px;
                margin-right: 5px;
              }
            }

            .shop_detail_ul {
              float: right;
              margin-top: 3px;

              .supports {
                float: left;
                font-size: 10px;
                color: #999;
                border: 1px solid #f1f1f1;
                padding: 0 2px;
                border-radius: 2px;
              }
            }
          }

          .shop_rating_order {
            @include clearFix();
            width: 100%;
            margin-top: 18px;
            margin-bottom: 8px;

            .shop_rating_order_left {
              float: left;
              color: #ff9a0d;

              .rating_section {
                float: left;
                font-size: 10px;
                color: #ff6000;
                margin-left: 4px;
              }

              .order_section {
                float: left;
                font-size: 10px;
                color: #666;
                transform: scale(0.8);
              }
            }

            .shop_rating_order_right {
              float: right;
              font-size: 0;

              .delivery_style {
                transform-origin: 35px 0;
                transform: scale(0.7);
                display: inline-block;
                font-size: 12px;
                padding: 1px;
                border-radius: 2px;
              }

              .delivery_left {
                color: #fff;
                margin-right: -10px;
                background-color: #02a774;
                border: 1px solid #02a774;
              }

              .delivery_right {
                color: #02a774;
                border: 1px solid #02a774;
              }
            }
          }

          .shop_distance {
            @include clearFix();
            width: 100%;
            font-size: 12px;

            .shop_delivery_msg {
              float: left;
              transform-origin: 0;
              transform: scale(0.9);
              color: #666;
            }

            .segmentation {
              color: #ccc;
            }
          }
        }
      }
    }
  }
}

</style>