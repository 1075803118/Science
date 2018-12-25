<template>
  <section class="section-block nav-section">
    <div class="w holy-grail">
      <div class="nav-item">
        <div class="left">
          <div class="title">找技术</div>
          <p class="text">2000+成熟技术项目</p></div>
        <div class="right m-icon" style="color:#2dd9b9;"><i class="iconfont icon-xiangmu"></i></div>
      </div>
      <div class="nav-item">
        <div class="left">
          <div class="title">问专家</div>
          <p class="text">10000+深度合作专家
          </p></div>
        <div class="right m-icon" style="color:#fec84b;"><i class="iconfont icon-zhuanjia-xuanzhong"></i></div>
      </div>
      <div class="nav-item">
        <div class="left">
          <div class="title">报活动</div>
          <p class="text">行业精英共同交流
          </p></div>
        <div class="right m-icon" style="color:#2ce0b8;"><i class="iconfont icon-act"></i></div>
      </div>
      <div class="nav-item">
        <div class="left">
          <div class="title">学创新</div>
          <p class="text">探讨企业创新发展
          </p></div>
        <div class="right m-icon" style="color:#7f9cfa;"><i class="iconfont icon-edu"></i></div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "listX"
  }
</script>

<style lang="less">
  .section-block{
    padding: 20px 0;
    background-color: #f5f5f5;
    .holy-grail{
      display: flex;
      justify-content: space-between;
      .nav-item{
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 0 10px;
        width: 236px;
        height: 110px;
        background-color: #fff;
        cursor: pointer;
        &:hover{
          box-shadow: 0 0 4px rgba(0,0,0,.3);
        }
        .title {
          margin-bottom: 6px;
          font-size: 24px;
          font-weight: 700;
          color: #666
        }
        .text {
          margin-bottom: 0;
          color: #999
        }
        .right {
          height: 56px;
          width: 56px;
          line-height: 56px;
          font-size: 56px
        }
      }
    }
  }
</style>
