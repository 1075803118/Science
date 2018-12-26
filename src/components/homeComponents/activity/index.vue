<template>
  <block-con :h2N="h2N" :h2XN="h2XN" :menuList="menuList" :btn="btn" bargeundColor="#fff" class="activityPage">
    <div class="activity">
      <div class="holy-grail">
        <div class="activity-item">
          <div class="activity-item-wrapper"><span class="m-icon"><i class="iconfont icon-fenxiang1"></i></span><span
            class="text">社群交流</span>
            <button class="btn btn-transparent">查看最新活动</button>
          </div>
        </div>
        <div class="activity-item">
          <div class="activity-item-wrapper"><span class="m-icon"><i class="iconfont icon-zhanhui"></i></span><span
            class="text">行业展会</span>
            <button class="btn btn-transparent">查看最新活动</button>
          </div>
        </div>
        <div class="activity-item">
          <div class="activity-item-wrapper"><span class="m-icon"><i class="iconfont icon-luntan"></i></span><span
            class="text">会议论坛</span>
            <button class="btn btn-transparent">查看最新活动</button>
          </div>
        </div>
        <div class="activity-item">
          <div class="activity-item-wrapper"><span class="m-icon"><i class="iconfont icon-shalongshike"></i></span><span
            class="text">圆桌沙龙</span>
            <button class="btn btn-transparent">查看最新活动</button>
          </div>
        </div>
        <div class="activity-item">
          <div class="activity-item-wrapper"><span class="m-icon"><i class="iconfont icon-person-copy"></i></span><span
            class="text">会员活动</span>
            <button class="btn btn-transparent">查看最新活动</button>
          </div>
        </div>
      </div>
    </div>
  </block-con>
</template>

<script>
  import blockCon from '../blockCom/index'

  export default {
    name: "activity",
    components: {
      blockCon
    },
    data() {
      return {
        menuList: [],
        h2N: '行业热门活动 技术交流盛会',
        h2XN: '参与到产业活动中 和技术方零距离交流',
        btn: '',
        h2XNHref:''
      }
    }
  }
</script>

<style lang="less">
  .activityPage.technology-section{
    height: 519px;
    padding-top: 20px;
    .w {
      max-width: 100%;
      background: #eee;
    }

  }

  .activity {
    max-width: 1240px;
    margin: auto;
    .holy-grail {
      display: flex;
      height: 360px;
      background-image: url(../../../assets/index-activity.jpg);
      .activity-item{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #fff;
        cursor: pointer;
        &:hover{
          background-color: rgba(52,126,202,.8);
          .activity-item-wrapper .btn-transparent{
            margin-top: 20px ;
            opacity: 1 !important;
          }
        }

        .activity-item-wrapper{
          margin-top: 100px;
          height: 240px;
          text-align: center;
          overflow: hidden;
          transition: all .2s cubic-bezier(.4,0,.2,1);
          .m-icon{
            display: block;
            height: 90px;
            font-size: 62px;
          }
          .text{
            font-size: 20px;
            font-weight: 700;
            letter-spacing: 4px;
          }
          .btn{
            display: block;
            margin: 40px auto 0;
            width: 102px;
            height: 32px;
            border-radius: 0;
            font-size: 12px;
            opacity: 0;
            transition: all .3s cubic-bezier(.4,0,.2,1);
          }
          .btn-transparent{
            background-color: transparent;
            border-color: #fff;
            color: #fff;
          }
        }
      }
    }
  }

</style>
