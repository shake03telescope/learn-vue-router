import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import Login from '../views/Login.vue'
import HelloWorld from '../components/HelloWorld.vue'
import HomeInfo from '../views/home-component/HomeInfo.vue'
import FutureFuc from '../views/home-component/FutureFuc.vue'
import CandyLib from '../views/home-component/CandyLib.vue'
// 动态引入组件
const Test = () => import('../components/HelloWorld.vue')

// 注册了router对象
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    // component: HelloWorld
    component: HelloWorld
  },
  {
    path: '/login',
    name: 'login',
    component: Test
  },
  {
    path: '/home/:username',
    name: 'home',
    component: HomeView,
    children: [
      { path: '/', redirect: '/home/:username/info' },
      {
        // 孩子不用加info
        path: 'info',
        component: HomeInfo
      },
      {
        path: 'candy',
        component: CandyLib
      },
      { path: 'future', component: FutureFuc }
    ]
  },
  {
    path: '*',
    name: 'notfound',
    component: NotFound
  }
  // {
  //   path: '/info',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'hash', // 路由先改为hash模式
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.name === 'home' || to.path === '/login') {
//     next();
//     // 这个地方，拿上token，取后端判断
//   } else if (sessionStorage.getItem('token')) {
//     next()
//   } else { // 用户有没有登录
//     next('/login')
//   }
// })




// router.beforeEach((to, from, next) => {
//   const token = sessionStorage.getItem('token')
//   console.log(to.path)
//   // if (to.name !== 'login' && true) {
//   if (to.path !== '/login' && !token) {
//     console.log(Vue)
//     next('/login')
//   } else {
//     next()
//   }
// })

export default router
