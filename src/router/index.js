import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/Home"
    },
    {
      path: '/Home',
      name: 'Home',
      meta:{
        classFixed:'absolute',
        background:"transparent",
        boxShadow:"",
      },
      component: resolve => require(["@/views/home/index.vue"], resolve)
    },
    {
      path: '/registration',
      name: 'registration',
      meta:{
        boxShadow:"0 2px 4px #2c2c2c",
        background:"#2c2c2c",
        classFixed:'fixed',
        auth:false
      },
      component: resolve => require(["@/views/registration/registration.vue"], resolve)
    },
    {
      path: '/allTechnology',
      name: 'allTechnology',
      meta:{
        classFixed:'absolute',
        background:"transparent",
        boxShadow:"",
        auth:false
      },
      component: resolve => require(["@/views/allTechnology/index.vue"], resolve)
    },
    {
      path: '/experts',
      name: 'experts',
      meta:{
        classFixed:'absolute',
        background:"transparent",
        boxShadow:"",
        auth:false
      },
      component: resolve => require(["@/views/experts/index.vue"], resolve)
    },
    {
      path: '/jishu',
      name: 'jishu',
      meta:{
        classFixed:'absolute',
        background:"transparent",
        boxShadow:"",
        auth:true
      },
      component: resolve => require(["@/views/jishu/index.vue"], resolve)
    },
    {
      path: '/xuqiu',
      name: 'xuqiu',
      meta:{
        classFixed:'absolute',
        background:"transparent",
        boxShadow:"",
        auth:true
      },
      component: resolve => require(["@/views/xuqiu/index.vue"], resolve)
    },
    {
      path: '/login',
      name: 'login',
      meta:{
        boxShadow:"0 2px 4px #2c2c2c",
        background:"#2c2c2c",
        classFixed:'fixed',
        auth:false
      },
      component: resolve => require(["@/views/login/index.vue"], resolve)
    }
  ]
})
