<template>
  <block-con :menuList="menuList" :h2N="h2N" :h2XN="h2XN" :btn="btn" bargeundColor="#f5f5f5">
    <div class="row expert">
      <div class="technology-list-item">
        <div class="expert-info">
          <div class="m-cover m-avatar"
               style="background-image: url(https://res4.maikeji.cn/FlcdTlvZyfwZe8gLMBqMPwTagWoa);"></div>
          <h3 class="name">钱峰</h3>
          <p class="institution">研究员</p>
          <div class="tag-container"><span class="tag overflow-hidden">新型药物</span><span class="tag overflow-hidden">呼吸性疾病发病机理与分子机制</span><span
            class="tag overflow-hidden">高通量药物</span></div>
        </div>
        <div class="expert-info-caption">
            <div>
              <p class="text">概况实验室简要介绍代表成果突出研究成果教学工作本科生：《微生物学与免疫学...</p>
              <span class="m-link">查看详情<span class="m-icon"><i class="iconfont icon-chakanxiangqing"></i></span></span>
            </div>
        </div>
      </div>
      <div class="technology-list-item">
        <div class="expert-info">
          <div class="m-cover m-avatar"
               style="background-image: url(https://res4.maikeji.cn/FlcdTlvZyfwZe8gLMBqMPwTagWoa);"></div>
          <h3 class="name">钱峰</h3>
          <p class="institution">研究员</p>
          <div class="tag-container"><span class="tag overflow-hidden">新型药物</span><span class="tag overflow-hidden">呼吸性疾病发病机理与分子机制</span><span
            class="tag overflow-hidden">高通量药物</span></div>
        </div>
        <div class="expert-info-caption">
          <div>
            <p class="text">概况实验室简要介绍代表成果突出研究成果教学工作本科生：《微生物学与免疫学...</p>
            <span class="m-link">查看详情<span class="m-icon"><i class="iconfont icon-chakanxiangqing"></i></span></span>
          </div>
        </div>
      </div>
      <div class="technology-list-item">
        <div class="expert-info">
          <div class="m-cover m-avatar"
               style="background-image: url(https://res4.maikeji.cn/FlcdTlvZyfwZe8gLMBqMPwTagWoa);"></div>
          <h3 class="name">钱峰</h3>
          <p class="institution">研究员</p>
          <div class="tag-container"><span class="tag overflow-hidden">新型药物</span><span class="tag overflow-hidden">呼吸性疾病发病机理与分子机制</span><span
            class="tag overflow-hidden">高通量药物</span></div>
        </div>
        <div class="expert-info-caption">
          <div>
            <p class="text">概况实验室简要介绍代表成果突出研究成果教学工作本科生：《微生物学与免疫学...</p>
            <span class="m-link">查看详情<span class="m-icon"><i class="iconfont icon-chakanxiangqing"></i></span></span>
          </div>
        </div>
      </div>
      <div class="technology-list-item">
        <div class="expert-info">
          <div class="m-cover m-avatar"
               style="background-image: url(https://res4.maikeji.cn/FlcdTlvZyfwZe8gLMBqMPwTagWoa);"></div>
          <h3 class="name">钱峰</h3>
          <p class="institution">研究员</p>
          <div class="tag-container"><span class="tag overflow-hidden">新型药物</span><span class="tag overflow-hidden">呼吸性疾病发病机理与分子机制</span><span
            class="tag overflow-hidden">高通量药物</span></div>
        </div>
        <div class="expert-info-caption">
          <div>
            <p class="text">概况实验室简要介绍代表成果突出研究成果教学工作本科生：《微生物学与免疫学...</p>
            <span class="m-link">查看详情<span class="m-icon"><i class="iconfont icon-chakanxiangqing"></i></span></span>
          </div>
        </div>
      </div>
    </div>
  </block-con>
</template>

<script>
  import blockCon from '../blockCom/index'

  export default {
    name: "expert",
    components: {
      blockCon
    },
    data() {
      return {
        menuList: [
          {
            name: '医药科学',
            f: '/'
          },
          {
            name: '医药科学',
            f: '/'
          },
          {
            name: '医药科学',
            f: '/'
          },
          {
            name: '医药科学',
            f: ''
          },
        ],
        h2N: '行业顶尖专家 资深技术顾问',
        h2XN: '10000+合作技术方 更有全网专家信息可检索',
        btn: '查看更多医药科学专家',
        h2XNHref:''
      }
    }
  }
</script>

<style lang="less">
  .section-block .expert{
    display: flex;
  }
  .section-block .expert .technology-list-item{
    position: relative;
    width: 307px;
    height: 350px;
    border-right: 1px solid #eee;
    &:last-child{
      border: none;
    }
      .expert-info{
        height: 350px;
        .m-avatar:before{
          border-color: #f5f5f5;
        }
        .m-avatar:before{
          content: "";
          position: absolute;
          top: -6px;
          left: -6px;
          width: 144px;
          height: 144px;
          border-radius: 144px;
          border: 1px solid #dadada;
        }
        .m-avatar{
          height: 116px;
          width: 116px;
          min-width: 116px;
          border-radius: 116px;
          border: 1px solid #666;
          position: relative;
          margin: 0 auto;
          line-height: 126px;
          color: #666;
          text-align: center;
          font-size: 58px;
          &:before{
            top: 0;
            left: 0;
            height: 114px;
            width: 114px;
            border-radius: 114px;
            border: 8px solid #fff;
          }
        }
        .m-cover{
          background-color: #1f86ed;
          background-size: cover;
          background-position: 50%;
          background-repeat: no-repeat;
        }
        .name{
          margin-top: 18px;
          margin-bottom: 18px;
          font-size: 24px;
          color: #111d23;
          border-collapse: separate;
          text-align: center;
        }
        .institution{
          margin-bottom: 20px;
          font-size: 18px;
          color: #666;
          height: 22px;
          text-align: center;
        }
        .tag-container{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          padding: 0 55.5px;
          width: 306px;
          overflow: hidden;
          text-align: left;
          .tag{
            display: inline-block;
            margin-bottom: 9px;
            padding: 0 14px;
            min-width: 90px;
            max-width: 194px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            border-radius: 0;
            font-size: 15px;
            background-color: transparent;
            color: #849194;
            border: 1px solid #849194;
          }
          .overflow-hidden{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-all;
          }
        }
      }
    &:hover .expert-info-caption{
      display: block;
    }
    .expert-info-caption{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .expert-info-caption{
      display: none;
      position: absolute;
      top: 0;
      right: 0;
      padding: 55px 55.5px 48px;
      width: 307px;
      height: 350px;
      background-color: #5877a4;
      z-index: 11;
      color: #fff;
      .text{
        margin: 0 auto;
        width: 180px;
        font-size: 14px;
        line-height: 2.2;
        color: #fff;
        text-align: left;
        height: 90px;
        overflow: hidden;
      }
      .m-link{
        display: block;
        margin-top: 50px;
        text-align: center;
        font-size: 21px;
        color: #fff;
      }
      .m-icon{
        display: inline-block;
        margin-left: 7px;
        font-size: 21px;
        vertical-align: .5px;
      }
    }
  }
</style>
