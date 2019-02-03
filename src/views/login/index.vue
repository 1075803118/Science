<template>
  <div>
    <v-Head :backgrounds="this.$route.meta.background" :classFixed="this.$route.meta.classFixed" :classShadow="this.$route.meta.boxShadow"></v-Head>
    <div class="register-login-container">
      <div class="holy-grail register-index-body">
        <div class="card m-cover body-content"></div>
        <div class="card body-sidebar login-modal-container">
          <h2 class="title">{{state}}</h2>
          <form class="sms-login-form" v-if="!toggle">
            <div class="m-validation">
              <div class="form-group">
                <label>手机</label>
                <div class="dropdown-trigger">+86</div>
                <input name="username" type="text" placeholder="请输入您的手机号" class="phone-text" v-model="loginUser.phone">
              </div>
            </div>
            <div class="m-validation">
              <div class="form-group">
                <label>验证码</label>
                <input type="text" name="code" placeholder="请输入您的验证码" class="code-text" v-model="loginUser.code">
                <button type="button" class="m-btn btn-primary btn-send-code" @click="code">{{buttonName}}</button>
              </div>
            </div>
            <p class="sms-login-hint">首次登录将自动注册迈科技账号且同意
              <a href="/footer/registrationTerms" target="_blank" style="display:inline-block;color:#1f86ed;" class="">
                《迈科技注册条款》
              </a>
            </p>
            <button type="button" class="m-btn btn-primary btn-login"  :disabled="isDisabled" @click="loginCodeUp">登录/注册</button>
            <a href="javascript:void(0)" class="m-link login-way-trigger" @click="login">账户登录</a>
          </form>
          <form class="pwd-login-form" v-if="toggle">
            <div class="m-validation">
              <div class="form-group">
                <label>手机</label>
                <div class="dropdown-trigger">+86</div>
                <input name="username" type="text" placeholder="请输入您的手机号" class="phone-text" v-model="loginUser.phone">
              </div>
            </div>
            <div class="m-validation">
              <div class="form-group">
                <label>密码</label>
                <input :type="passwordType" type="password" name="pwd-text" placeholder="请输入您的密码" autocomplete="no" class="pwd-text" v-model="loginUser.pass">
                <span class="m-icon m-icon-pwd" @click="showPwd">
                      <i aria-hidden="true" class="fa" :class="passwordType ==='password'?'fa-eye':'fa-eye-slash'"></i>
                </span>
              </div>
            </div>
            <p class="pull-left not-exist-hint" style="display:none;">您还不是迈科技的会员！</p>
            <a href="/password/code" class="m-link m-link-forget-pwd">忘记密码？</a>
            <button type="button" class="m-btn btn-primary btn-login" @click="loginUp">登&nbsp;录
            </button>
            <a href="javascript:void(0)" class="m-link login-way-trigger" @click="login">短信快捷登录</a>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import oneHead from '@/components/oneHead/index.vue'
  import {mapActions} from 'vuex'

  export default {
    name: "index",
    data() {
      return {
        toggle:false,
        state:"登录/注册",
        passwordType:"password",
        buttonName: "发送验证码",
        isDisabled: false,
        time: 60,
        loginUser:{
          phone:'',
          pass:'',
          code:''
        }
      }
    },
    methods:{
      ...mapActions(["getUserLogin","getUserLoginPhone"]),
      code(){
        if(this.loginUser.phone === ''){
          this.$alert('手机号不能为空', '提示', {
            confirmButtonText: '确定',
          });
        }else{
          this.$http.post('/f/register/getRegisterCode',{
            mobile:this.loginUser.phone
          }).then((res) => {
            if(res.data === true){
              this.sendMsg()
            }
          })
        }
      },
      loginUp(){
        let myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        let user = {
          phone:this.loginUser.phone,
          pass:this.loginUser.pass
        }
        if (!myreg.test(this.loginUser.phone)) {
          this.$alert('请输入正确的手机号格式', '提示', {
            confirmButtonText: '确定',
          });
        }else{
          this.getUserLogin(user)
        }
      },
      sendMsg() {
        let me = this;
        me.isDisabled = true;
        let interval = window.setInterval(function () {
          me.buttonName = '（' + me.time + '秒）后重新发送';
          --me.time;
          if (me.time < 0) {
            me.buttonName = "重新发送";
            me.time = 10;
            me.isDisabled = false;
            window.clearInterval(interval);
          }
        }, 1000);
      },
      loginCodeUp(){
        let {phone,code} = this.loginUser
        let user = {
          phone:this.loginUser.phone,
          code:this.loginUser.code
        }
        if(phone === '' || code === ''){
          this.$alert('手机号不能为空或者验证码不能为空', '提示', {
            confirmButtonText: '确定',
          });
        }
        this.getUserLoginPhone(user)
      },
      login(){
        this.toggle = !this.toggle
        this.loginUser ={}
        if(this.toggle === false){
          this.state = '短信验证码登录'
        }else{
          this.state = '账户登录'
        }
      },
      showPwd(){
        if (this.passwordType === 'password') {
          this.passwordType = 'text'
        } else {
          this.passwordType = 'password'
        }
      },
    },
    components: {
      "v-Head":oneHead,
    },
  }
</script>

