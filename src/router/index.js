/*
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-13 22:09:40
 * @LastEditors: zyx 13415143367@163.com
 * @LastEditTime: 2023-01-04 15:54:33
 * @FilePath: \vscode file\study point\单组件文件\test2008\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Films from '@/views/Films.vue'
import Cinema from '@/views/Cinema.vue'
import Center from '@/views/Center.vue'
import Nowplaying from '@/views/films/Nowplaying.vue'
import Comingsoon  from '@/views/films/Comingsoon'
import Detail from '@/views/Detail.vue'
import login from '@/views/login.vue'
import City from '@/views/City.vue'
import Search from '@/views/Search.vue'

Vue.use(VueRouter) // 注册路由插件

// 配置表
const routes = [
  {
    path: '/films',
    component: Films,
    children: [
      {
        path: '/films/nowplaying',
        component: Nowplaying
      },
      {
        path: '/films/comingsoon',
        component: Comingsoon
      },
      {
        path: '/films',
        redirect: '/films/nowplaying'
      }
    ]
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/center',
    component: Center,
    meta:{
      isload:true
    }
  },
  {
    name:'/indetail',
    path: '/detail/:id',
    component: Detail
  },
  {
    path:'/login',
    component:login
  },
  {
    path:'/city',
    component:City
  },
  {
    path:'/search',
    component:Search
  },
  {
    path: '*',
    redirect: '/films'
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  //console.log(to)
  if(to.meta.isload){
    if(localStorage.getItem('token')){
      next()
    }else{
      next({
        path:'/login',
        query:{redirect: to.fullPath} //进不去先保存要去的路径
      })
    }
  }else{
    next()
  }

  
})
export default router
