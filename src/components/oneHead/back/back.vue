<template>
  <transition name="fade">
    <div>
      <div class="back" v-if="flag"></div>
      <div class="m-modal-container" v-if="flag">
        <div class="m-modal-header">
          <div class="tab-container">
            <div v-for="(item,index) in list" :class="['tab',{active:index === Index}]" @click="toggle(index)">
              {{item}}
            </div>
          </div>
          <button type="button" data-dismiss="modal" aria-label="Close" class="close" @click="close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="m-modal-body">
          <div>
            <form class="sms-login-form" v-if="Index === 0">
              <div class="m-mobile-code modal-form-group">
                <div class="m-validation">
                  <div class="form-group">
                    <label>手机</label>
                    <div class="form-control dropdown-trigger">
                      +86
                    </div>
                    <input name="username" type="text" placeholder="请输入您的手机号" class="form-control phone-text" v-model="loginUser.phone">
                  </div>
                </div>
                <div class="m-validation">
                  <div class="form-group">
                    <label>验证码</label>
                    <input type="text" name="code" placeholder="请输入您的验证码" class="form-control code-text" v-model="loginUser.code">
                    <button type="button" class="m-btn btn-primary btn-send-code" @click="code">发送验证码</button>
                  </div>
                </div>
              </div>
              <p class="sms-login-hint">首次登录将自动注册迈科技账号且同意
                <router-link to="/registration" tag="a" style="display: inline-block; width: 144px; color: rgb(31, 134, 237);">
                  《迈科技注册条款》
                </router-link>
              </p>
              <button type="submit" class="m-btn btn-primary btn-login">登&nbsp;录
              </button>
            </form>
            <form class="pwd-login-form" v-if="Index === 1">
              <div class="m-mobile-code modal-form-group">
                <div class="m-validation">
                  <div class="form-group">
                    <label>手机</label>
                    <div class="form-control dropdown-trigger">
                      +86
                    </div>
                    <input name="username" type="text" placeholder="请输入您的手机号" class="phone-text" v-model="loginUser.phone"></div>
                </div>
                <div class="m-validation">
                  <div class="form-group">
                    <label>密码</label>
                    <input :type="passwordType" name="pwd-text" placeholder="请输入您的密码" class="pwd-text" v-model="loginUser.pass">
                    <span class="m-icon m-icon-pwd" @click="showPwd">
                      <i aria-hidden="true" class="fa" :class="passwordType ==='password'?'fa-eye':'fa-eye-slash'"></i>
                  </span>
                  </div>
                  <p class="m-validation-text" style="display: none;">
                    <i class="m-icon"></i>
                    <span></span>
                  </p>
                </div>
                <a href="/password/code" class="m-link m-link-forget-pwd">忘记密码？</a>
                <button type="submit" class="m-btn btn-primary btn-login">登&nbsp;录</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: "back",
    props:{
      flag:false
    },
    data(){
      return{
        list:['短信快捷登录','账户登录'],
        fl:null,
        Index:0,
        passwordType:"password",
        loginUser:{
          phone:'',
          pass:'',
          code:''
        }
      }
    },
    watch: {
      $route( to , from ){
        this.close()
      }
    },
    methods:{
      code(){
        if(this.loginUser.phone === ''){
          this.$alert('手机号不能为空', '提示', {
            confirmButtonText: '确定',
          });
        }
      },
      toggle(index){
        this.Index = index
        this.loginUser.phone = ''
        this.loginUser.pass = ''
        this.loginUser.code = ''
      },
      close(){
        this.$emit('close',false)
      },
      showPwd(){
        if (this.passwordType === 'password') {
          this.passwordType = 'text'
        } else {
          this.passwordType = 'password'
        }
      }
    }
  }
</script>

