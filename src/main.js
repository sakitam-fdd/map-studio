// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import filters from './filters/index'
import Loading from './components/ui/loading'
// 引入element-ui
import { Button, Select, Tooltip, Alert } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.component(Tooltip.name, Tooltip)
Vue.component(Alert.name, Alert)
Vue.component(Loading.name, Loading)
Vue.prototype.$alert = Alert
Vue.config.productionTip = false
for (let key in filters) {
  Vue.filter(key, filters[key])
}
/* eslint-disable no-new */
const instance = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})

export default instance
