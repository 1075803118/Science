<template>
  <div class="m-float-buttons allFloat">
    <div class="btn btn-primary btn-wechat">
      微信客服
      <div class="wechat-container"><img src="../../assets/wx-qrcode.jpg">
        打开微信<br>“扫一扫”
      </div>
    </div>
    <div>
      <div>
        <div class="btn btn-primary btn-consult">
          留言反馈
        </div>
      </div>
    </div>
    <backTheTopJs number="0" time="500" class="btn btn-primary-reverse btn-back-top">></backTheTopJs>
  </div>
</template>

<script>
  import backTheTopJs from "@/components/backTheTopJs/index.vue"
  export default {
    name: "allFloat",
    components:{
      backTheTopJs
    },
    methods:{

    }
  }
</script>

<style lang="less">
  .allFloat.m-float-buttons{
    position: fixed;
    right: 20px;
    bottom: 17%;
    width: 44px;
    z-index: 9997;
    .btn-wechat{
      &:hover{
        &:before{
          position: absolute;
          left: -14px;
          top: -1px;
          content: "";
          display: block;
          width: 10px;
          height: 18px;
          border-top: 9px solid transparent;
          border-left: 10px solid #1f86ed;
          border-bottom: 9px solid transparent;
        }
        &:after{
          position: absolute;
          left: -14px;
          top: -2px;
          content: "";
          display: block;
          width: 12px;
          height: 134px;
          background-color: transparent;
        }
        .wechat-container{
          left: -114px;
          width: 100px;
          height: 134px;
        }
      }
    }
    .wechat-container{
      position: absolute;
      top: -2px;
      left: 0;
      width: 0;
      height: 0;
      overflow: hidden;
      transition: all .2s ease-in-out;
      border: 2px solid #1f86ed;
      background-color: #fff;
      color: #1f86ed;
      font-size: 14px;
      img{
        width: 100%;
      }
    }
    .btn{
      margin-bottom: 10px;
      padding: 0;
      height: 44px;
      width: 44px;
      border-radius: 0;
      font-size: 28px;
      border-width: 2px;
    }
    .btn-wechat,.btn-consult{
      position: relative;
      font-size: 14px;
      white-space: normal;
      line-height: 1;
      padding: 6px 0;
      &:hover{
        color: #fff;
        background-color: #286090;
        border-color: #204d74;
      }
    }
    .btn-primary, .btn-primary:focus{
      background-color: #1f86ed;
      border-color: #1f86ed;
      color: #fff;
    }
    .btn-primary-reverse{
      background-color: #fff;
      border-color: #1f86ed;
      color: #1f86ed;
    }
    .btn-back-top{
      transform: rotate(-90deg);
    }
  }
</style>
