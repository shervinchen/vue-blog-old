<template lang="html">
  <div class="app-main" :class="appMainClass">
    <main-mobile-nav></main-mobile-nav>
    <slot :isShowToolBar="isShowToolBar"></slot>
    <main-footer></main-footer>
    <main-scroll></main-scroll>
  </div>
</template>

<script>
import MainMobileNav from './components/MobileNav'
import MainScroll from './components/Scroll'
import MainFooter from './components/Footer'

import { mapState } from 'vuex'

export default {
  name: 'AppMain',
  components: {
    MainMobileNav,
    MainScroll,
    MainFooter
  },
  computed: {
    ...mapState(['isShowToolBar']),
    appMainClass () {
      return {
        show: this.isShowToolBar,
        hide: !this.isShowToolBar
      }
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
    &.show
      background: none
      opacity: .9
      -webkit-animation-duration: .8s;
      animation-duration: .8s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      -webkit-animation-name: leftIn;
      animation-name: leftIn
    &.hide
      -webkit-animation-duration: .8s;
      animation-duration: .8s;
      -webkit-animation-name: leftOut;
      animation-name: leftOut
  @media screen and (max-width: 800px)
    .app-main
      position: relative
      left: 0
</style>
