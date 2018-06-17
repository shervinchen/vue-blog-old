<template lang="html">
  <div class="main-scroll">
    <i class="icon-back scroll-icon"></i>
  </div>
</template>

<script>
export default {
  name: 'MainScroll',
  components: {

  },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
  .main-scroll
    position: fixed
    width: 40px
    height: 40px
    text-align: center
    right: 30px
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
</style>
