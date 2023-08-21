<script lang="ts" setup>
defineProps({
  title:{
    type:String
  }
})
</script>

<template>
  <header class="header">
    <slot name="left"></slot>
    <span class="header_title">
      <span>{{ title }}</span>
    </span>
    <slot name="right"></slot>
  </header>
</template>

<style lang="scss" scoped>
@import "../../common/style/mixins.scss";
.header{
  @include bottom-border-1px(#e4e4e4);
  background-color:#02a774;
  position: fixed;
  width: 100%;
  height: 45px;
  z-index: 100;
  top: 0;
  left: 0;
  .header_title{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    text-align: center;
    color: #fff;
    font-size: 20px;
  }
}
</style>