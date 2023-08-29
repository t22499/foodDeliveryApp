<script setup lang="ts">
import { onMounted,ref } from 'vue'

// 类名常量
const CLASS_ON = 'on'
const CLASS_HALF = 'half'
const CLASS_OFF = 'off'
const props:any = defineProps({
  score: Number,
  size: Number
})
  /*
  3.2: 3 + 0 + 2
  3.5: 3 + 1 + 1
    */
    
const starClasses = () =>{
  const scs:any = []
  // 向scs中添加n个CLASS_ON
  const scoreInteger = Math.floor(props.score)
  for (let i = 0; i < scoreInteger; i++) {
    scs.push(CLASS_ON)
  }
  // 向scs中添加0/1个CLASS_HALF
  if(props.score*10-scoreInteger*10>=5) {
    scs.push(CLASS_HALF)
  }
  // 向scs中添加n个CLASS_OFF
  while(scs.length<5) {
    scs.push(CLASS_OFF)
  }
  return scs
}
onMounted(() => {
  starClasses()
})
</script>

<template>
  <div class="star" :class="'star-'+size" >
    <span class="star-item" v-for="(sc, index) in starClasses()" :class="sc" :key="index"></span>
  </div>
</template>

<style lang="scss" scoped>
.star {
  float: left;
  font-size: 0;

  .star-item {
    display: inline-block;
    background-repeat: no-repeat;
  }

  &.star-48 {
    .star-item {
      width: 20px;
      height: 20px;
      margin-right: 22px;
      background-size: 20px 20px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        background-image: url('../../common/images/stars/star48_on@2x.png');
      }

      &.half {
        background-image: url('../../common/images/stars/star48_half@2x.png');
      }

      &.off {
        background-image: url('../../common/images/stars/star48_off@2x.png');
      }
    }
  }

  &.star-36 {
    .star-item {
      width: 15px;
      height: 15px;
      margin-right: 6px;
      background-size: 15px 15px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        background-image: url('../../common/images/stars/star36_on@2x.png');
      }

      &.half {
        background-image: url('../../common/images/stars/star36_half@2x.png');
      }

      &.off {
        background-image: url('../../common/images/stars/star48_off@2x.png');
      }
    }
  }

  &.star-24 {
    .star-item {
      width: 10px;
      height: 10px;
      margin-right: 3px;
      background-size: 10px 10px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        background-image: url('../../common/images/stars/star36_on@2x.png');
      }

      &.half {
        background-image: url('../../common/images/stars/star36_half@2x.png');
      }

      &.off {
        background-image: url('../../common/images/stars/star48_off@2x.png');
      }
    }
  }
}
</style>