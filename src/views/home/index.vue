<template>
  <div class="home">
      <home-components></home-components>
  </div>
</template>

<script>

  import homeComponents from '@/components/homeComponents/homeComponents.vue'    //头部轮播加新闻
  export default {
    name: "home",
    components:{
      homeComponents,
    }
  }
</script>

<style lang="less">
  .home{
    width: 100%;
    height: 100vh;
    background: #eee;
  }
  .w{
    max-width: 1240px;
    width: 100%;
    margin: auto;
    position: relative;
  }
  .pull-left {
    float: left !important;
  }
  .pull-right {
    float: right!important;
  }
</style>
