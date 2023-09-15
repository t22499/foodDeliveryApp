import {defineStore} from 'pinia'
import {
  reqAddress,
  reqShops,
  reqShopGoods,
  reqShopRatings,
  reqShopInfo
  } from '@/api/utils'
import { ref ,computed } from 'vue'

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
  const reqShopInfoList = ref([])
  const reqShopInfoStores = async ()=>{
    const res = await reqShopInfo()
    reqShopInfoList.value = res.data
  }

  //获取商品Ratings表
  const reqShopRatingsList = ref([])
  const reqShopRatingsStores = async ()=>{
    const res = await reqShopRatings()
    reqShopRatingsList.value = res.data
  }

  //获取商品Goods表
  const reqShopGoodsList:any = ref([])
  const reqShopGoodsStores = async ()=>{
    const res = await reqShopGoods()
    reqShopGoodsList.value = res.data
  }

  //控制reqFoodCount只执行一次
  let controlFoodCount = ref(0)
  const reqControlFoodCount = ()=>{
    controlFoodCount.value = 0
  }
  //food的数量的增加
  const reqFoodCount = ({isAdd,food}:{isAdd:any,food:any})=>{
    if(controlFoodCount.value === 0){
      //判断是否增加
      if(isAdd){
        console.log("c")
        //是否第一次增加
        if(!food.count){
          Reflect.set(food, 'count', 1)
        }else{
          food.count++
        }
      }else{
        if(food.count === 1){
          Reflect.deleteProperty(food,'count')
        }else{
          food.count--
        }
      }
    }
    controlFoodCount.value += 1
  }

  // 计算总数量
  const totalQuantity = computed(() => {
    let quantity = 0;
    for (const good of reqShopGoodsList.value) {
      for (const food of good.foods) {
        if(food.count){
          quantity += food.count; // 假设菜品数量存储在quantity属性中
        }
      }
    }
    return quantity;
  });

  // 计算总价格
  const totalPrice = computed(() => {
    let price = 0;
    for (const good of reqShopGoodsList.value) {
      for (const food of good.foods) {
        if(food.count){
          price += food.count * food.price; // 假设菜品价格存储在price属性中
        }
      }
    }
    return price;
  });

  //购物车食物列表
  const shoppingCartList = computed(() => {
    let shoppingCart = [];
    for (const good of reqShopGoodsList.value) {
      for (const food of good.foods) {
        if(food.count){
          shoppingCart.push(food)
        }
      }
    }
    return shoppingCart;
  })

  // 好评数量
  const positiveSize = computed(()=>{
    let ratings:any = []
    let preTotal:any = 0
    for(const rating of reqShopRatingsList.value){
      ratings.push(rating)
    }
    return ratings.reduce((preTotal:any, rating:any)=> preTotal + (rating.rateType===0?1:0) , 0)
  })


   //清空foodList
   const clearList = ()=>{ 
    for (const good of reqShopGoodsList.value) {
      for (const food of good.foods) {
        if(food.count){
          Reflect.deleteProperty(food,'count')
        }
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
    totalQuantity,// 计算总数量
    totalPrice,// 计算总价格
    clearList,//清空foodList
    shoppingCartList,//购物车食物列表
    controlFoodCount,//控制reqFoodCount只执行一次
    reqControlFoodCount,//控制reqFoodCount只执行一次
    positiveSize, // 好评数量
  }
})