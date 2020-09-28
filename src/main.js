import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入字体图标
import '../src/assets/fonts/iconfont.css'
// 导入全局样式表
import '../src/assets/css/global.css'

import axios from 'axios'

Vue.config.productionTip = false
// 设置axios默认地址
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// axios拦截器添加token验证，只有登录后才能调用其他的api
axios.interceptors.request.use(config =>{
  // console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须ruturn config
  return config
})
// 把axios挂载到http上
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
