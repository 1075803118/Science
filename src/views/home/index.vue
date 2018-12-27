<template>
  <div class="home">
      <home-components></home-components>
  </div>
</template>

<script>

  import homeComponents from '@/components/homeComponents/homeComponents.vue'    //首页所有元素结合
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

    background: #eee;
  }
</style>
