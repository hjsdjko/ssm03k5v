import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import shishengjiaoliu from '@/views/modules/shishengjiaoliu/list'
    import discusskechengziyuan from '@/views/modules/discusskechengziyuan/list'
    import kechengziyuan from '@/views/modules/kechengziyuan/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import kechengfenlei from '@/views/modules/kechengfenlei/list'
    import jiaoshi from '@/views/modules/jiaoshi/list'
    import banji from '@/views/modules/banji/list'
    import storeup from '@/views/modules/storeup/list'
    import kechengxinxi from '@/views/modules/kechengxinxi/list'
    import config from '@/views/modules/config/list'
    import zuoyexinxi from '@/views/modules/zuoyexinxi/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
          ,{
	path: '/news',
        name: '网站资讯',
        component: news
      }
          ,{
	path: '/shishengjiaoliu',
        name: '师生交流',
        component: shishengjiaoliu
      }
          ,{
	path: '/discusskechengziyuan',
        name: '课程资源评论',
        component: discusskechengziyuan
      }
          ,{
	path: '/kechengziyuan',
        name: '课程资源',
        component: kechengziyuan
      }
          ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
          ,{
	path: '/kechengfenlei',
        name: '课程分类',
        component: kechengfenlei
      }
          ,{
	path: '/jiaoshi',
        name: '教师',
        component: jiaoshi
      }
          ,{
	path: '/banji',
        name: '班级',
        component: banji
      }
          ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
          ,{
	path: '/kechengxinxi',
        name: '课程信息',
        component: kechengxinxi
      }
          ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
          ,{
	path: '/zuoyexinxi',
        name: '作业信息',
        component: zuoyexinxi
      }
        ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
