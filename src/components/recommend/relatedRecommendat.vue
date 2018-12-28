<template>
  <div class="clearfix recommend-wrapper relatedRecommendat">
    <span class="recommend-title">相关服务推荐</span>
    <div class="col-xs-12 m-cover recommend-content">
      <div class="recommend-text-container"><h3 class="title">寻找技术资源，实现创新升级</h3>
        <p class="text">用我的专业，换你省心省力</p>
        <div style="display:inline-block;">
          <div>
            <div class="btn btn-recommend">帮我找</div>
          </div>
        </div>
      </div>
      <div class="image-container"></div>
      <span class="image-title-container">可多次脱模的高性价比橡胶轮胎脱模剂</span></div>
  </div>
</template>

<script>
  export default {
    name: "relatedRecommendat"
  }
</script>

<style lang="less">
  .recommend-wrapper {
    margin-bottom: 30px;
    color: #fff;
    .recommend-title {
      display: inline-block;
      margin-top: 22px;
      margin-bottom: 18px;
      height: 20px;
      line-height: 22px;
      font-size: 18px;
      padding-right: 6px;
      border-right: 5px solid #f7b52d;
      color: #1f86ed;
      font-weight: 700;
    }
    .recommend-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 175px;
      padding-right: 175px;
      height: 240px;
      width: 100%;
      background: url(../../assets/technologies-list.gif);
      .title{
        margin-bottom: 4px;
        padding-top: 26px;
        font-size: 42px;
        letter-spacing: 2px;
        font-weight: 700;
      }
      .text{
        margin-bottom: 20px;
        letter-spacing: 6px;
        font-size: 22px;
      }
      .btn-recommend{
        width: 118px;
        height: 36px;
        line-height: 22px;
        border-radius: 36px;
        color: #333;
        background-color: #ffd648;
        font-size: 18px;
        font-weight: 700;
      }
      .image-container{
        margin-left: -34px;
        width: 200px;
        height: 200px;
        border-radius: 200px;
        border: 6px solid #4577b3;
        background-size: cover;
        background-image: url(../../assets/technologies-list-image.jpg);
      }
      .image-title-container{
        width: 12px;
        font-size: 10px;
        line-height: 1;
      }
    }
  }
</style>
