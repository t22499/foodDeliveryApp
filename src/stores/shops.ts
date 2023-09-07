import {defineStore} from 'pinia'
import {
  reqAddress,
  reqShops,
  reqShopGoods,
  reqShopRatings,
  reqShopInfo
  } from '@/api/utils'
import { ref } from 'vue'

export const useShopsStore = defineStore('ShopsStore',()=>{
  let latitude:string = '40.10038'// 纬度
  let longitude:string = '116.36867'// 经度
  let geohash = latitude + ',' + longitude

  //存储位置详情列表
  const reqAddressList = ref({})
  //根据经纬度获取位置详情
  const reqAddressStores = async ()=>{
    const res = await reqAddress(geohash)
    reqAddressList.value = res.data
  }

  //商铺列表
  const reqShopsList = ref({})
  //根据经纬度获取商铺列表
  const reqShopsStores = async ()=>{
    const res = await reqShops(latitude,longitude)
    reqShopsList.value = res.data
  }


  //获取商品info表
  const reqShopInfoList = ref({})
  const reqShopInfoStores = async ()=>{
    const res = await reqShopInfo()
    reqShopInfoList.value = res.data
  }

  //获取商品Ratings表
  const reqShopRatingsList = ref({})
  const reqShopRatingsStores = async ()=>{
    const res = await reqShopRatings()
    reqShopRatingsList.value = res.data
  }

  //获取商品Goods表
  const reqShopGoodsList = ref({})
  const reqShopGoodsStores = async ()=>{
    const res = await reqShopGoods()
    reqShopGoodsList.value = res.data
  }

  //存放food
  // const foodList:any = ref([])
  //food的数量的增加
  const reqFoodCount = ({isAdd,food}:{isAdd:any,food:any})=>{
    //判断是否增加
    if(isAdd){
      //是否第一次增加
      if(!food.count){
        Reflect.set(food, 'count', 1)
        // foodList.value.push(food)
        console.log("增加总数")
      }else{
        food.count++
      }
      // console.log(reqShopGoodsList.value)
    }else{
      if(food.count){
        
      }
    }
  }


  
  return{
    latitude,// 纬度
    longitude,// 经度
    reqAddressList,//存储位置详情列表
    reqAddressStores,//根据经纬度获取位置详情
    reqShopsList,//商铺列表
    reqShopsStores, //根据经纬度获取商铺列表
    reqShopGoodsList,//商品goods表
    reqShopGoodsStores,//获取商品goods表
    reqShopInfoList,//商品info表
    reqShopInfoStores,//获取商品info表
    reqShopRatingsList,//商品Ratings表
    reqShopRatingsStores,//获取商品Ratings表
    reqFoodCount,//food的数量的增加
  }
  
})