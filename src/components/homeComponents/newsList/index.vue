<template>
    <div class="news">
        <div class="w info-bar-wrapper">
          <span class="placeholder-block"></span>
          <span class="m-icon"><i class="iconfont icon-xitongtongzhi"></i></span>
          <div id="info-list" class="text-list-container">
            <div class="text-list">
              <div class="text">用户陆**发布了需求<div> 需要开发一款吸收式制冷系...</div></div>
              <div class="text">用户陆**发布了需求<div>数字城市解决方案</div></div>
              <div class="text">用户孙**咨询了专家<div>毛振民</div></div>
              <div class="text">用户顾**发布了需求<div >电镀均匀性研究</div></div>
              <div class="text">用户杨**咨询了技术方案<div >可生物降解脂肪族聚碳酸...</div></div>
              <div class="text">用户金**咨询了需求<div >基于深度学习的视频内容识别...</div></div>
              <div class="text">用户段**咨询了技术方案<div >超低成本连续化环保生产...</div></div>
              <div class="text">用户段**咨询了技术方案<div >【高效益资源化利用】利...</div></div>
              <div class="text">用户尚**咨询了技术方案<div >磷酸脲及聚磷酸铵生产技...</div></div>
              <div class="text">用户尚**咨询了技术方案<div >高效环保型的系列磷系阻...</div></div>
              <div class="text">用户F**咨询了专家<div >洪智勇</div></div>
              <div class="text">用户孔**咨询了技术方案<div >针对大型LED显示屏同...</div></div>
              <div class="text">用户侯**咨询了技术方案<div>秸秆再生资源生物发酵高...</div></div>
              <div class="text">用户罗**咨询了技术方案<div >［高回收零排放］基于资...</div></div>
              <div class="text">用户邹**咨询了技术方案<div >城市黑臭河道生态修复综...</div></div>
              <div class="text">用户王**咨询了技术方案<div >制冷新技术－超导热扇</div></div>
              <div class="text">用户王**咨询了需求<div >大型净水器上使用的直流电源</div></div>
              <div class="text">用户陈**发布了需求<div >需要一种吸附材料去除尾油中...</div></div>
              <div class="text">用户赖**发布了需求<div >寻找可以用水代替溶剂作为稀...</div></div>
              <div class="text">用户赖**发布了需求<div >UV喷涂车间废渣处理技术升...</div></div>
              <div class="text">用户陆**发布了需求<div > 需要开发一款吸收式制冷系...</div></div>
              <div class="text">用户陆**发布了需求<div >数字城市解决方案</div></div>
              <div class="text">用户孙**咨询了专家<div >毛振民</div></div>
              <div class="text">用户顾**发布了需求<div >电镀均匀性研究</div></div>
              <div class="text">用户杨**咨询了技术方案<div >可生物降解脂肪族聚碳酸...</div></div>
              <div class="text">用户金**咨询了需求<div >基于深度学习的视频内容识别...</div></div>
              <div class="text">用户段**咨询了技术方案<div >超低成本连续化环保生产...</div></div>
              <div class="text">用户段**咨询了技术方案<div >【高效益资源化利用】利...</div></div>
              <div class="text">用户尚**咨询了技术方案<div >磷酸脲及聚磷酸铵生产技...</div></div>
              <div class="text">用户尚**咨询了技术方案<div >高效环保型的系列磷系阻...</div></div>
              <div class="text">用户F**咨询了专家<div >洪智勇</div></div>
              <div class="text">用户孔**咨询了技术方案<div >针对大型LED显示屏同...</div></div>
              <div class="text">用户侯**咨询了技术方案<div >秸秆再生资源生物发酵高...</div></div>
              <div class="text">用户罗**咨询了技术方案<div >［高回收零排放］基于资...</div></div>
              <div class="text">用户邹**咨询了技术方案<div >城市黑臭河道生态修复综...</div></div>
              <div class="text">用户王**咨询了技术方案<div >制冷新技术－超导热扇</div></div>
              <div class="text">用户王**咨询了需求<div >大型净水器上使用的直流电源</div></div>
              <div class="text">用户陈**发布了需求<div >需要一种吸附材料去除尾油中...</div></div>
              <div class="text">用户赖**发布了需求<div >寻找可以用水代替溶剂作为稀...</div></div>
              <div class="text">用户赖**发布了需求<div>UV喷涂车间废渣处理技术升...</div></div>
            </div>
          </div>
          <span class="placeholder-block"></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "newList"
    }
</script>

<style lang="less">
    .news{
      height: 50px;
      line-height: 50px;
      background-color: rgba(2,2,2,.5);
      color: #fff;
      .info-bar-wrapper{
        display: flex;
        justify-content: space-around;
        .placeholder-block{
          flex: 1;
        }
        .m-icon{
          line-height: 47px;
          font-size: 16px;
        }
        .text-list-container{
          height: 50px;
          overflow: hidden;
          .text-list{
            position: relative;
            width: 450px;
            animation: loop2 50s linear infinite;
            .text{
              height: 50px;
              line-height: 50px;
              font-size: 16px;
              padding: 0 20px;
              div{
                display: inline-block;
                text-decoration: underline;
                color: #f7b52d;
              }
            }
          }
        }
      }
    }


    @keyframes loop2 {
      0% {
        transform: translateY(0)
      }

      4% {
        transform: translateY(0)
      }

      5% {
        transform: translateY(-50px)
      }

      9% {
        transform: translateY(-50px)
      }

      10% {
        transform: translateY(-100px)
      }

      14% {
        transform: translateY(-100px)
      }

      15% {
        transform: translateY(-150px)
      }

      19% {
        transform: translateY(-150px)
      }

      20% {
        transform: translateY(-200px)
      }

      24% {
        transform: translateY(-200px)
      }

      25% {
        transform: translateY(-250px)
      }

      29% {
        transform: translateY(-250px)
      }

      30% {
        transform: translateY(-300px)
      }

      34% {
        transform: translateY(-300px)
      }

      35% {
        transform: translateY(-350px)
      }

      39% {
        transform: translateY(-350px)
      }

      40% {
        transform: translateY(-400px)
      }

      44% {
        transform: translateY(-400px)
      }

      45% {
        transform: translateY(-450px)
      }

      49% {
        transform: translateY(-450px)
      }

      50% {
        transform: translateY(-500px)
      }

      54% {
        transform: translateY(-500px)
      }

      55% {
        transform: translateY(-550px)
      }

      59% {
        transform: translateY(-550px)
      }

      60% {
        transform: translateY(-600px)
      }

      64% {
        transform: translateY(-600px)
      }

      65% {
        transform: translateY(-650px)
      }

      69% {
        transform: translateY(-650px)
      }

      70% {
        transform: translateY(-700px)
      }

      74% {
        transform: translateY(-700px)
      }

      75% {
        transform: translateY(-750px)
      }

      79% {
        transform: translateY(-750px)
      }

      80% {
        transform: translateY(-800px)
      }

      84% {
        transform: translateY(-800px)
      }

      85% {
        transform: translateY(-850px)
      }

      89% {
        transform: translateY(-850px)
      }

      90% {
        transform: translateY(-900px)
      }

      94% {
        transform: translateY(-900px)
      }

      95% {
        transform: translateY(-950px)
      }

      99% {
        transform: translateY(-950px)
      }

      to {
        transform: translateY(-1000px)
      }
    }
</style>
