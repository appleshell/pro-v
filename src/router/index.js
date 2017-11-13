import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Crop from '@/components/crop'
import Head from '@/pages/head'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path:'/head',
      name:'Head',
      component:Head
    },
    {
    	path:'/crop',
    	name:'Crop',
    	component:Crop
    }
  ]
})
