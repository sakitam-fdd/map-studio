// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import filters from './filters/index'
// 引入element-ui
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

// cu
import Loading from './components/ui/loading'
Vue.component(Loading.name, Loading)

Vue.config.productionTip = false
Vue.use(Element)
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
