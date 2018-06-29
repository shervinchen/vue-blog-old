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
  </div>
</template>

<script>
import AppCanvas from './pages/public/canvas/Canvas'
import AppSidebar from './pages/public/sidebar/Sidebar'
import AppToolbar from './pages/public/toolbar/Toolbar'
import AppMain from './pages/public/main/Main'

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {
    AppCanvas,
    AppSidebar,
    AppToolbar,
    AppMain
  },
  computed: {
    ...mapState(['isShowToolbar'])
  },
  data () {
    return {

    }
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
    &.show
      background: linear-gradient(200deg, #a0cfe4, #e8c37e)
</style>
