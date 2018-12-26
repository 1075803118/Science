<template>
  <div class="banner">
    <ul class="banner-img">
      <li v-for="(item,index) in urlList" :class="{active:index === listId}" @mouseenter="mouseoverS(index)"
          @mouseleave="mouseoutS(index)">
        <img :src="item.img">
      </li>
    </ul>
    <div class="w">
      <ul class="flex" :class="{active:true}">
        <li v-for="(item,index) in urlList" :class="{active:index===listId}" @mouseenter="mouseoverSL(index)">
          {{item.name}}
        </li>
      </ul>
      <div class="tab-container">
        <div class="tab-header">
          <div class="tab-header-item"
               v-for="(item,index) in txtList"
               :class="{active:index === txtIndex}"
               @click="txtClick(index)">{{item.title}}
          </div>
        </div>
        <template v-for="item in txtChilid">
          <div class="tab-body active">
            <div v-for="item in item.txtChild" class="tab-body-item">
              <div class="itema">
                <div class="title overflow-hidden"><span class="title-prefix">·&nbsp;</span>{{item.name}}</div>
                <div class="text overflow-hidden">
                  {{item.hidden}}
                </div>
              </div>
            </div>
          </div>
          <div class="tab-footer">
            <span class="m-icon">
              <i class="iconfont icon-new"></i>
            </span>
            <span class="text">
              <span class="count" style="">{{item.count}}</span>
              &nbsp;{{item.countName}}&gt;&gt;
            </span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "banner",
    data() {
      return {
        urlList: [
          {
            href: '',
            img: require("../../../assets/banner1.jpg"),
            name: '一站式技术创新服务平台',
          },
          {
            href: '',
            img: require("../../../assets/banner2.jpg"),
            name: '一站式技术创新服务平台',
          },
          {
            href: '',
            img: require("../../../assets/banner3.jpg"),
            name: '一站式技术创新服务平台',
          }
        ],
        listId: 0,
        IsFlexUl: false,
        time: '',
        txtIndex: 0,
        txtList: [
          {
            title: "热门技术",
            txtChild: [
              {
                name: '可多次脱模的高性价比橡胶轮胎脱模剂',
                hidden: '高氮复合肥、熔体造粒'
              },
              {
                name: '重金属污染耕地修复用重金属稳定剂',
                hidden: '聚谷氨酸、重金属稳定、生物硅、吸附材料、耕地修复'
              },
              {
                name: '可多次脱模的高性价比橡胶轮胎脱模剂',
                hidden: '高氮复合肥、熔体造粒'
              },
              {
                name: '可多次脱模的高性价比橡胶轮胎脱模剂',
                hidden: '高氮复合肥、熔体造粒'
              }
            ],
            count: 2090,
            countName: '项优质技术项目正在寻求合作'
          },
          {
            title: "热门活动",
            txtChild: [
              {
                name: '可多次脱模的高性价比橡胶轮胎脱模剂11111111111',
                hidden: '高氮复合肥、熔体造粒'
              },
              {
                name: '重金属污染耕地修复用重金属稳定剂',
                hidden: '聚谷氨酸、重金属稳定、生物硅、吸附材料、耕地修复'
              },
              {
                name: '可多次脱模的高性价比橡胶轮胎脱模剂',
                hidden: '高氮复合肥、熔体造粒'
              },
              {
                name: '可多次脱模的高性价比橡胶轮胎脱模剂',
                hidden: '高氮复合肥、熔体造粒'
              }
            ],
            count: 2090,
            countName: '项优质技术项目正在寻求合作'
          },
          {
            title: "热门资讯",
            txtChild: [
              {
                name: '可多次脱模的高性价比橡胶轮胎脱模剂',
                hidden: '高氮复合肥、熔体造粒'
              },
              {
                name: '重金属污染耕地修复用重金属稳定剂',
                hidden: '聚谷氨酸、重金属稳定、生物硅、吸附材料、耕地修复'
              },
              {
                name: '可多次脱模的高性价比橡胶轮胎脱模剂',
                hidden: '高氮复合肥、熔体造粒'
              },
              {
                name: '可多次脱模的高性价比橡胶轮胎脱模剂',
                hidden: '高氮复合肥、熔体造粒'
              }
            ],
            count: 2090,
            countName: '项优质技术项目正在寻求合作'
          }
        ],
        txtChilid: []
      }
    },
    created() {
      this.time = setInterval(() => {
        this.setIntervalList(this.listId)
      }, 2000);
      this.txtClick(0)
    },
    methods: {
      txtClick(index) {

        this.txtChilid = [this.txtList[index]];
        this.txtIndex = index;
        console.log(this.txtChilid)
      },
      isSetInterval(id, isTrue) {
        let time = this.time;
        let ids = id
        if (isTrue) {
          clearInterval(this.time);
        } else {
          clearInterval(time);
          time = setInterval(() => {
            this.setIntervalList(ids)
          }, 2000);
        }
        console.log(id)

      },
      setIntervalList(id) {
        let listId = id;
        listId++
        if (listId >= this.urlList.length) {
          listId = 0
        }
        this.listId = listId;
        console.log(this.listId)
      },
      mouseoverS(id) {
        this.IsFlexUl = true
      },
      mouseoutS(id) {
        this.IsFlexUl = false
      },
      mouseoverSL(id) {
        this.setIntervalList(id - 1)
      },

    }
  }
