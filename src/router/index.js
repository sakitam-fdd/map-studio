import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie'
import user from '../views/user/index'
import studioManage from '../views/user/studioManage'
import studio from '../views/studio/index'
Vue.use(Router)

const loginRouter = {
  path: '/',
  name: 'login',
  meta: {
    title: 'Login - 登录'
  },
  component: resolve => { require(['../views/login/index.vue'], resolve) }
}

const page404 = {
  path: '/*',
  name: 'error_404',
  meta: {
    title: '404-页面不存在'
  },
  component: resolve => { require(['../components/error_page/404.vue'], resolve) }
}

const page401 = {
  path: '/401',
  meta: {
    title: '401-权限不足'
  },
  name: 'error_401',
  component: resolve => { require(['../components/error_page/401.vue'], resolve) }
}

const page500 = {
  path: '/500',
  meta: {
    title: '500-服务端错误'
  },
  name: 'error_500',
  component: resolve => { require(['../components/error_page/500.vue'], resolve) }
}

const appRouter = [
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

const routers = [
  loginRouter,
  ...appRouter,
  page500,
  page401,
  page404
]

const router = new Router({
  routes: routers
})
router.beforeEach((to, from, next) => {
  if (!Cookies.get('user') && to.name !== 'login') {  // 判断是否已经登录且前往的页面不是登录页
    next({
      name: 'login'
    })
  } else if (Cookies.get('user') && to.name === 'login') {  // 判断是否已经登录且前往的是登录页
    next({
      name: 'studio'
    })
  } else {
    next()
  }
})

export default router
