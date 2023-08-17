<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()
const goTo = (path:string)=>{
  router.replace(path)
}

</script>

<template>
  <div class="footer_guide">
    <a class="guide_item" :class="{on:'/msite' === route.path}" @click="goTo('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-U"></i>
      </span>
      <span>外卖</span>
    </a>
    <a class="guide_item" :class="{on:'/search' === route.path}" @click="goTo('/search')">
      <span class="item_icon">
        <i class="iconfont icon-sousuo1"></i>
      </span>
      <span>外卖</span>
    </a>
    <a class="guide_item" :class="{on:'/order' === route.path}" @click="goTo('/order')">
      <span class="item_icon">
        <i class="iconfont icon-quanbudingdan"></i>
      </span>
      <span>外卖</span>
    </a>
    <a class="guide_item" :class="{on:'/profile' === route.path}" @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-geren1"></i>
      </span>
      <span>外卖</span>
    </a>
  </div>
</template>

<style lang="scss" scoped>

.footer_guide{
  position: fixed;
  display: flex;
  background-color: #fff;
  z-index: 100;
  width: 100%;
  height: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  .guide_item{
    display: flex;
    align-items: center;
    flex-direction:column;
    flex: 1;
    &.on{
      color: #02a774;
    }
  }
}
.iconfont{
  font-size: 22px;
}
</style>