<template>
  <div class="experts">
    <v-Head :backgrounds="background" :classFixed="classFixed" :classShadow="classShadow"></v-Head>
    <two-head :urlImg="urlImg" :placeholder="placeholder">
      <h1 class="title"><i></i>有问题 找专家<i></i></h1>
      <p class="text">Link Technology to Industry</p>
      <div class="searchbar-container white-searchbar-container">
        <input :placeholder="placeholder" type="text" name="text" class="searchbar-text">
        <button type="submit" class="m-btn btn-primary btn-search">搜 索</button>
      </div>
    </two-head>
  </div>
</template>

<script>
  import oneHead from '@/components/oneHead/index.vue'
  import twoHead from '@/components/twoHead/index.vue' //技术带背景头部
  export default {
    name: "experts",
    components:{
      "v-Head": oneHead,
      twoHead
    },
    data() {
      return {
        urlImg: require("../../assets/bg-header-experts.jpg"),
        placeholder: '寻找你的专家顾问',
        background: this.$route.meta.background,
        classFixed: this.$route.meta.classFixed,
        classShadow: this.$route.meta.boxShadow
      }
    }
  }
</script>

<style lang="less">

  .experts .twoHead {
    .title{
      position: relative;
      margin: 0 0 20px;
      width: 685px;
      font-size: 25px;
      text-align: center;
      letter-spacing: .8px;
      i{
        display: inline-block;
        width: 10px;
        height: 10px;
        vertical-align: 1.5px;
        border-radius: 10px;
        border: 2px solid #fff;
        &:last-child{
          margin-left: 12px;
        }
        &:first-child{
          margin-right: 12px;
        }
      }
      &:before{
        position: absolute;
        left: 0;
        top: 12px;
        content: " ";
        width: 240px;
        height: 2px;
        background-color: #fff;
      }
      &:after{
        position: absolute;
        right: 0;
        top: 12px;
        content: " ";
        width: 240px;
        height: 2px;
        background-color: #fff;
      }
    }
    .text{
      margin-bottom: 30px;
      font-size: 20px;
      color: #a9dbfe;
      letter-spacing: .8px;
    }
  }
  .experts{

  }
</style>
