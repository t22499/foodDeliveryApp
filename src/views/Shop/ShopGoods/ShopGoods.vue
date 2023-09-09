<script setup lang="ts">
import {useShopsStore} from '@/stores/shops'
import { onUpdated, ref, watch } from 'vue';
import { computed, onMounted } from 'vue';
import CartControl from '@/components/CartControl/CartControl.vue'
import BScroll from '@better-scroll/core'

const shopsStore = useShopsStore()

//current显示状态
const currentIndex = ref(0)

//current切换状态
const clickMenuItem = (index:any)=>{
  currentIndex.value = index
}

//goods表
const shopGoodsList:any = computed(()=>shopsStore.reqShopGoodsList)


const scroll:any = ref(null)
//动态监听
watch(shopGoodsList,(newVal,oldVal)=>{
  console.log(newVal)
})
  
//组件加载完成就执行
onUpdated(() => {
  new BScroll(scroll.value,{
    probeType: 3,
    pullUpLoad: true,
    click:true
  })
}),

onMounted(() => {
  console.log(shopGoodsList)
  shopsStore.reqShopGoodsStores()
  
})
</script>

<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li class="menu-item " v-for="(goods,index) in shopGoodsList" :key="index"
        :class="{current : currentIndex === index}" @click="clickMenuItem(index)">
          <span class="text bottom-border-1px">
            <img class="icon" :src="goods.icon" v-if="goods.icon">
            {{goods.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="core-container">
      <div class="scroll-wrapper" ref="scroll">
        <div class="scroll-content">
          <ul class="foods-wrapper-ul">
            <li class="food-list-hook" v-for="(goods,index) in shopGoodsList" :key="index">
              <h1 class="title">{{ goods.name }}</h1>
              <ul>
                <li class="food-item" v-for="(food,index) in goods.foods" :key="index">
                  <div class="icon">
                    <img width="57" height="57" :src="food.icon">
                  </div>
                  <div class="content">
                    <h2 class="name">{{food.name}}</h2>
                      <p class="desc">{{food.description}}</p>
                      <div class="extra">
                        <span class="count">月售{{food.sellCount}}份</span>
                        <span>好评率{{food.rating}}%</span>
                      </div>
                      <div class="price">
                        <span class="now">￥{{food.price}}</span>
                        <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                        <div class="cartcontrol-wrapper">
                          <CartControl :food="food"/>
                        </div>
                      </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../../common/style/mixins.scss';
.goods {
  display: flex;
  position: absolute;
  width: 100%;
  height: 79%;
  overflow: hidden;
  background-color: #fff;
  .menu-wrapper{
    background-color: #f3f5f7;
    width: 80px;
    .menu-item{
      display: table;
      height: 54px;
      width: 100%;
      padding: 0 12px;
      line-height: 14px;
      .icon{
        display: inline-block;
        vertical-align: top;
        width: 12px;
        height: 12px;
        margin-right: 2px;
        background-size: 12px 12px;
        background-repeat: no-repeat;
      }
      .text{
        @include bottom-border-1px(#d9d9d9);
        display: table-cell;
        font-size: 12px;
        vertical-align: middle;
      }
    }
    .current{
      position: relative;
      z-index: 10;
      margin-top: -1px;
      color: #02a774;
      background: #fff;
      font-weight: 700;
    }
  }

  .core-container{
    flex: 1;
    .scroll-wrapper{
      position: relative;
       height: 100%;
       overflow: hidden;
       .foods-wrapper-ul{
        .food-list-hook{
          .title{
            padding-left: 14px;
            height: 26px;
            line-height: 26px;
            border-left: 2px solid #d9dde1;
            font-size: 12px;
            color: #93999f;
            background: #f3f5f7;

          }
          .food-item{
            @include bottom-border-1px(#d9d9d9);
            display: flex;
            margin: 18px;
            padding-bottom: 18px;
            position: relative;
            border: none;
            .icon{
              margin-right: 10px;
            }
            .content{
              flex: 1;
              .name{
                margin: 2px 0 8px 0;
                height: 14px;
                line-height: 14px;
                font-size: 14px;
                color: #07111b;
              }
              .desc{
                line-height: 12px;
                margin-bottom: 8px;
                font-size: 10px;
                color: #93999f;
              }
              .extra{
                line-height: 10px;
                font-size: 10px;
                color: #93999f;
                .count{
                  margin-right: 12px;
                }
              }
              .price{
                .now{
                  margin-right: 8px;
                  font-size: 14px;
                  color: #f01414;
                }
                .cartcontrol-wrapper{
                  position: absolute;
                  right: 0;
                  bottom: 12px;
                }  
              }
            }
          }
        }
      }
    }
  }
}

</style>