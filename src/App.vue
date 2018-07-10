<template lang="html">
  <div class="container" @click="handleContainerClick" :class="{show:this.isShowToolbar}" ref="app" id="app">
    <app-canvas></app-canvas>
    <app-sidebar></app-sidebar>
    <app-toolbar></app-toolbar>
    <app-main>
      <!-- <keep-alive exclude="Home,Detail"> -->
        <!-- <router-view :key="$route.path" /> -->
        <router-view/>
      <!-- </keep-alive> -->
    </app-main>
    <app-scroll></app-scroll>
  </div>
</template>

<script>
import AppCanvas from './pages/public/canvas/Canvas'
import AppSidebar from './pages/public/sidebar/Sidebar'
import AppToolbar from './pages/public/toolbar/Toolbar'
import AppScroll from './pages/public/scroll/Scroll'
import AppMain from './pages/public/main/Main'

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {
    AppCanvas,
    AppSidebar,
    AppToolbar,
    AppScroll,
    AppMain
  },
  computed: {
    ...mapState(['isShowToolbar'])
  },
  methods: {
    handleContainerClick () {
      this.closeToolBar()
    },
    ...mapMutations(['closeToolBar'])
  },
  watch: {
    '$route' (to, from) {
      this.$refs.app.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    position: relative
    min-height: 100%
    height: 100%
    overflow-x: hidden
    overflow-y: auto
    .app-scroll
      position: fixed
      width: 40px
      height: 40px
      text-align: center
      right: 40px
      bottom: 60px
      z-index: 999
      font-size: 14px
      opacity: .8
      cursor: pointer
      .scroll-icon
        transition: .3s
        color: #fff
        background-color: #ccc
        transform: rotate(90deg)
        font-size: 32px
        line-height: 40px
        width: 40px
        text-align: center
        display: block
      &:hover
        .scroll-icon
          background-color: rgba(36, 193, 246, .9)
    &.show
      background: linear-gradient(200deg, #a0cfe4, #e8c37e)
  @media screen and (max-width: 800px)
    .container
      .app-scroll
        display: none
</style>
