import {defineStore} from 'pinia'
import {
  reqAddress,
  reqShops
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

  return{
    latitude,// 纬度
    longitude,// 经度
    reqAddressList,//存储位置详情列表
    reqAddressStores,//根据经纬度获取位置详情
    reqShopsList,//商铺列表
    reqShopsStores, //根据经纬度获取商铺列表
  }
  
})