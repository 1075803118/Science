<template>
  <div class="list screen">
    <div class="list-header">
      <div class="filter-wrapper">
        <nav>
          <choice :list="list"></choice>
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
  import choice from '../screen/child/choice.vue'
  export default {
    name: "screen",
    components:{
      choice
    },
    data(){
      return{
        list:[
          {
            name:'所属领域',
            child:[
              {
                name:'不限'
              },
              {
                name:'能源电力'
              },
              {
                name:'环境工程'
              },
              {
                name:'化学化工'
              },
              {
                name:'材料科技'
              },
              {
                name:'生农医药'
              },
              {
                name:'机械电子'
              }
            ]
          },
          {
            name:'应用行业',
            child:[
              {
                name:'不限'
              },
              {
                name:'环境工程'
              },
              {
                name:'化学化工'
              },
              {
                name:'材料科技'
              },
              {
                name:'生农医药'
              },
              {
                name:'机械电子'
              },
              {
                name:'机械电子'
              },
              {
                name:'机械电子'
              },
              {
                name:'机械电子'
              },
              {
                name:'机械电子'
              },
              {
                name:'机械电子5555'
              }
            ]
          }
        ],
      }
    },
    created(){


      // var heightCss = window.getComputedStyle(this.$refs.ul).height;
    },
    mounted(){

    },
    methods:{

    }
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
    top: 16px;
    right: 10px;
    height: 20px;
    transition: transform .1s;
    transform: rotate(0deg);
    display: none;
    &.active{
      display: block;
    }
    &.flg{
      transform: rotate(-180deg);
    }
    .m-icon{
      display: block;
      width: 20px;
      height: 20px;
      text-align: center;
    }
  }
</style>
