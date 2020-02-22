import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import zhuzhu from '@/components/tangzhuzhu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/zhuzhu',
      name:'zhuhzu',
      component:zhuzhu
    }
  ]
})
