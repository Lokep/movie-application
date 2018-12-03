// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vant from 'vant'
import 'vant/lib/index.css'
import Meta from 'vue-meta'
import { Lazyload } from 'vant'


// import Footer from './components/footer/footer.vue'

Vue.use(Vant)
Vue.use(Meta)

// options 为可选参数，无则不传
Vue.use(Lazyload, {
	loading:'../static/images/default.png',
	error:'../static/images/default.png',
	preload:'7.6rem'
});
// Vue.use(Footer)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