<style scoped lang="less">
  .register-login-container{
    max-height: 98vh;
    overflow: hidden;
    background: url(../../assets/bg-register.jpg) no-repeat 50%;
    background-size: cover;
    padding-top: 200px;
    .register-index-body{
      position: relative;
      top: -33px;
      width: 960px;
      height: 600px;
      margin: 0 auto;
      max-width: 1240px;
      .body-content{
        float: left;
        padding: 18px;
        background-color: #fff;
        border: .5px solid #eee;
        width: 510px;
        background-size: cover;
        background-position: 50%;
        background-repeat: no-repeat;
        height: 558px;
        background-image: url(../../assets/register-index.png);
        box-shadow: 0 0 24px rgba(0,0,0,.3);
      }
      .login-modal-container{
        float: left;
        margin-left: 50px;
        width: 400px;
        height: 558px;
        border-radius: 10px;
        box-shadow: 0 0 24px rgba(0,0,0,.3);
        padding: 18px;
        background-color: #fff;
        border: .5px solid #eee;
        .title{
          margin-top: 40px;
          margin-bottom: 40px;
          font-size: 28px;
          color: #707070;
          text-align: center;
        }
        .sms-login-form{
          width: 340px;
          .m-validation{
            margin-bottom: 0;
            min-height: 72px;
            .form-group{
              position: relative;
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 0;
              width: 340px;
              height: 50px;
              label{
                width: 60px;
                min-width: 60px;
                color: #333;
                font-weight: 400;
                font-size: 16px;
                display: inline-block;
                max-width: 100%;
                margin-bottom: 5px
              }
              .dropdown-trigger{
                position: relative;
                display: inline-block;
                margin-right: 20px;
                padding-right: 10px;
                height: 50px;
                line-height: 50px;
                width: 80px;
                min-width: 80px;
                font-size: 16px;
                cursor: pointer;
                text-align: center;
                background-color: #f3f4f8;
                color: #1f86ed;
              }
              .phone-text{
                width: 180px;
                padding-left: 16px;
                padding-right: 16px;
                height: 50px;
                font-size: 16px;
                border: none;
                color: #343a52;
                background-color: #f3f4f8;
              }
              .code-text{
                width: 180px;
                padding-left: 16px;
                padding-right: 16px;
                height: 50px;
                font-size: 16px;
                border: none;
                color: #343a52;
                background-color: #f3f4f8;
              }
              .btn-send-code{
                cursor: pointer;
                width: 118px;
                font-size: 16px;
                background-color: #1f86ed;
                display: inline-block;
                height: 50px;
                color: #fff;
                box-sizing: border-box;
                text-align: center;
                border: 1px solid #1f86ed;
                letter-spacing: 1px;
              }
            }
          }
          .sms-login-hint{
            margin-bottom: 20px;
            font-size: 14px;
            color: #999;
            text-align: center;
            a{
              display: inline-block;
              color: #1f86ed;
            }
          }
          .btn-login{
            width: 100%;
            background-color: #1f86ed;
            display: inline-block;
            height: 50px;
            font-size: 18px;
            letter-spacing: 1px;
            color: #fff;
            box-sizing: border-box;
            text-align: center;
            border: 1px solid #1f86ed;
          }
          .login-way-trigger{
            float: right;
            margin-top: 10px;
            color: #1f86ed;
            text-decoration: none;
            font-size: 14px;
          }
        }
        .pwd-login-form{
          width: 340px;
          .m-validation{
            margin-bottom: 0;
            min-height: 72px;
            .form-group{
              position: relative;
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 0;
              width: 340px;
              height: 50px;
              label{
                width: 60px;
                min-width: 60px;
                color: #333;
                font-weight: 400;
                font-size: 16px;
                display: inline-block;
                max-width: 100%;
                margin-bottom: 5px;
              }
              .dropdown-trigger{
                position: relative;
                display: inline-block;
                margin-right: 20px;
                padding-right: 10px;
                height: 50px;
                line-height: 50px;
                width: 80px;
                min-width: 80px;
                font-size: 16px;
                cursor: pointer;
                text-align: center;
                background-color: #f3f4f8;
                color: #1f86ed;
              }
              .phone-text{
                width: 180px;
                padding-left: 16px;
                padding-right: 16px;
                height: 50px;
                font-size: 16px;
                border: none;
                color: #343a52;
                background-color: #f3f4f8;
              }
              .pwd-text{
                width: 410px;
                padding-left: 16px;
                padding-right: 16px;
                height: 50px;
                font-size: 16px;
                border: none;
                color: #343a52;
                background-color: #f3f4f8;
              }
              .m-icon-pwd{
                position: absolute;
                top: 13px;
                right: 10px;
                width: 24px;
                height: 24px;
                line-height: 1;
                font-size: 22px;
                color: #b5b5b5;
                cursor: pointer;
              }
            }
          }
          .m-link-forget-pwd{
            float: right;
            margin-bottom: 20px;
            color: #1f86ed;
          }
          .btn-login{
            width: 100%;
            background-color: #1f86ed;
            display: inline-block;
            height: 50px;
            font-size: 18px;
            letter-spacing: 1px;
            color: #fff;
            box-sizing: border-box;
            text-align: center;
            border: 1px solid #1f86ed;
          }
          .login-way-trigger{
            float: right;
            margin-top: 10px;
            color: #1f86ed;
          }
        }
      }
    }
  }
</style>
