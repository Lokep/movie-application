import Vue from 'vue'
import Router from 'vue-router'

// import Login from '@/views/Login'
// import Home from '@/views/Home'
// import Social from '@/views/Social'
// import Movie from '@/views/Movie'
// import User from '@/views/User'

import Routes from './routes.js'

Vue.use(Router)

console.log(Routes);

// if (window.localStorage.getItem('token')) {
//   store.commit(types.LOGIN, window.localStorage.getItem('token'))
// }

const router = new Router({
  mode: 'history',
  Routes
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
