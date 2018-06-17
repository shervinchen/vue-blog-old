<template lang="html">
  <footer class="main-footer">
    ©&nbsp;{{year}}&nbsp;Rekodsc
  </footer>
</template>

<script>
export default {
  name: 'MainFooter',
  data () {
    return {
      year: ''
    }
  },
  methods: {
    initYear () {
      this.year = (new Date()).getFullYear()
    }
  },
  mounted () {
    this.initYear()
  }
}
</script>

<style lang="stylus" scoped>
  .main-footer
    position: absolute
    font-size: 12px
    font-family: Menlo,Monaco,Andale Mono,lucida console,Courier New,monospace
    text-shadow: 0 1px #fff
    bottom: 30px
    opacity: .6
    width: 100%
    text-align: center
    padding: 0 30px
    line-height: 20px
</style>
