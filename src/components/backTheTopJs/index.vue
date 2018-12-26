<template>
  <div @click="scrollToPs(number,time)">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "backTheTopJs",
    props:{
      number:{
        type:String,
        default:0,
      },
      time:{
        type: String,
        default: 200
      }
    },
    methods: {
      scrollToPs: function (number, time) {
        if (!time) {
          document.body.scrollTop = document.documentElement.scrollTop = number;
          return number;
        }
        const spacingTime = 20; // 设置循环的间隔时间  值越小消耗性能越高
        let spacingInex = time / spacingTime; // 计算循环的次数
        let nowTop = document.body.scrollTop + document.documentElement.scrollTop; // 获取当前滚动条位置
        let everTop = (number - nowTop) / spacingInex; // 计算每次滑动的距离
        let scrollTimer = setInterval(() => {
          if (spacingInex > 0) {
            spacingInex--;
            this.scrollToPs(nowTop += everTop);
          } else {
            clearInterval(scrollTimer); // 清除计时器
          }
        }, spacingTime);
      }
    }
  }
</script>

<style scoped>

</style>
