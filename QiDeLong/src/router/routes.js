import Login from '@/views/Login'
import Home from '@/views/Home'
import Social from '@/views/Social'
import Search from '@/views/Search'

import Common from '@/views/CommonTemplate'


// 子组件
import MovieIndex from '@/views/movie/movieIndex.vue'
import MovieDetail from '@/views/movie/movieDetail.vue'
import UserIndex from '@/views/user/userIndex.vue'
import UserResponse from '@/views/user/userResponse.vue'
// import SearchDefault from '@/views/search/searchDefault.vue'
// import SearchResult from '@/views/search/searchResult.vue'

const routes = [{
    path: '/login',
    name: '登录',
    component: Login
}, {
    path: '/',
    name: '首页',
    component: Home,
    alias:'/index',
    meta: {
        requireAuth: true,
        tabBar: true
    },
    children: []
}, {
    path: '/movie',
    // name: '电影',
    component: Common,
    children: [{
    	path:'',
    	name: '电影',
      component:MovieIndex,
      meta: {
        requireAuth: true,
        tabBar: true
      }
    },{
        path: 'movieDetail',
        name: '电影详情',
        component: MovieDetail
      }
    ]
}, {
    path: '/social',
    name: '社区',
    component: Social,
    meta: {
        requireAuth: true,
        tabBar: true
    }
}, {
    path: '/user',
    // name: '用户',
    component: Common,
    children:[{
    	path:'',
    	name:'用户',
      component:UserIndex,
      meta: {
        requireAuth: true,
        tabBar: true
      }
    },{
    	path:'userResponse',
    	name:'用户反馈',
    	component:UserResponse
    }]
},{
	path:'/Search',
	component:Search,
	name:'搜索'
}]


export default routes
