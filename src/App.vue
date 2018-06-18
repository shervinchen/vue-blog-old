<template lang="html">
  <div class="container" :class="{show:this.isShowToolBar}" id="app">
    <app-canvas></app-canvas>
    <app-sidebar></app-sidebar>
    <app-main>
      <router-view/>
    </app-main>
  </div>
</template>

<script>
import AppCanvas from './pages/public/canvas/Canvas'
import AppSidebar from './pages/public/sidebar/Sidebar'
import AppMain from './pages/public/main/Main'

import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    AppCanvas,
    AppSidebar,
    AppMain
  },
  computed: {
    ...mapState(['isShowToolBar'])
  },
  data () {
    return {

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
