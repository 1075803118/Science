<template>
  <div id="app">
    <v-header :backgrounds="this.$route.meta.background"></v-header>
    <router-view/>
    <v-footer></v-footer>
    <allFloat></allFloat>
  </div>
</template>

<script>
  import oneHead from '@/components/oneHead/index.vue'
  import oneFooter from '@/components/oneFooter/index.vue'
  import allFloat from '@/components/allFloat/index.vue'
  export default {
    name: 'App',
    components:{
      "v-header":oneHead,
      "v-footer":oneFooter,
      allFloat
    },
    watch: {
      $route( to , from ){
        if(to.path === '/'){
          window.addEventListener('scroll',()=>{
            let top = document.body.scrollTop + document.documentElement.scrollTop;
            if(top>550){
              console.log(this.$route.meta.background)
              this.$route.meta.background = "#000"
            }
          })
        }
      }
    },
  }
</script>

<style lang="less">
  @import "assets/base.css";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *,:after, :before{
    box-sizing: border-box;
    margin: 0;
  }

  .btn{
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
  }
  .w{
    max-width: 1240px;
    width: 100%;
    margin: auto;
    position: relative;
  }
  .pull-left {
    float: left !important;
  }
  .pull-right {
    float: right!important;
  }
  h4{
    margin-top: 10px;
    margin-bottom: 10px;
  }
  h4{
    font-size: 18px;
  }
</style>
