<template>
  <div>
    <v-Head :backgrounds="background" :classFixed="classFixed" :classShadow="classShadow"></v-Head>
    <banner></banner>
    <news-list></news-list>
    <listX></listX>
    <technology></technology>
    <expert></expert>
    <activity></activity>
    <eduSection></eduSection>
    <Success></Success>
    <floatS></floatS>
  </div>
</template>

<script>
  import banner from './banner/index.vue'    //头部轮播加新闻
  import newsList from './newsList/index.vue'//新闻列表轮播展示
  import listX from './listX/index.vue'//内容事件展示
  import technology from './technology/index.vue'//汇聚全球技术 助力企业升级
  import expert from './expert/index.vue'//行业顶尖专家 资深技术顾问
  import activity from './activity/index.vue'//行业热门活动 技术交流盛会
  import eduSection from './eduSection/index.vue'//闯创新之道 登浪潮之巅
  import Success from './Success/index.vue'//成功案例
  import floatS from './floatS/index.vue'//左边悬浮框
  import oneHead from '@/components/oneHead/index.vue'
  export default {
    name: "homeComponents",
    components:{
      "v-Head":oneHead,
      banner,
      newsList,
      listX,
      technology,
      expert,
      activity,
      eduSection,
      Success,
      floatS
    },
    data(){
      return{
        background:this.$route.meta.background,
        classFixed:this.$route.meta.classFixed,
        classShadow:this.$route.meta.boxShadow
      }
    },
    mounted(){
      window.addEventListener('scroll', this.handleScroll)
    },
    methods:{
      handleScroll(){
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if(scrollTop > 550 ){
          this.background = '#2c2c2c'
          this.classFixed = 'fixed'
          this.classShadow = '0 2px 4px #2c2c2c'
        }else{
          this.background = this.$route.meta.background
          this.classFixed = this.$route.meta.classFixed
          this.classShadow = this.$route.meta.boxShadow
        }
      }
    }
  }
</script>

<style lang="less">
  .home{
    width: 100%;
    background: #eee;
  }
  .w{
    max-width: 1240px;
    width: 100%;
    margin: auto;
    position: relative;
  }
  .ellipsis{
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap
  }
</style>
