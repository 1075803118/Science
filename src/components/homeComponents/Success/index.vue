<template>
  <block-con :h2N="h2N" :h2XN="h2XN" :menuList="menuList" :btn="btn" bargeundColor="#f5f5f5">
    <div class="Success">
      <div class="body">
        <div class="m-carousel-wrapper">
          <div class="m-carousel">
            <div class="m-carousel-item">
              <div class="content" style="background-image:url(/images/index/cases/qingdao.jpg);"></div>
            </div>
            <div class="m-carousel-item">
              <div class="content" style="background-image:url(/images/index/cases/environment.jpg);"></div>
            </div>
            <div class="m-carousel-item active">
              <div class="content" style="background-image:url(/images/index/cases/mold.jpg);"></div>
            </div>
            <div class="m-carousel-item">
              <div class="content" style="background-image:url(/images/index/cases/voc.jpg);"></div>
            </div>
            <div class="m-carousel-item">
              <div class="content" style="background-image:url(/images/index/cases/gene.jpg);"></div>
            </div>
          </div>
          <div class="text-wrapper">
            <div class="text">
              <div class="content"><h3 class="text-title">
                高效低成本国产脱模剂完成进口替代
              </h3>
                <p class="text-content">
                  脱模剂是一种轮胎生产企业必备的化工助剂，一直以来市场都是被高性能的国外产品所占据的，作为上游原料商的许先生在其中发现了商机，多方联系技术方，最终实现了该产品的进口替代
                </p>
                <div class="text-right"><a href="/edu/articles/5836ba3e263ee33074413d89" target="_blank"
                                           class="btn btn-default">
                  查看详情 &gt;&gt;
                </a></div>
              </div>
            </div>
          </div>
          <div class="prev-trigger"><span class="m-icon"><i class="iconfont icon-back"></i></span></div>
          <div class="next-trigger"><span class="m-icon"><i class="iconfont icon-back"></i></span></div>
        </div>
      </div>
    </div>
  </block-con>
</template>

<script>
  import blockCon from '../blockCom/index'

  export default {
    name: "Success",
    components: {
      blockCon
    },
    data() {
      return {
        menuList: [],
        h2N: '成功案例',
        h2XN: '技术创新，您也可以',
        h2XNHref: '',
        btn: ''
      }
    }
  }
</script>

<style scoped>

</style>
