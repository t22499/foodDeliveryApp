<script setup lang="ts">
import HeaderTop from '@/components/HeaderTop/HeaderTop.vue'
import ShopList from '@/components/ShopList/ShopList.vue'
import {reqFoodCategorys} from '@/api/utils'
import { computed, onUpdated, ref, watch } from 'vue';
import { onMounted } from 'vue';
import {useShopsStore} from '@/stores/shops'
import BScroll from '@better-scroll/core'

const shopsStore = useShopsStore()

//位置详情
const reqAddressList:any = computed(()=>shopsStore.reqAddressList)
//商品列表
const reqShopsList:any = computed(()=>shopsStore.reqShopsList)

//url
const baseImageUrl = 'https://fuss10.elemecdn.com'

//列表数据
const foodCategorysList:any = ref({})

//定义一个二维数组,将列表所有数据保存其中
const foodCategorysArray:any = []
//定义一个小数组长度为8
let categoryArr:any = []

//获取菜单种类列表
const foodCategory = async ()=>{
  const res = await reqFoodCategorys()
  foodCategorysList.value = res.data
  // console.log(foodCategorysList.value.length)

  //如果大于
  foodCategorysList.value.forEach((c:any) =>{

    //如果大于8重新创建
    if(categoryArr.length === 8){
      categoryArr = []
    }

    //如果等于0就添加到二维数组里
    if(categoryArr.length === 0){
      foodCategorysArray.push(categoryArr)
    }

    //将当前数据添加到小数组
    categoryArr.push(c)

  })

}

const scroll:any = ref(null)
onUpdated(() => {
  new BScroll(scroll.value,{
    probeType: 3,
    pullUpLoad: true,
    click:true
  })
}),

onMounted(()=>{
  foodCategory()
  shopsStore.reqAddressStores()
 
})
</script>

<template>
  <div class="msite">
    <!-- 头部 -->
    <HeaderTop :title="reqAddressList.name" >
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
    <div class="miste-content-wrapper" ref="scroll">
      <div class="miste-content">
        <!-- 首页 -->
        <!-- 轮播导航 -->
          <nav class="msite_nav">
            <van-swipe class="my-swipe"  indicator-color="#02a774"  :show-indicators="true" v-if="foodCategorysList.length">
              <van-swipe-item class="swiper-item" v-for="(fcategoryArr,index) in foodCategorysArray" :key="index">
                <a class="link_to_food" href="" v-for=" (category,index) in fcategoryArr" :key="index">
                  <div class="food_container">
                    <img :src="baseImageUrl+category.image_url" alt="">
                    <span>{{ category.title }}</span>
                  </div>
                </a>
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
  .miste-content-wrapper{
    position: fixed;
    top: 45px;
    bottom: 45px;
    width: 100%;
    .msite_nav {//首页
      position: relative;
      @include bottom-border-1px(#e4e4e4);
      height: 200px;
      background: #fff;
      
      .my-swipe{//轮播导航样式
        display: inline-block;
        width: 100%;
        height: 100%;
        color: #fff;
        text-align: center;
        .swiper-item{
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