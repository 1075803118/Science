<template>
  <div>
    <v-Head :backgrounds="background" :classFixed="classFixed" :classShadow="classShadow"></v-Head>
    <div class="allTechnology">
      <two-head :urlImg="urlImg" :placeholder="placeholder">
        <h1>汇聚全球技术 助力企业升级</h1>
        <div class="searchbar-container white-searchbar-container">
          <input :placeholder="placeholder" type="text" name="text" class="searchbar-text">
          <button type="submit" class="m-btn btn-primary btn-search">搜 索</button>
        </div>
      </two-head>
      <div class="w">
        <screen></screen>
        <ul class="sort-list">
          <li class="sort-list-item active"><b>默认</b></li>
          <li class="sort-list-item sort-childlist-container"><b>关注度<span class="m-icon"><i class="iconfont icon-paixu"></i></span></b>
            <ul class="sort-childlist">
              <li class="sort-childlist-item">按周</li>
              <li class="sort-childlist-item">按月</li>
              <li class="sort-childlist-item">累计</li>
            </ul>
          </li>
          <li class="sort-list-item"><b>发布时间<span class="m-icon"><i class="iconfont icon-paixu"></i></span></b></li>
        </ul>
      </div>
<<<<<<< HEAD
=======
    </two-head>
    <div class="w">
      <screen></screen>
      <ul class="sort-list">
        <li class="sort-list-item active"><b>默认</b></li>
        <li class="sort-list-item sort-childlist-container"><b>关注度<span class="m-icon"><i class="iconfont icon-paixu"></i></span></b>
          <ul class="sort-childlist">
            <li class="sort-childlist-item">按周</li>
            <li class="sort-childlist-item">按月</li>
            <li class="sort-childlist-item">累计</li>
          </ul>
        </li>
        <li class="sort-list-item"><b>发布时间<span class="m-icon"><i class="iconfont icon-paixu"></i></span></b></li>
      </ul>
      <technologyList></technologyList>
      <recommend></recommend>
>>>>>>> 5e805f9bfdbd9fac8a9a4d6ee605e9d57ef307d6
    </div>
  </div>
</template>

<script>
  import twoHead from '@/components/twoHead/index.vue' //技术带背景头部
<<<<<<< HEAD
  import screen from '@/components/screen/index.vue' //技术带背景头部
  import oneHead from '@/components/oneHead/index.vue'
=======
  import screen from '@/components/screen/index.vue' //screen
  import technologyList from '@/components/homeComponents/technology/list/index.vue'
  import recommend from '@/components/recommend/index.vue'

>>>>>>> 5e805f9bfdbd9fac8a9a4d6ee605e9d57ef307d6
  export default {
    name: "allTechnology",
    data() {
      return {
        urlImg: require("../../assets/bg-header-technologies.jpg"),
        placeholder: '搜索想要的技术项目',
        background:this.$route.meta.background,
        classFixed:this.$route.meta.classFixed,
        classShadow:this.$route.meta.boxShadow
      }
    },
    components: {
      twoHead,
<<<<<<< HEAD
      "v-Head":oneHead,
      screen
    },
    mounted(){
      window.addEventListener('scroll', this.handleScroll)
    },
    methods:{
      handleScroll(){
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if(scrollTop > 150 ){
          this.background = '#2c2c2c'
          this.classFixed = 'fixed'
          this.classShadow = 'boxShadow'
        }else{
          this.background = this.$route.meta.background
          this.classFixed = this.$route.meta.classFixed
          this.classShadow = this.$route.meta.boxShadow
        }
      }
=======
      screen,
      technologyList,
      recommend
>>>>>>> 5e805f9bfdbd9fac8a9a4d6ee605e9d57ef307d6
    }
  }
</script>

<<<<<<< HEAD
<style scoped lang="less">
  .allTechnology{
    .sort-list{
      margin-top: 30px;
      width: 100%;
      height: 40px;
      border-bottom: 1px solid #d7d6d6;
      .sort-list-item{
        float: left;
        margin-right: -1px;
        width: 100px;
=======
<style lang="less">
    .allTechnology{
      .technology-list-item{
        position: relative;
        margin-top: 35px;
        padding: 0 25px;
        min-height: 260px;
      }
      .sort-list{
        margin-top: 30px;
        width: 100%;
>>>>>>> 5e805f9bfdbd9fac8a9a4d6ee605e9d57ef307d6
        height: 40px;
        line-height: 40px;
        border: 1px solid #d7d6d6;
        border-bottom: none;
        text-align: center;
        cursor: pointer;
        color: #707070;
        &.active{
          box-shadow: inset 0 4px 0 #1f86ed;
          border-top-color: #1f86ed;
          border-bottom: 1px solid #fff;
          color: #1f86ed;
        }
        &:hover{
          color: #1f86ed;
          .sort-childlist{
            display: block;
          }
        }
        .sort-childlist{
          display: none;
          position: relative;
          top: -3px;
          margin-left: -1px;
          margin-right: -1px;
          background: #fff;
          border: 1px solid #d6d6d6;
          border-top-color: #fff;
          z-index: 998;
          .sort-childlist-item{
            height: 25px;
            line-height: 25px;
            font-size: 13px;
            color: #747474;
          }
        }
      }
    }
  }

</style>
