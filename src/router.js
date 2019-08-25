import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import productList from './views/productList.vue'
import user from './views/user.vue'
import support from './views/support.vue'
import sponsor from './views/sponsor.vue'
Vue.use(Router)

export default new Router({
  routes: [
		{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/productList',
      name: 'productList',
      component: productList
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/support',
      name: 'support',
      component: support
    },
    {
      path: '/sponsor',
      name: 'sponsor',
      component: sponsor
    }
  ]
})
