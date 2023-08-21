<script setup lang="ts">
import HeaderTop from '@/components/HeaderTop/HeaderTop.vue'
</script>

<template>
  <div class="search">
    <HeaderTop title="搜索"></HeaderTop>
    <form class="search_form">
      <input type="search" placeholder="请输入商家名称" class="search_input" >
      <input type="submit" class="search_submit">
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import "../../common//style/mixins.scss";
.search {
  width: 100%;
  .search_form {
    width: 100%;
    display: flex;
    @include clearFix();
    margin-top: 45px;
    background-color: #fff;
    padding: 12px 8px;

    input {
      width: 300px;
      height: 35px;
      padding: 0 4px;
      border-radius: 2px;
      font-weight: bold;
      outline: none;

      &.search_input {
        float: left;
        width: 79%;
        border: 4px solid #f2f2f2;
        font-size: 14px;
        color: #333;
        background-color: #f2f2f2;
      }

      &.search_submit {
        float: right;
        width: 18%;
        border: 4px solid #02a774;
        font-size: 16px;
        color: #fff;
        background-color: #02a774;
      }
    }
  }
}
</style>