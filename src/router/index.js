import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Detail from '@/pages/detail/Detail'
import Archive from '@/pages/archive/Archive'
import Album from '@/pages/album/Album'
import Reading from '@/pages/reading/Reading'
import About from '@/pages/about/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/archive',
      name: 'Archive',
      component: Archive
    },
    {
      path: '/album',
      name: 'Album',
      component: Album
    },
    {
      path: '/reading',
      name: 'Reading',
      component: Reading
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
