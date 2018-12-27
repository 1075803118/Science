<template>
  <div class="floor-nav-container floatS" :class="{active:IsScroll>=650}">
    <backTheTopJs number="650" time="500" :class="{active:IsScroll<1300&&IsScroll>=650}" class="list-item">找<br>技术</backTheTopJs>
    <backTheTopJs number="1300" time="500" :class="{active:IsScroll<2000&&IsScroll>=1300}" class="list-item">问<br>专家</backTheTopJs>
    <backTheTopJs number="2000" time="500" :class="{active:IsScroll<2550&&IsScroll>=2000}" class="list-item">报<br>活动</backTheTopJs>
    <backTheTopJs number="2550" time="500" :class="{active:IsScroll<3500&&IsScroll>=2550}" class="list-item no-bottom">学<br>创新</backTheTopJs>
    <backTheTopJs number="0" time="500" class="list-item list-url no-bottom">回到顶部</backTheTopJs>
  </div>
</template>

<script>
  import backTheTopJs from "@/components/backTheTopJs/index.vue"
  export default {
    name: "floatS",
    components:{
      backTheTopJs
    },
    created(){
      window.addEventListener('scroll', this.handleScroll)
    },
    data(){
      return{
        IsScroll:0
      }
    },
    methods:{
      handleScroll(){
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        this.IsScroll = scrollTop
      }
    }
  }
</script>

<style lang="less">

  @media screen and (max-width: 1340px) {
    .floatS.floor-nav-container {
      margin-left:0;
      left: 10px
    }
  }

  @media screen and (min-width: 1340px) {
    .floatS.floor-nav-container {
      margin-left:50%;
      left: -720px
    }
  }
  .floatS.floor-nav-container{
    position: fixed;
    bottom: 12%;
    padding-top: 3px;
    width: 46px;
    z-index: 10;
    color: #fff;
    font-size: 14px;
    background-color: #086dbb;
    display: none;
    &.active{
      display: block;
    }
    .list-item{
      padding: 12px 8px;
      line-height: 1.2;
      text-align: center;
      background-color: #515151;
      cursor: pointer;
      &.no-bottom:before {
        display: none
      }
      &:before{
        content: " ";
        display: block;
        position: relative;
        left: 5px;
        top: 44px;
        width: 20px;
        height: 1px;
        background-color: #fff;
      }
      &.active,&:hover{
        background-color: #f3ab1e;
      }
      &.list-url{
        background-color: #ccc;
        color: #fff;
      }
    }
  }
</style>
