<template>
  <div class="floor-nav-container floatS" style="">
    <div class="list-item">找<br>技术</div>
    <div class="list-item">问<br>专家</div>
    <div class="list-item">报<br>活动</div>
    <div class="list-item no-bottom active">学<br>创新</div>
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
  }
</script>

<style lang="less">

  .floatS.floor-nav-container{
    position: fixed;
    bottom: 12%;
    padding-top: 3px;
    width: 46px;
    z-index: 10;
    color: #fff;
    margin-left: 50%;
    left: -720px;
    font-size: 14px;
    background-color: #086dbb;
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
      &.active{
        background-color: #f3ab1e;
      }
      &.list-url{
        background-color: #ccc;
        color: #fff;
      }
    }
  }
</style>
