<script lang="ts" setup>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

</script>

<template>
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
</template>

<style lang="scss">

</style>