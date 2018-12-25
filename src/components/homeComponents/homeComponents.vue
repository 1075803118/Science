<template>
  <div>
    <banner></banner>
    <news-list></news-list>
    <listX></listX>
    <technology></technology>
    <expert></expert>
  </div>
</template>

<script>

  import banner from './banner/index.vue'    //头部轮播加新闻
  import newsList from './newsList/index.vue'//新闻列表轮播展示
  import listX from './listX/index.vue'//内容事件展示
  import technology from './technology/index.vue'//汇聚全球技术 助力企业升级
  import expert from './expert/index.vue'//行业顶尖专家 资深技术顾问
  export default {
    name: "homeComponents",
    components:{
      banner,
      newsList,
      listX,
      technology,
      expert
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
</style>