</script>

<style lang="less">

  .banner {
    width: 100%;
    overflow: hidden;
    position: relative;
    .tab-container {
      position: absolute;
      right: 0;
      bottom: 73px;
      padding: 0 15px;
      width: 342px;
      height: 282px;
      background-color: rgba(0, 0, 0, .6);
      z-index: 11;
      color: #999;
      .tab-footer {
        height: 50px;
        line-height: 50px;
        color: #fff;
        border-top: 1px solid hsla(0, 0%, 100%, .3);
        text-align: left;
        .m-icon {
          margin-right: 10px;
          font-size: 20px;
        }
        .text {
          font-size: 14px;
          text-decoration: underline;
          cursor: pointer;
          .count {
            font-size: 18px;
          }
        }
      }
      .tab-body {
        display: none;
        height: 182px;
        &.active {
          display: block;
        }
        .tab-body-item {
          position: relative;
          cursor: pointer;
          &:first-child .itema {
            line-height: 60px
          }
          &:nth-child(2) .itema {
            line-height: 50px
          }
          &:nth-child(3) .itema {
            line-height: 40px
          }
          &:nth-child(4) .itema {
            line-height: 30px
          }
          .itema {
            color: inherit;
            height: 45.5px;
            text-align: left;
            .text {
              display: none;
              font-size: 12px;
            }
          }
          .overflow-hidden {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-all;
          }

          &:hover {
            .itema {
              display: flex;
              -ms-flex-direction: column;
              flex-direction: column;
              -ms-flex-pack: distribute;
              justify-content: space-around;
              margin-right: -15px;
              padding: 3px 0;
              background-color: #fff;
              line-height: 1.4;
            }
            .title {
              margin-bottom: 2px;
              color: #333;
            }
            .text {
              display: block;
            }
            .title-prefix {
              display: none;
            }
          }
          &:hover:before {
            content: "";
            position: absolute;
            left: -28px;
            height: 45.5px;
            width: 28px;
            background-color: #fff;
          }

          &:hover:after {
            content: "";
            position: absolute;
            left: -28px;
            height: 7px;
            width: 0px;
            border-top: 7px solid #b5b5b5;
            border-left: 13px solid transparent
          }
        }
      }
      .tab-header {
        display: flex;
        justify-content: space-around;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid hsla(0, 0%, 100%, .3);
        .tab-header-item {
          position: relative;
          bottom: -2px;
          width: 70px;
          text-align: center;
          cursor: pointer;
          &.active {
            color: #fff;
            border-bottom: 2px solid #fff;
          }
        }
      }
    }
    .flex {
      display: flex;
      justify-content: space-between;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      line-height: 47px;
      height: 3px;
      overflow: hidden;
      text-align: center;
      transition: height .2s ease-out;
      z-index: 10;
      color: #fff;
      &.active {
        height: 47px;
        bottom: 3px;
      }
      li {
        width: 33.3333%;
        background-color: rgba(0, 0, 0, .2);
        cursor: pointer;
        &.active {
          background-color: rgba(245, 166, 35, .8)
        }
      }
    }
  }

  .banner-img {
    position: relative;
    height: 453px;
    li {
      position: absolute;
      top: 0;
      opacity: 0;
      z-index: 9;
      transition: all 1s;
      cursor: pointer;
      &.active {
        opacity: 1;
      }
    }
  }
</style>
