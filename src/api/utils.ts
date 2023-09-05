import http from '@/http/http'

const baseURL = '/api'

// 1、根据经纬度获取位置详情
export const reqAddress = (geohash:any)=>{
  return http({
    baseURL:baseURL,
    url:`/position/${geohash}`,
  })
}

// 2、获取食品分类列表
export const reqFoodCategorys = ()=>{
  return http({
    baseURL:baseURL,
    url:'/index_category'
  })
}

// 3、根据经纬度获取商铺列表
export const reqShops = (longitude:string, latitude:string)=>{
  return http({
    baseURL:baseURL,
    url:'/shops',
    params:{
      longitude,
      latitude
    }
  })
}

// 4、根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (geohash:string, keyword:string)=>{
  return http({
    baseURL:baseURL,
    url:'/search_shops',
    params:{
      geohash,
      keyword
    }
  })
}

// 6、用户名密码登陆
export const reqPwdLogin = ({name, pwd, captcha}:{name:string,pwd:string,captcha:string})=>{
  return http({
    baseURL:baseURL,
    url:'/login_pwd',
    method: 'POST',
    data:{
      name,
      pwd,
      captcha
    }
  })
}

// 7、发送短信验证码
export const reqSendCode = (phone:string)=>{
  return http({
    baseURL:baseURL,
    url:'/sendcode',
    params:{
      phone
    }
  })
}

// 8、手机号验证码登陆
export const reqSmsLogin = (phone:string, code:string)=>{
  return http({
    baseURL:baseURL,
    url:'/login_sms',
    method: 'POST',
    data:{
      phone,
      code
    }
  })
}

// 9、根据会话获取用户信息
export const reqUserInfo = ()=>{
  return http({
    baseURL:baseURL,
    url:'/userinfo',
  })
}

// 10、用户登出
export const reqLogout = ()=>{
  return http({
    baseURL:baseURL,
    url:'/logout',
  })
}

/**
 * 获取商家信息
 */
export const reqShopInfo = ()=>{
  return http({
    url:'/info',
  })
}

/**
 * 获取商家评价数组
 */
export const reqShopRatings = ()=>{
  return http({
    url:'/ratings',
  })
}

/**
 * 获取商家商品数组
 */
export const reqShopGoods = ()=>{
  return http({
    url:'/goods',
  })
}
