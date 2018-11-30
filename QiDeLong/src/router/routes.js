import Login from '@/views/Login'
import Home from '@/views/Home'
import Social from '@/views/Social'
import Movie from '@/views/Movie'
import User from '@/views/User'
import Search from '@/views/Search'

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
        requireAuth: true
    },
    children: []
}, {
    path: '/movie',
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
},{
	path:'/Search',
	name:'搜索',
	component:Search,
}]


export default routes
