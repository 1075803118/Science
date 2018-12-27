<template>
  <div class="list screen">
    <div class="list-header">
      <div class="filter-wrapper">
        <nav>
          <article class="filter">
            <div class="filter-label">所属领域</div>
            <ul class="filter-items">
              <li class="filter-item">
                <div class="item-content"><span class="no-limit">不限</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content active"><span>能源电力</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>环境工程</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>化学化工</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>材料科技</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>生农医药</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>机械电子</span></div>
              </li>
            </ul>
            <div class="more" style=""><span class="m-icon"><i class="fa fa-chevron-circle-down"></i></span></div>
          </article>
          <article class="filter">
            <div class="filter-label">应用行业</div>
            <ul class="filter-items">
              <li class="filter-item">
                <div class="item-content active"><span class="no-limit">不限</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>环保行业</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>化工新材料行业</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>IT|通信|电子|互联网</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>生产|加工|制造</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>能源|电力</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>其它</span></div>
              </li>
            </ul>
            <div class="more" style="display: none;"><span class="m-icon"><i class="iconfont icon-more"></i></span></div>
          </article>
          <article class="filter">
            <div class="filter-label">成熟度</div>
            <ul class="filter-items">
              <li class="filter-item">
                <div class="item-content active"><span class="no-limit">不限</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>小试</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>中试</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>生试</span></div>
              </li>
            </ul>
            <div class="more" style="display: none;"><span class="m-icon"><i class="iconfont icon-more"></i></span></div>
          </article>
          <article class="filter">
            <div class="filter-label">来源地</div>
            <ul class="filter-items">
              <li class="filter-item">
                <div class="item-content active"><span class="no-limit">不限</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>中国</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>中国(香港)</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>中国(台湾)</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>美国</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>德国</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>英国</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>日本</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>俄罗斯</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>法国</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>荷兰</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>新加坡</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>以色列</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>澳大利亚</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>奥地利</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>加拿大</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>芬兰</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>韩国</span></div>
              </li>
            </ul>
            <div class="more"><span class="m-icon"><i class="iconfont icon-more"></i></span></div>
          </article>
          <article class="filter">
            <div class="filter-label">合作标签</div>
            <ul class="filter-items">
              <li class="filter-item">
                <div class="item-content active"><span class="no-limit">不限</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>股权融资合作</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>市场渠道合作</span></div>
              </li>
              <li class="filter-item">
                <div class="item-content"><span>落地孵化合作</span></div>
              </li>
            </ul>
            <div class="more" style="display: none;"><span class="m-icon"><i class="iconfont icon-more"></i></span></div>
          </article>
        </nav>
      </div>
      <div class="list-filter-right">
        <div class="technology-list-item-simple"><a href="javascript:void(0)" class="list-item-prefix">推荐技术</a><a
          href="/technologies/5951bddb263ee32ce2550e63" class="list-item-wrapper" target="_blank">
          <div class="m-cover"
               style="background-image: url(https://res.maikeji.cn/FgIhwvNzGxNJ5mEurIsvQw7euUBu);">
            <!----></div>
          <div class="list-item-content"><h3 class="list-item-title">可多次脱模的高性价比橡胶轮胎脱模剂</h3>
            <p class="list-item-text-container"><span class="m-icon">来源地：中国
        </span><!----><span class="pull-right maturity-tag">生试阶段</span></p></div>
        </a></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "screen"
  }
</script>

<style lang="less">
  article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary{
    display: block;
  }
    .screen{
      padding: 22px 0;
      min-width: 1240px;
        .list-header{
          position: relative;
          padding-right: 330px;
          min-height: 200px;
          .filter-wrapper{
            width: 100%;
            padding: 15px 0 15px 30px;
            text-align: center;
            border: 1px solid #efefef;
            background-color: #fafafa;
            nav{
              .filter{
                position: relative;
                margin-bottom: 0;
                list-style: none;
                color: #707070;
                font-size: 14px;
                text-align: left;
                height: 55px;
                overflow: hidden;
                transition: height .1s;
                .filter-label{
                  position: absolute;
                  height: 45px;
                  line-height: 45px;
                  font-weight: 700;
                }
                .filter-items{
                  position: relative;
                  padding-left: 94px;
                  margin-bottom: 10px;
                  .filter-item{
                    display: inline-block;
                    margin-top: 9px;
                    margin-right: 15px;
                    .item-content{
                      cursor: pointer;
                      display: inline-block;
                      span{
                        position: relative;
                        display: block;
                        padding: 7px 12px;
                        line-height: 1;
                        overflow: hidden;
                      }
                      &.active{
                        span{
                          background-color: #e3f1ff;
                          color: #0a539a;
                          outline: 1px solid #4dafed;
                          &.no-limit{
                            &:before{
                              content: "";
                              background-color: transparent;
                            }
                            &:after{
                              content: "";
                              position: absolute;
                              top: -3px;
                              right: 2px;
                              color: #fff;
                              font-size: 10px;
                            }
                          }
                          &:before{
                            position: absolute;
                            top: -18px;
                            right: -50%;
                            content: " ";
                            width: 100%;
                            height: 28px;
                            transform: rotate(35deg);
                            -ms-transform: rotate(35deg);
                            -moz-transform: rotate(35deg);
                            -webkit-transform: rotate(35deg);
                            -o-transform: rotate(35deg);
                            background-color: #5babfa;
                          }
                          &:after{
                            content: "x";
                            position: absolute;
                            top: -3px;
                            right: 2px;
                            color: #fff;
                            font-size: 10px;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          .list-filter-right{
            position: absolute;
            top: 0;
            right: 0;
            width: 248px;
            height: 194px;
            .technology-list-item-simple{
              position: relative;
              margin-top: 0;
              padding:0;
              min-height: 260px;
              .list-item-prefix{
                width: 48px;
                height: 38px;
                top: -2px;
                font-size: 12px;
                left: 12px;
                position: absolute;
                padding: 5px 10px;
                background: url(../../assets/bg-recommend-tag.png) no-repeat 50%;
                background-size: cover;
                z-index: 11;
                color: #fff;
                text-align: center;
                line-height: 1.2;
              }
              .list-item-wrapper{
                border: 1px solid #eee;
                overflow: hidden;
                display: block;
                .m-cover{
                  background-size: cover;
                  background-position: 50%;
                  background-repeat: no-repeat;
                  background-color: #1f86ed;
                  z-index: 10;
                  position: relative;
                  width: 100%;
                  height: 140px;
                }
                .list-item-content{
                  position: relative;
                  display: -ms-flexbox;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-around;
                  padding: 10px;
                  width: 100%;
                  height: 54px;
                  color: #898989;
                  font-size: 15px;
                  line-height: 20px;
                  z-index: 9;
                  .list-item-text-container{
                    display: none;
                  }
                  .list-item-title{
                    margin-top: 0;
                    margin-bottom: 0;
                    height: 50px;
                    color: #333;
                    overflow: hidden;
                    width: 226px;
                    font-size: 13px;
                    line-height: 17px;
                  }
                }
              }
            }
          }
        }
    }
  .filter .more{
    position: absolute;
    cursor: pointer;
    top: 10px;
    right: 10px;
    height: 20px;
    transform: rotate(-180deg);
    transition: transform .1s;
    .m-icon{
      display: block;
      width: 20px;
      height: 20px;
      text-align: center;
    }
  }
</style>
