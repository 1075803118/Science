import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      meta:{
        background:"transparent",
      },
      component: resolve => require(["@/views/home/index.vue"], resolve)
    },
    {
      path: '/registration',
      name: 'registration',
      meta:{
        background:"#000",
      },
      component: resolve => require(["@/views/registration/registration.vue"], resolve)
    }

  ]
})
