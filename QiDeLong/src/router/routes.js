import Login from '@/views/Login'
import Home from '@/views/Home'
// import Movie from '@/views/Movie'
import Common from '@/views/CommonTemplate'

// 搜索组件
import Search from '@/views/Search'
// import SearchDefault from '@/views/search/searchDefault.vue'
// import SearchResult from '@/views/search/searchResult.vue'

// 电影组件
import MovieIndex from '@/views/movie/movieIndex.vue'
import MovieDetail from '@/views/movie/movieDetail.vue'

// 用户组件
import UserIndex from '@/views/user/userIndex.vue'
import UserResponse from '@/views/user/userResponse.vue'

import UserEditInfo from '@/views/user/userEditInfo.vue'

//tabBar =>页面中是否有底部导航



// 社区组件
import SocialIndex from '@/views/social/socialIndex.vue'
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
    component: Common,
    children: [
      {
        path: '',
        name: '社区',
        component: SocialIndex,
        meta: {
          requireAuth: true,
          tabBar: true
        }
      }, {
        path: ''
      }
    ]
    
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
    },{
    	path:'userEditInfo',
    	name:'用户信息编辑',
    	component:UserEditInfo,
    	meta:{
    		tabBar:false
    	}
    }]
},{
	path:'/Search',
	component:Search,
	name:'搜索'
}]


export default routes
