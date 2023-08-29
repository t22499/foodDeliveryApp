<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()
const goTo = (path:string)=>{
  router.replace(path)
}
console.log(route.meta.showFooter)

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
      <span>搜索</span>
    </a>
    <a class="guide_item" :class="{on:'/order' === route.path}" @click="goTo('/order')">
      <span class="item_icon">
        <i class="iconfont icon-quanbudingdan"></i>
      </span>
      <span>订单</span>
    </a>
    <a class="guide_item" :class="{on:'/profile' === route.path}" @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-geren1"></i>
      </span>
      <span>我的</span>
    </a>
  </div>
</template>

<style lang="scss" scoped>
@import "../../common/style/mixins.scss";
.footer_guide{
  @include top-border-1px(#e4e4e4);
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
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction:column;
    flex: 1;
    &.on{
      color: #02a774;
    }
    .span{
      font-size:12px;
      margin-top: 2px;
      margin-bottom: 2px;
    }
  }
}
.iconfont{
  font-size: 22px;
}
</style>