// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import fastClick from 'fastclick'
import 'babel-polyfill'
import store from './store'

import axios from 'axios'

import 'style/_reset.css'
import 'style/_border.css'
import 'style/_property.css'
import 'style/markdown.css'
import 'style/prism.css'

import VuePrism from 'vue-prism'
import VueLoading from 'vue-loading-template'
import VuePreview from 'vue-preview'
import { VueWheelsPagination } from 'vue-wheels'

Vue.use(VuePrism)
Vue.use(VueLoading, {
  type: 'spin',
  color: '#2c3e50',
  size: {
    width: '50px',
    height: '50px'
  }
})
// defalut install
Vue.use(VuePreview)

Vue.use(VueWheelsPagination)

Vue.config.productionTip = false
Vue.prototype.$http = axios

// 解决移动端click 300ms延迟
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