<style  lang="less">
  .m-modal-container{
    padding: 40px;
    width: 572px;
    overflow: visible;
    position: relative;
    margin: 0 auto;
    max-height: 90vh;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0,0,0,.33);
    font-family: inherit;
    z-index: 2;
    .m-modal-header{
      margin-bottom: 26px;
      border-bottom: 2px solid #eee;
      .tab-container{
        display: flex;
        width: 100%;
        .tab{
          flex: 1;
          margin-bottom: -2px;
          padding-bottom: 10px;
          text-align: center;
          color: #d9dadc;
          font-size: 26px;
          cursor: pointer;
          &.active{
            color: #343a52;
            border-bottom: 2px solid #1f86ed;
          }
        }
      }
      .close{
        position: absolute;
        top: 6px;
        right: 10px;
        font-size: 30px;
        -webkit-appearance: none;
        padding: 0;
        cursor: pointer;
        background: transparent;
        border: 0;
        color: #000;
        text-shadow: 0 1px 0 #fff;
        font-weight: 700;
        opacity: .2;
      }
    }
    .m-modal-body{
      box-sizing: border-box;
      margin: 0;
      .sms-login-form{
        width: 490px;
        .sms-login-hint{
          margin-bottom: 20px;
          color: #999;
          text-align: center;
        }
        .btn-login{
          color: #fff;
          width: 100%;
          background-color: #1f86ed;
          display: inline-block;
          height: 50px;
          font-size: 18px;
          letter-spacing: 1px;
          box-sizing: border-box;
          text-align: center;
          border: 1px solid #1f86ed;
        }
        .modal-form-group{
          .m-validation{
            margin-bottom: 0;
            min-height: 72px;
            .form-group{
              position: relative;
              display: -ms-flexbox;
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 0;
              width: 490px;
              height: 50px;
              label{
                width: 80px;
                min-width: 80px;
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
                padding-left: 0;
                padding-right: 10px;
                height: 50px;
                line-height: 50px;
                width: 80px;
                min-width: 80px;
                font-size: 16px;
                cursor: pointer;
                text-align: center;
                background-color: #f3f4f8;
                border-radius: 2px;
                color: #1f86ed;
                border: none;
                box-shadow: none;
              }
              .phone-text{
                width: 315px;
                padding-left: 16px;
                padding-right: 16px;
                border-radius: 2px;
                box-shadow: none;
                height: 50px;
                font-size: 16px;
                border: none;
                color: #343a52;
                background-color: #f3f4f8;
              }
              .code-text{
                padding-left: 16px;
                padding-right: 16px;
                width: 300px;
                height: 50px;
                font-size: 16px;
                border: none;
                color: #343a52;
                background-color: #f3f4f8;
                border-radius: 2px;
                box-shadow: none;
              }
              .btn-send-code{
                cursor: pointer;
                width: 128px;
                background-color: #1f86ed;
                display: inline-block;
                height: 50px;
                font-size: 18px;
                letter-spacing: 1px;
                min-width: 128px;
                box-sizing: border-box;
                text-align: center;
                border: 1px solid #1f86ed;
                color: #fff;
              }
            }
          }
        }
      }
      .pwd-login-form{
        width: 490px;
        .modal-form-group{
          .m-validation{
            margin-bottom: 0;
            min-height: 72px;
            .form-group{
              position: relative;
              display: -ms-flexbox;
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 0;
              width: 490px;
              height: 50px;
              label{
                width: 80px;
                min-width: 80px;
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
                padding-left: 0;
                padding-right: 10px;
                height: 50px;
                line-height: 50px;
                width: 80px;
                min-width: 80px;
                font-size: 16px;
                cursor: pointer;
                text-align: center;
                background-color: #f3f4f8;
                border-radius: 2px;
                color: #1f86ed;
                border: none;
                box-shadow: none;
              }
              .phone-text{
                width: 315px;
                padding-left: 16px;
                padding-right: 16px;
                border-radius: 2px;
                box-shadow: none;
                height: 50px;
                font-size: 16px;
                border: none;
                color: #343a52;
                background-color: #f3f4f8;
              }
              .pwd-text{
                padding-left: 16px;
                padding-right: 16px;
                width: 410px;
                height: 50px;
                font-size: 16px;
                border: none;
                color: #343a52;
                background-color: #f3f4f8;
                border-radius: 2px;
                box-shadow: none;
              }
              .btn-send-code{
                width: 128px;
                background-color: #1f86ed;
                display: inline-block;
                height: 50px;
                font-size: 18px;
                letter-spacing: 1px;
                min-width: 128px;
                box-sizing: border-box;
                text-align: center;
                border: 1px solid #1f86ed;
                color: #fff;
              }
              .m-icon-pwd{
                position: absolute;
                top: 18px;
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
            display: block;
          }
          .btn-login{
            display: inline-block;
            height: 50px;
            font-size: 18px;
            letter-spacing: 1px;
            width: 100%;
            background-color: #1f86ed;
            color: #fff;
            box-sizing: border-box;
            text-align: center;
            border: 1px solid #1f86ed;
          }
        }
      }
    }
  }
  .back{
    display: table;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: left;
    background-color: rgba(0,0,0,.5);
    transition: opacity .3s ease;
    overflow: auto;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
