<template lang="html">
  <div class="app-main">
    <slot></slot>
    <main-footer></main-footer>
    <main-scroll></main-scroll>
  </div>
</template>

<script>
import MainScroll from './components/Scroll'
import MainFooter from './components/Footer'

export default {
  name: 'AppMain',
  components: {
    MainScroll,
    MainFooter
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
  .app-main
    position: absolute
    right: 0
    min-height: 100%
    background-color: #eaeaea
    left: 300px
    width: auto
    transition: all .2s ease-in
</style>
