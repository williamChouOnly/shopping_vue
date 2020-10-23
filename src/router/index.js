import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../components/Login.vue'
// import Home from '../views/pages/Home.vue'
// import Welcome from '../components/Welcome.vue'
// import Users from '../views/pages/User.vue'
// import Roles from '../views/pages/rights/Roles.vue'
// import Rights from '../views/pages/rights/Rights.vue'

// import List from '../views/pages/product/List.vue'
// import AddProduct from '../views/pages/product/AddProduct.vue'
// import Params from '../views/pages/product/Params.vue'
// import GoodsCatelog from '../views/pages/product/GoodsCatelog.vue'
// import Orders from '../views/pages/Orders.vue'
// import Reports from '../views/pages/Reports.vue'

// 路由懒加载
const Login = () => import(/* webpackChunkName: "Login_Home_Welcome" */ '../components/Login.vue')
const Home = () => import(/* webpackChunkName: "Login_Home_Welcome" */ '../views/pages/Home.vue')
const Welcome = () => import(/* webpackChunkName: "Login_Home_Welcome" */ '../components/Welcome.vue')

const Users = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '../views/pages/User.vue')
const Rights = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '../views/pages/rights/Roles.vue')
const Roles = () => import(/* webpackChunkName: "Users_Rights_Roles" */ '../views/pages/rights/Rights.vue')

const List = () => import(/* webpackChunkName: "List_AddProduct" */ '../views/pages/product/List.vue')
const AddProduct = () => import(/* webpackChunkName: "List_AddProduct" */ '../views/pages/product/AddProduct.vue')

const Params = () => import(/* webpackChunkName: "Params_GoodsCatelog" */ '../views/pages/Orders.vue')
const GoodsCatelog = () => import(/* webpackChunkName: "Params_GoodsCatelo" */ '../views/pages/product/GoodsCatelog.vue')

const Orders = () => import(/* webpackChunkName: "Orders_Reports" */ '../views/pages/product/Params.vue')
const Reports = () => import(/* webpackChunkName: "Orders_Reports" */ '../views/pages/Reports.vue')

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

        },
        {
          path:'/goods',
          component:List,
        },
        {
          path:'/goods/addProduct',
          component:AddProduct

        },
        {
          path:'/params',
          component:Params

        },
        {
          path:'/categories',
          component:GoodsCatelog

        },
        {
          path:'/orders',
          component:Orders

        },
        {
          path:'/reports',
          component:Reports

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
