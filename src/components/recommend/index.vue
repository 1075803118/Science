<template>
 <div>
   <div class="clearfix recommend-wrapper">
     <span class="recommend-title">迈科技推荐</span>
     <div class="technology-list">
       <technologyList></technologyList>
     </div>
   </div>
   <relatedRecommendat></relatedRecommendat>
 </div>
</template>

<script>
  import technologyList from '@/components/homeComponents/technology/list/index.vue'
  import relatedRecommendat from '@/components/recommend/relatedRecommendat.vue'
  export default {
    name: "recommend",
    components:{
      technologyList,
      relatedRecommendat
    }
  }
</script>

<style scoped>

</style>
