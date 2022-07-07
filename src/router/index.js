import Vue from 'vue'
import VueRouter from 'vue-router'


const examTest = ()=>import("@/views/exam/examProgramme/examTest.vue")



import {getToken} from '@/util/auth'
import Store from '../store/';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: examTest,
    meta: {
      title: '首页'
    }
  }
]




const router = new VueRouter({
  // base: "/school/",
  mode: 'history',
  linkActiveClass: 'active',
  routes
})

export default router
