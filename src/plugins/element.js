import Vue from 'vue'
import { Button,Form,FormItem,Input,Message} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

// 把Message挂载到全局
Vue.prototype.$message = Message