<template lang="html">
  <div class="container" id="app">
    <app-sidebar></app-sidebar>
    <app-main>
      <router-view/>
    </app-main>
  </div>
</template>

<script>
import AppSidebar from './pages/public/sidebar/Sidebar'
import AppMain from './pages/public/main/Main'

export default {
  name: 'App',
  components: {
    AppSidebar,
    AppMain
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
</style>
