import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/Login'
import Home from '@/views/Home'
import Social from '@/views/Social'
import Movie from '@/views/Movie'
import User from '@/views/User'

Vue.use(Router)

const routes = [{
  path: '/login',
  name: '登录',
  component: Login
}, {
  path: '/',
  name: '首页',
  component: Home,
  meta: {
    requireAuth: true
  },
  children: []
}, {
  path: 'movie',
  name: '电影',
  component: Movie,
  meta: {
    requireAuth: true
  }
}, {
  path: '/social',
  name: '社区',
  component: Social,
  meta: {
    requireAuth: true
  }
}, {
  path: '/user',
  name: '用户',
  component: User,
  meta: {
    requireAuth: true
  }
}]

// if (window.localStorage.getItem('token')) {
//   store.commit(types.LOGIN, window.localStorage.getItem('token'))
// }

const router = new Router({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  // if (to.matched.some(r => r.meta.requireAuth)) {
  //   var data = localStorage.getItem('token');
  //   var dataObj = JSON.parse(data);
  //   if (data && new Date().getTime() - dataObj.time < 24 * 60 * 60 * 1000) {
  //     next();
  //   } else {
  //     alert("信息已过期")
  //     next({
  //       path: '/manage/login',
  //       query: {
  //         redirect: to.fullPath
  //       }
  //     })
  //   }
  // } else {
     next();
  // }
})

export default router;
