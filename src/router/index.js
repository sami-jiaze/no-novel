import Vue from "vue"
import VueRouter from "vue-router"

import login from '@/components/mylogin.vue'
import home from '@/components/myhome.vue'
import adminhome from '@/components/AdminHome.vue'

import MyNovel from '@/components/menus/MyNovel.vue'
import Myupload from '@/components/menus/MyUpload.vue'
import manager from '@/components/menus/Manager.vue'
import settings from '@/components/menus/MySettings.vue'
import noveldetail from '@/components/user/noveldetail.vue'
import search from '@/components/menus/MySerch.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: login },
    {
      path: '/home',
      component: home,
      children: [
        { path: 'Myupload', component: Myupload },
        { path: 'MyNovel', component: MyNovel },
        { path: 'MyNovel/:id', component: noveldetail ,props: true},
        { path: 'settings', component: settings },
        { path: 'search', component: search },
        { path: 'search/:id', component: noveldetail ,props: true}
      ]
    },
    {
      path: '/adminhome',
      component: adminhome,
      children: [
        { path: 'manager', component: manager },
      ]
    }
  ]
})

// 全局前置守卫
router.beforeEach(function (to, from, next) {
  if (to.path === '/home') {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
export default router
