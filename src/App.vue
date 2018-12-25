<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
  </div>
</template>

<script>
import oneHead from '@/components/oneHead/index.vue'
export default {
  name: 'App',
  components:{
    "v-header":oneHead
  }
}
</script>

<style lang="less">
  @import "assets/base.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
