import Vue from 'vue'
import Router from 'vue-router'
import fastclick from 'fastclick'
fastclick.attach(document.body)

Vue.use(Router)

const Recommend = () => import('@/components/recommend/recommend')
const Rank = () => import('@/components/rank/rank')
const Search = () => import('@/components/search/search')
const Singer = () => import('@/components/singer/singer')

export default new Router({
  routes: [{
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/singer',
      component: Singer
    }
  ]
})
