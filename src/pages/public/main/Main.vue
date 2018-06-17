<template lang="html">
  <div class="app-main">
    <main-mobile-nav></main-mobile-nav>
    <slot></slot>
    <main-footer></main-footer>
    <main-scroll></main-scroll>
  </div>
</template>

<script>
import MainMobileNav from './components/MobileNav'
import MainScroll from './components/Scroll'
import MainFooter from './components/Footer'

export default {
  name: 'AppMain',
  components: {
    MainMobileNav,
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
  @media screen and (max-width: 800px)
    .app-main
      position: relative
      left: 0
</style>
