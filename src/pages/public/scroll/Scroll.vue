<template lang="html">
  <div class="app-scroll" @click="goTop" v-show="isShowScroll">
    <i class="icon-back scroll-icon"></i>
  </div>
  <!-- <vm-back-top></vm-back-top> -->
</template>

<script>
export default {
  name: 'AppScroll',
  data () {
    return {
      timer: null,
      isTop: true,
      isShowScroll: false,
      elem: null
    }
  },
  methods: {
    bindScroll () {
      let clientHeight = this.elem.clientHeight
      this.elem.addEventListener('scroll', () => {
        let osTop = this.elem.scrollTop
        if (osTop >= clientHeight) {
          this.isShowScroll = true
        } else {
          this.isShowScroll = false
        }
        if (!this.isTop) {
          clearInterval(this.timer)
        }
        this.isTop = false
      })
    },
    goTop () {
      if (this.timer) {
        clearInterval(this.timer)
      }
      this.timer = setInterval(() => {
        let osTop = this.elem.scrollTop
        let ispeed = Math.floor(-osTop / 5)
        this.elem.scrollTop = osTop + ispeed
        this.isTop = true
        if (osTop === 0) {
          clearInterval(this.timer)
        }
      }, 30)
    }
  },
  mounted () {
    this.elem = document.getElementById('app')
    this.bindScroll()
  }
}
</script>

<style lang="stylus" scoped>
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
  @media screen and (max-width: 800px)
    .app-scroll
      display: none
</style>
