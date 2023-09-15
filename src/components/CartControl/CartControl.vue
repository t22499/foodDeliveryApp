<script setup lang="ts">
import {useShopsStore} from '@/stores/shops'

const shopsStore = useShopsStore()


//接收食物列表
const props:any = defineProps({
  food: Object
});



//增加食物数量
const foodCount = (isAdd:any)=>{
  shopsStore.reqFoodCount({isAdd,food:props.food})
  setTimeout(() => {
    shopsStore.reqControlFoodCount()
  }, 0);
}

</script>

<template>
  <div class="cartcontrol">
    <div class="iconfont-minus" v-if="props.food.count" @click="foodCount(false)">
      <van-icon name="minus"/>
    </div>
    <div class="cart-count" v-if="props.food.count">{{props.food.count}}</div>
    <div class="iconfont-plus" @click="foodCount(true)">
      <van-icon name="plus"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cartcontrol {
  display: flex;
  font-size: 0;
  justify-items: center;
  align-items: center;

  .iconfont-plus{
    display: inline-block;
    padding: 6px;
    font-size: 20px;
    color: #02a774;
    
  }

  .iconfont-minus{
    display: inline-block;
    padding: 6px;
    font-size: 20px;
    color: #02a774;
  }
  .cart-count {
    // display: inline-block;
    // vertical-align: top;
    // width: 12px;
    // padding-top: 6px;
    // font-size: 20px;
    // text-align: center;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }
}
</style>