// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import fastClick from 'fastclick'
import 'babel-polyfill'

import 'style/_reset.css'
import 'style/_border.css'
import 'style/_property.css'

Vue.config.productionTip = false

// 解决移动端click 300ms延迟
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
