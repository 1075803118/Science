<template>
  <div class="twoHead" :style="{background:`url(${urlImg}) no-repeat 50%`}">
    <div class="header-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "twoHead",
    data() {
      return {}
    },
    props: {
      urlImg: {
        type: String,
        default: ''
      },
      placeholder:{
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="less">
  .twoHead {
    min-width: 1240px;
    padding-top: 70px;
    .header-content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 30px;
      height: 380px;
      width: 100%;
      color: #fff;
      h1{
        margin-top: 0;
        margin-bottom: 40px;
        font-size: 33px;
        font-weight: 700;
        letter-spacing: 1px;
      }
      .searchbar-container{
        display: flex;
        position: relative;
        width: 675px;
        height: 44px;
        background-color: #fff;
        .searchbar-text{
          padding: 0 38px 0 24px;
          width: 100%;
          height: 44px;
          background-color: transparent;
          font-size: 18px;
          border-radius: 4px;
          border: 1px solid #fff;
          letter-spacing: 1px;
          color: #999;
        }
        .btn-search{
          width: 120px;
          background-color: #156fb8;
          font-size: 20px;
          color: #fff;
          border:none;
          cursor: pointer;
        }
      }
    }
  }
</style>
