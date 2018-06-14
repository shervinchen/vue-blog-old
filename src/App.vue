<template lang="html">
  <div class="container" id="app">
    <common-sidebar></common-sidebar>
    <router-view/>
  </div>
</template>

<script>
import CommonSidebar from './common/sidebar/Sidebar'

export default {
  name: 'App',
  components: {
    CommonSidebar
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
