import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Detail from '@/pages/detail/Detail'
import Archive from '@/pages/archive/Archive'
import Album from '@/pages/album/Album'
import Reading from '@/pages/reading/Reading'
import About from '@/pages/about/About'
import Test from '@/pages/test/Test'

Vue.use(Router)

// const scrollBehavior = (to, from, savedPosition) => {
//   let position = {}
//   console.log(to.matched.some(m => m.meta.scrollToTop))
//   if (to.matched.some(m => m.meta.scrollToTop)) {
//     position.x = 0
//     position.y = 0
//   }
//   return position
// }

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/page/:page',
          component: Home
        }
      ]
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/archive',
      name: 'Archive',
      component: Archive,
      children: [
        {
          path: '/archive/page/:page',
          component: Archive
        }
      ]
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
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
