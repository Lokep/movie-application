import Vue from 'vue'
import Router from 'vue-router'

import routes from './routes.js'

Vue.use(Router)



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
