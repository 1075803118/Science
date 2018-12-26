<template>
  <div id="footer" class="footer-wrapper">
    <div class="footer">
      <div class="w">
        <ul class="main-entrances">
          <li class="level1-entrances">
            <div class="">关于迈科技</div>
            <div class="">合作站</div>
            <div class="">加入我们
            </div>
          </li>
          <li class="section-entrances"><h4>企业服务</h4>
            <ul>
              <li>
                <div class="">企动力服务</div>
              </li>
              <li>
                <div class="">年费会员</div>
              </li>
            </ul>
          </li>
          <li class="section-entrances"><h4>联系我们<span style="font-size:16px;color:#999;">（工作日 9:30-18:30）</span></h4>
            <p style="padding-top:5px;">
              客服电话：
              <em>400-000-1786</em></p>
            <p>
              邮箱：service@metalab.cn
            </p>
            <p>
              地址：上海市浦东新区祥科路58号炬芯研发大楼A栋4楼
            </p></li>
          <li class="section-entrances qrcode-entrances">
            <h4>
              <div style="font-weight:bold;">官方微信</div>&nbsp;|&nbsp;<div style="font-weight:normal;">公众号</div>
            </h4>
            <img src="../../assets/wx-qrcode.jpg"></li>
        </ul>
        <div class="friendships">
          <ul>
            <li>
              <div>
                国家科学技术部
              </div>
            </li>
            <li>
              <div>
                国家知识产权局
              </div>
            </li>
            <li>
              <div>
                中国科学院
              </div>
            </li>
            <li>
              <div>
                国家科技成果网
              </div>
            </li>
            <li>
              <div>
                新材料在线
              </div>
            </li>
            <li>
              <div>
                绿色技术银行
              </div>
            </li>
            <li>
              <div target="_blank" rel="nofollow">
                泰坦科技实验室整体解决方案领导者
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="company-info">Copyright © 沪ICP备15000929号-1 | 上海迈坦信息科技有限公司 | 021-54336693
        <div class="register">注册条款</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "oneFooter"
  }
</script>

<style lang="less">
  .footer-wrapper {
    bottom: 0;
    width: 100%;
    min-width: 1240px;
    height: 327px;
    background-color: #2c2c2c;
    .footer {
      padding-top: 41px;
      color: #999;
      .main-entrances {
        display: flex;
        justify-content: space-between;
        .level1-entrances {
          div {
            margin-top: 10px;
            margin-bottom: 20px;
            font-size: 18px;
            color: #fff;
          }
        }
        .section-entrances{
          h4{
            color: #fff;
          }
          div{
            color: #999;
          }
          li{
            padding: 5px 0;
          }
          p{
            margin: 0 0 10px;
          }
        }
        .qrcode-entrances{
          width: 144px;
          text-align: center;
          h4{
            div{
              display: inline-block;
              color: #fff;
            }
          }
          img{
            margin-top: 10px;
            margin-bottom: 20px;
            width: 80%;
          }
        }
      }
      .friendships {
        border-top: 1px solid #999;
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 14px;
        ul{
          margin: 0 auto;
          width: 800px;
          text-align: center;
          li{
            display: inline-block;
            min-width: 174px;
            padding: 5px 0;
          }
        }
      }
      .company-info {
        background: #000;
        font-size: 12px;
        text-align: center;
        line-height: 32px;
        .register {
          display: inline-block;
          margin-left: 20px;
          color: #fff;
        }
      }
    }
  }
</style>
