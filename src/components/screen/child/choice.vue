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
  .filter{
    position: relative;
    margin-bottom: 0;
    list-style: none;
    color: #707070;
    font-size: 14px;
    text-align: left;
    overflow: hidden;
    transition: height .1s;
    &.active{
      height: 55px;
    }
    .filter-label{
      position: absolute;
      height: 45px;
      line-height: 45px;
      font-weight: 700;
    }
    .filter-items{
      position: relative;
      padding-left: 94px;
      margin-bottom: 10px;
      .filter-item{
        display: inline-block;
        margin-top: 9px;
        margin-right: 15px;
        .item-content{
          cursor: pointer;
          display: inline-block;
          span{
            position: relative;
            display: block;
            padding: 7px 12px;
            line-height: 1;
            overflow: hidden;
          }
          &.active{
            span{
              background-color: #e3f1ff;
              color: #0a539a;
              outline: 1px solid #4dafed;
              &.no-limit{
                &:before{
                  content: "";
                  background-color: transparent;
                }
                &:after{
                  content: "";
                  position: absolute;
                  top: -3px;
                  right: 2px;
                  color: #fff;
                  font-size: 10px;
                }
              }
              &:before{
                position: absolute;
                top: -18px;
                right: -50%;
                content: " ";
                width: 100%;
                height: 28px;
                transform: rotate(35deg);
                -ms-transform: rotate(35deg);
                -moz-transform: rotate(35deg);
                -webkit-transform: rotate(35deg);
                -o-transform: rotate(35deg);
                background-color: #5babfa;
              }
              &:after{
                content: "x";
                position: absolute;
                top: -3px;
                right: 2px;
                color: #fff;
                font-size: 10px;
              }
            }
          }
        }
      }
    }
  }
</style>
