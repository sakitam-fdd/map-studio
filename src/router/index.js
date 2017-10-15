import Vue from 'vue'
import Router from 'vue-router'
import user from '../views/user/index'
import studioManage from '../views/user/studioManage'
import studio from '../views/studio/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user',
      name: 'user',
      component: user,
      children: [
        {
          path: 'studioManage',
          name: 'studioManage',
          component: studioManage
        }
      ]
    },
    {
      path: '/studio',
      name: 'studio',
      component: studio
    }
  ]
})
