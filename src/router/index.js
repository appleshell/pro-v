import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Crop from '@/components/crop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
    	path:'/crop',
    	name:'Crop',
    	component:Crop
    }
  ]
})
