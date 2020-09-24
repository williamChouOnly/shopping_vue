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
// 把axios挂载到http上
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
