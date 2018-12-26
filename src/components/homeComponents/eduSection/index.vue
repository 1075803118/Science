<template>
  <block-con :h2N="h2N" :h2XN="h2XN" :menuList="menuList" :btn="btn" bargeundColor="#fff">
    <div class="eduSection">
      <div class="edu-list">
        <div>
          <div class="article-item" >
            <div class="m-cover-img-container"><img src="https://res4.maikeji.cn/FsBp1PhNvVhtkbB4pwqXl490NLuZ"
                                                    alt="迈科技为中国化工企业500强对接新项目，蓄力企业发展新增长" class="img-animate m-cover-img">
            </div>
            <div class="title">【企业案例】迈科技为中国化工企业500强对接新项目，...</div>
          </div>
          <div class="article-item-slim ellipsis" >
            高效！“自助”技术对接，达成合作仅用2天...
          </div>
          <div class="article-item-slim ellipsis" >
            【迈科技】以市场为导向，专业科技服务让成...
          </div>
        </div>
        <div>
          <div class="article-item" >
            <div class="m-cover-img-container"><img src="https://res4.maikeji.cn/Fmwe-h9Ou9eeL9p4AOe2c-NOC3WA"
                                                    alt="一图看懂2018年国家重点研发计划重点专项公示和进展状态" class="img-animate m-cover-img">
            </div>
            <div class="title">【服务指导】一图看懂2018年国家重点研发计划重点专...</div>
          </div>
          <div class="article-item-slim ellipsis" >
            你问我答 | 科研人员及科研助理实务问题...
          </div>
          <div class="article-item-slim ellipsis" >
            “科技创新券”让更多科技成果走出“深闺”
          </div>
        </div>
        <div>
          <div class="article-item" >
            <div class="m-cover-img-container"><img src="https://res4.maikeji.cn/FrfEbQZEO6UMuPUPO9lG9OPSeyBQ"
                                                    alt="孟晚舟被保释，华为反击震撼世界！" class="img-animate m-cover-img"></div>
            <div class="title">
              【行业观察】孟晚舟被保释，华为反击震撼世界！
            </div>
          </div>
          <div class="article-item-slim ellipsis" >
            最贵iphone发布，7nm的半导体工艺...
          </div>
          <div class="article-item-slim ellipsis" >
            科技部三定方案发布，成立成果转化与区域创...
          </div>
        </div>
        <div>
          <div class="article-item" >
            <div class="m-cover-img-container"><img src="https://res4.maikeji.cn/FqP9WOYwlbGDzRlEDLbgt_xt95vK"
                                                    alt="迈科技献策上海科技成果转化体系建设，项目研究成果质量被评优秀"
                                                    class="img-animate m-cover-img"></div>
            <div class="title">【迈科技新闻】迈科技献策上海科技成果转化体系建设，项...</div>
          </div>
          <div class="article-item-slim ellipsis " >
            上海技术转移“金手指”德清行，助建长三角...
          </div>
          <div class="article-item-slim ellipsis " >
            迈科技为浙江省重点软科学研究项目建言献策
          </div>
        </div>
      </div>
    </div>
  </block-con>
</template>


<script>
  import blockCon from '../blockCom/index'

  export default {
    name: "eduSection",
    components: {
      blockCon
    },
    data() {
      return {
        menuList: [],
        h2N: '闯创新之道 登浪潮之巅',
        h2XN: '解读企业技术创新的成功案例，分享技术创新的经验',
        h2XNHref: '',
        btn: '查看更多文章'
      }
    }
  }
</script>

<style lang="less">
  .eduSection{
    .edu-list{
      display: flex;
      justify-content: space-between;
      .article-item{
        position: relative;
        margin-bottom: 20px;
        width: 300px;
        height: 262px;
        color: #fff;
        border: 1px solid #eee;
        overflow: hidden;
        cursor: pointer;

        .m-cover-img-container{
          width: 300px;
          height: 180px;
          overflow: hidden;
          .img-animate{
            width: 300px;
            min-height: 100%;
            transform: scale(1);
            transition: all .2s;
            &:hover{
              transform: scale(1.2);
            }
          }
        }
        .title{
          padding: 20px 20px 16px;
          width: 100%;
          height: 82px;
          line-height: 23px;
          font-size: 18px;
          color: #333;
        }
      }
      .article-item-slim{
        margin-bottom: 6px;
        color: #333;
        cursor: pointer;
        width: 300px;
        &:hover{
          color: #1f86ed;
          text-decoration: underline;
        }
      }
    }
  }

</style>
