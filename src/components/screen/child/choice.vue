<template>
  <div>
    <article class="filter" v-for="(item,index) in list" :class="{active:item.isHeight}">
      <div class="filter-label">{{item.name}}</div>
      <ul class="filter-items" :ref="`ul${index}`">
        <li class="filter-item" v-for="(child,indexe) in item.child" @click="filterClock(index,indexe,child)">
          <div class="item-content" :class="{active:child.flg}">
            <span class="no-limit" v-if="indexe===0">{{child.name}}</span>
            <span v-else>{{child.name}}</span>
          </div>
        </li>
      </ul>
      <div class="more" :class="{active:item.height && item.height>55,flg:!item.isHeight}" @click="spread(index,item)">
        <span class="m-icon"><i class="fa fa-chevron-circle-down" aria-hidden="true"></i></span>
      </div>
    </article>
  </div>
</template>

<script>
  export default {
    name: "choice",
    data(){
      return{

      }
    },
    props:{
      list:{
        type:Array,
        default:[]
      }
    },
    created(){


      // var heightCss = window.getComputedStyle(this.$refs.ul).height;
    },
    mounted(){
      let list = this.list;
      for(let i in list){
        // 循环每一个默认选中第一个
        this.filterClock(i,0,list[i].child[0]);
        //循环每一个添加 isHeight
        list[i]['isHeight'] = true;
        this.attrHeight(i,list);
      }
      this.list = list;
    },
    methods:{
      spread(index,item){
        item.isHeight = !item.isHeight;

        this.$set(this.list,index,this.list[index]);

        console.log(this.list[index])
      },
      attrHeight(i,list){
        var heightCss = this.$refs[`ul${i}`][0].offsetHeight;
        list[i].height = heightCss;
      },
      filterClock(parentIndex,thisIndex,item){
        let list = this.list;
        let flg = false;
        //判断除去当前选中的 全部为false
        for(let i in list[parentIndex].child){
          if(i!=thisIndex){
            this.$set(list[parentIndex].child[i],'flg',false);
          }
        }
        //当前的是否为
        if(!item.flg){
          this.$set(item,'flg',true);
        }else{
          this.$set(item,'flg',false);
        }

        //判断是否没有选中任何元素
        for(let i of list[parentIndex].child){
          if(i.flg){
            flg = true;
          }
        }
        //有元素不进入，没有则进入默认选中第一个
        if(!flg){
          this.$set(list[parentIndex].child[0],'flg',true);
        }

      }
    }
  }
</script>

<style lang="less">

</style>
