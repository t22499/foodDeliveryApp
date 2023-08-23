import http from '@/http/http'

// 1、根据经纬度获取位置详情
export const reqAddress = (geohash:string)=>{
  return http({
    url:'/position',
    params:{
      geohash
    }
  })
}

// 2、获取食品分类列表
export const reqFoodCategorys = ()=>{
  return http({
    url:'/index_category'
  })
}

// 3、根据经纬度获取商铺列表
export const reqShops = (longitude:string, latitude:string)=>{
  return http({
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
    url:'/sendcode',
    params:{
      phone
    }
  })
}

// 8、手机号验证码登陆
export const reqSmsLogin = (phone:string, code:string)=>{
  return http({
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
    url:'/userinfo',
  })
}

// 10、用户登出
export const reqLogout = ()=>{
  return http({
    url:'/logout',
  })
}

