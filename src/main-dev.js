import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入字体图标
import '../src/assets/fonts/iconfont.css'
// 导入全局样式表
import '../src/assets/css/global.css'

import axios from 'axios'
// 导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// 导入表格
import TreeTable from 'vue-table-with-tree-grid'
// 导入nprogess包的css与js
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueQuillEditor)

Vue.config.productionTip = false
// 设置axios默认地址
axios.defaults.baseURL = 'http://172.16.0.6:8888/api/private/v1/'
// axios拦截器添加token验证，只有登录后才能调用其他的api
axios.interceptors.request.use(config =>{
  // console.log(config)
  // 在请求后显示进度条nprogress
  NProgress.start()
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须ruturn config
  return config
})
axios.interceptors.response.use(config =>{
  // 在response后隐藏进度条nprogress
  NProgress.done()
  return config
})
// 把axios挂载到http上
Vue.prototype.$http = axios



Vue.component('tree-table', TreeTable)

// 时间过滤器
Vue.filter('dataFormate',function(originVal){
  const dt = new Date(originVal)
  const y = dt.getFullYear()
  const m = (dt.getMonth()+1+'').padStart(2,'0')
  const d = (dt.getDate()+'').padStart(2,'0')
  const hh = (dt.getHours()+'').padStart(2,'0')
  const mm = (dt.getMinutes()+'').padStart(2,'0')
  const ss = (dt.getSeconds()+'').padStart(2,'0')
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
