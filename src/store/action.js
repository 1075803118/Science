import * as types from "./mutations-type.js";
import Axios from '../util/ajax'
import { MessageBox } from 'element-ui';

export default {
  getUserLogin({commit},user){
    Axios.post('/f/login',{
      username:user.phone,
      password:user.pass,
      loginType:"customer"
    }).then((res)=>{
      if(res.data.errorCode ==="0"){
        MessageBox({
          message: "先使用手机号注册",
          type: 'error',
        });
        this.$emit("err",1)
      }else{

      }
    })
  },
  getUserLoginPhone({commit},user){
    Axios.post('/f/login',{
      username:user.phone,
      randomCode:user.code,
      loginType:"customer"
    }).then((res)=>{

    })
  }
}
