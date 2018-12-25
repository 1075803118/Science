<template>
  <div class="header">
    <div class="header-nav ">
      <ul class="header-nav-left">
        <li v-for="(item,index) in topList" :class="{'header-left-logo':index==0,active:index==Imessage}" @click="ItemClick(index)">
          <div class="item">
            {{item.name}}
          </div>
          <div class="m-show-target" v-if="item.child">
            <div class="target-list">
              <div class="target-item"  v-for="items in item.child">
                {{items.name}}
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="header-nav-right">
       <div class="header-nav-user">
         <div class="user-logo">
           <div class="msg-hint" style=""></div>
           <div class="m-cover">彭</div>
           <span class="m-icon">
            <i class="fa angle-down fa-2x"></i>
           </span>
         </div>
         <div class="m-show-target">
           <div class="target-list">
             <div class="target-item">个人中心</div>
             <div class="target-item">登出</div>
           </div>
         </div>
       </div>
        <div class="m-hover-show-container"><div class="m-hover-trigger"><div class="btnf">
          发布
        </div></div><div class="m-show-target">
          <div class="m-show-target-wrapper">
            <div class="btn-release-demand-container">
              <div class="demand-a">
                <i class="iconfont icon-chanpinjishu"></i>
              </div>
              <div class="m-link">发布技术</div>
            </div>
            <div class="divider"></div>
            <div class="btn-release-demand-container">
              <div class="demand-a active">
                <i class="iconfont icon-xuqiu1"></i></div>
              <div class="m-link">发布需求</div>
            </div></div></div></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "oneHead",
    data(){
      return{
        topList:[
          {
            name:'',
            href:'/'
          },
          {
            name:'首页',
            href:'/'
          },
          {
            name:'技术',
            href:'/',
            child:[
              {
                name:'所有技术',
                href:'/',
              },
              {
                name:'所有技术',
                href:'/',
              }
            ]
          },
          {
            name:'智库',
            href:'/',
            child:[
              {
                name:'所有技术',
                href:'/',
              },
              {
                name:'所有技术',
                href:'/',
              }
            ]
          },
          {
            name:'活动',
            href:'/'
          },
          {
            name:'资讯',
            href:'/'
          }
        ],
        lIndex:0
      }
    },
    computed:{
      Imessage(){
        return this.lIndex<=0?1:this.lIndex
      }
    },
    methods:{
      ItemClick(index){
        this.lIndex = index
      }
    }
  }
</script>

<style lang="less">
  .header{
    position: fixed;
    width: 100%;
    background: transparent;
    color: #fff;
    &.active{
      background: #000;
    }
    a{
      display: block;
    }
    &-nav {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-pack: justify;
      justify-content: space-between;
      margin: 0 auto;
      width: 1240px;
      letter-spacing: 1px;
      &-left,&-right {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: justify;
        justify-content: space-between;

      }
      &-left{
        .header-left-logo{
          margin-top: 0;
          margin-right: 40px;
          width: 50px;
          height: 70px;
          background: url("../../assets/logo.png") no-repeat 50%
        }
        li{
          width: 34px;
          margin: 0 10px;
          text-align: center;
          box-sizing: border-box;
          padding: 20px 0;
          height: 52px;
          line-height: 30px;
          cursor: pointer;
          position: relative;
          .item:hover{
            font-weight: 700;
          }
          &.active .item{
            color: #fff;
            font-weight: 700;
            border-bottom: 2px solid #fff;
          }
          &:hover .m-show-target{
              display: block;
          }
          .m-show-target{
            display: none;
            padding-top: 4px;
            width: 84px;
            height: 64px;
            border-radius: 4px;
            background: url(../../assets/technology-nav-container-border.png) no-repeat bottom;
            background-size: contain;
            position: absolute;
            z-index: 11;
            left: -25px;
            .target-list{
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              height: 100%;
              font-size: 12px;
              .target-item{
                box-sizing: content-box;
                height: 24px;
                line-height: 24px;
                &:first-child{
                  border-bottom:1px solid #fff;
                }
              }
            }
          }
        }
      }
      &-right{
        .header-nav-user{
          margin-left: 10px;
          margin-top: 20px;
          margin-right: 20px;
          width: 64px;
          height: 30px;
          &:hover .m-show-target{
            display: block;
          }
          .user-logo{
            position: relative;
            display: flex;
            -ms-flex-pack: center;
            justify-content: center;
            margin-right: 10px;
            min-width: 80px;
            height: 30px;
            line-height: 30px;
            color: #fff;
            cursor: pointer;
            .msg-hint{
              position: absolute;
              left: 39px;
              width: 10px;
              height: 10px;
              border-radius: 10px;
              background-color: red;
            }
            .m-cover{
              margin-right: 6px;
              width: 30px;
              height: 30px;
              line-height: 30px;
              border-radius: 30px;
              background-color: #999;
              color: #fff;
              text-align: center;
            }
            .m-icon{
              margin-right: 10px;
              transform: rotate(180deg);
            }
          }
        }
        .m-show-target{
          position: relative;
          display: none;
          .target-list{
            position: absolute;
            z-index: 11;
            color: #fff;
            left: -8px;
            width: 80px;
            height: 80px;
            background-color: #2c2c2c;
            font-size: 14px;
            padding: 10px 0;
            box-sizing: border-box;
            .target-item{
              padding: 0 10px;
              line-height: 30px;
              color: #fff;
              cursor: pointer;
              &:hover{
                background: #999;
              }
            }

          }
        }
        .m-hover-show-container{
          width: 50px;
          cursor: default;
          position: relative;
          &:hover{
            .m-hover-trigger .btnf{
              background-color: #286090;
              border-color: #204d74;
            }
            .m-show-target{
              display: block;
            }

          }
          .m-show-target{
            left: -67px;
            top: 45px;
            position: absolute;
            .m-show-target-wrapper{
              display: flex;
              justify-content: space-around;
              padding: 36px 8px 16px 10px;
              width: 184px;
              height: 110px;
              border-radius: 4px;
              background: url(../../assets/release-btns-container-border.png) no-repeat bottom;
              background-size: contain;
              box-sizing: border-box;
              .divider{
                height: 52px;
                width: 1px;
                background-color: #fff;
              }
              .btn-release-demand-container{
                display: flex;
                flex-direction: column;
                align-items: center;
                font-size: 12px;
                color: #fff;
                .m-link{
                  margin-top: 10px;
                  cursor: pointer;
                }
                .demand-a{
                  box-sizing: border-box;
                  width: 40px;
                  height: 40px;
                  line-height: 40px;
                  border: 0;
                  border-radius: 4px;
                  font-size: 22px;
                  text-align: center;
                  cursor: pointer;
                  background: linear-gradient(#2b90e2,#156fb8);
                  &.active{
                    font-size: 18px;
                    background: linear-gradient(#fec53e,#fe7b24);
                  }
                }

              }
            }
          }

          .m-hover-trigger{
            cursor: pointer;
            padding-top: 22px;
            .btnf{
              display: block;
              padding: 5px 9px;
              border-radius: 5px;
              letter-spacing: 1px;
              background-color: #1f86ed;
              border-color: #1f86ed;
              color: #fff;
              cursor: pointer;
              font-size: 14px;
            }
          }
        }
      }
    }

  }
</style>
