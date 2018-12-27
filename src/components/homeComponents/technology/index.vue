<template>
    <block-con :menuList="menuList" :h2N="h2N" :h2XN="h2XN" :btn="btn" bargeundColor="#fff" >
        <technologyList></technologyList>
    </block-con>
</template>

<script>
  import blockCon from '../blockCom/index'
  import technologyList from '../technology/list/index.vue'
  export default {
    name: "technology",
    components:{
      blockCon,
      technologyList
    },
    data() {
      return {
        menuList: [
          {
            name: '推荐技术',
            f: '/'
          },
          {
            name: '推荐技术',
            f: '/'
          },
          {
            name: '推荐技术',
            f: '/'
          },
          {
            name: '推荐技术',
            f: '/'
          },
          {
            name: '推荐技术',
            f: '/'
          },
          {
            name: '推荐技术',
            f: '/'
          },
          {
            name: '全部',
            f: '>'
          }
        ],
        h2N: '汇聚全球技术 助力企业升级',
        h2XN:'2000+成熟技术项目正在推广中',
        btn:'查看更多化学化工技术',
        h2XNHref:''
      }
    },
  }
</script>

<style lang="less">


</style>
