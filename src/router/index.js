import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../views/pages/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../views/pages/User.vue'
import Roles from '../views/pages/rights/Roles.vue'
import Rights from '../views/pages/rights/Rights.vue'


Vue.use(VueRouter)


const router = new VueRouter({
  routes:[
    {
      path:'/',
      redirect:'/login'
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/home',
      component:Home,
      redirect:'/welcome',
      children:[
        {
          path:'/welcome',
          component:Welcome
        },
        {
          path:'/users',
          component:Users
        },
        {
          path:'/roles',
          component:Roles
        },
        {
          path:'/rights',
          component:Rights
        }
      ]
    },
  ]
})

// 挂载路由导航卫士
router.beforeEach((to,from,next) =>{
  // to表示从哪来，from表示到哪去，next表示放行
  if(to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next()
})

export default router
