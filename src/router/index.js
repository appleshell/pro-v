import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Crop from '@/components/crop'
import Head from '@/pages/head'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Index',
      component:Index
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
