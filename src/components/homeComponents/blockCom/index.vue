<template>
  <section class="section-block technology-section" :style="{background: bargeundColor}">
    <div class="head">
      <h2>{{h2N}}</h2>
      <p class="head-text" @click="childS(h2XNHref)">{{h2XN}}</p>
      <div class="tab-container">
        <template v-for="item in menuList">
          <span class="tab-text">{{item.name}}</span>
          <span class="tab-divider">{{item.f}}</span>
        </template>
      </div>
    </div>
    <div class="w">
      <div class="technology-list">
        <slot></slot>
      </div>
      <div class="technology-black" v-if="btn">{{btn}}</div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "blockCom",
    data() {
      return {

      }
    },
    props:{
      menuList:{
        type:Array,
        default:[]
      },
      h2N:{
        type: String,
        default: ''
      },
      h2XN:{
        type: String,
        default: ''
      },
      btn:{
        type: String,
        default: ''
      },
      bargeundColor:{
        type: String,
        default: ''
      },
      h2XNHref:{
        type:String,
        default:''
      }
    },
    methods:{
      childS(href){
        console.log(href)
      }
    }
  }
</script>

<style lang="less">
  .technology-section {
    position: relative;
    z-index: 1;
    padding-bottom: 0;
    height: 697px;
    .head {
      margin-bottom: 38px;
    }
    padding-top: 80px;
  }

  .section-block {

    .technology-black{
      display: block;
      width: 170px;
      height: 38px;
      line-height: 24px;
      border-radius: 0;
      margin: 40px auto;
      background-color: transparent;
      color: #4f5457;
      font-size: 14px;
      font-weight: 400;
      padding: 6px 12px;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      touch-action: manipulation;
      cursor: pointer;
      user-select: none;
      border: 1px solid #333;
      &:hover{
        color: #1f86ed;
        border-color: #1f86ed;
      }
    }
    .head {
      position: relative;
      text-align: center;
      transition: all .2s ease;
      h2 {
        display: inline-block;
        position: relative;
        margin-top: 0;
        margin-bottom: 20px;
        font-size: 36px;
        font-weight: 700;
        color: #666;
        z-index: 2;
        &:before, &:after {
          content: " ";
          position: absolute;
          top: 18px;
          width: 60px;
          height: 1px;
          background-color: #ccc;
        }
        &:before {
          left: -80px;
        }
        &:after {
          right: -80px;
        }
      }
      .head-text {
        width: 500px;
        margin: 0 auto;
        text-align: center;
        font-size: 16px;
        color: #666;
      }
      .tab-container {
        margin-top: 30px;
        font-size: 14px;
        color: #333;
        .tab-divider {
          margin: 0 10px;
        }
        .tab-text {
          cursor: pointer;
          &:active {
            color: #1f86ed;
            text-decoration: underline;
          }
        }
      }
    }
  }

</style>
