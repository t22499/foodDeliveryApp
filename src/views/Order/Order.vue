<script setup lang="ts">
import HeaderTop from '@/components/HeaderTop/HeaderTop.vue'
</script>

<template>
  <div class="order">
    <HeaderTop title="订单列表"></HeaderTop>
    <section class="order_no_login">
      <img src="../../common/images/order/person.png">
      <h3>登录后查看外卖订单</h3>
      <button>立即登陆</button>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.order{
  width: 100%;
  .order_no_login{
    padding-top: 140px;
    text-align: center;
    margin: 0 auto;
    width: 60%;
    img{
      display: block;
      width: 100%;
      height: 30%;
      padding: 10px 0;
    }
    button{
      display: inline-block;
      color:#fff;
      outline:none;
      padding: 10px 20px;
      border: 0;
      border-radius: 5px;
      background-color: #02a774;
      font-size: 14px;
    }
    h3{
      padding: 10px 0;
      color: #6a6a6a;
    }
  }
}
</style>