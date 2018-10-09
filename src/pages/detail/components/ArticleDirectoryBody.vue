<template lang="html">
  <ul>
    <li v-for="(item, index) of directories" :key="index">
      <a href="javascript:;" @click="goAnchor(item.offsetTop)">{{item.title}}</a>
      <article-directory-body v-if="item.children" :directories="item.children"></article-directory-body>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ArticleDirectoryBody',
  props: {
    directories: Array
  },
  data () {
    return {}
  },
  methods: {
    goAnchor (offsetTop) {
      // console.log(offsetTop)
      document.querySelector('#app').scrollTop = offsetTop
    }
  },
  mounted () {}
}
</script>

<style lang="stylus" scoped>
  ul
    padding-left: 15px
    list-style-type: square
    font-size: 14px
    font-family: -apple-system,"Helvetica Neue",Helvetica,Arial,"PingFang SC","Hiragino Sans GB","WenQuanYi Micro Hei","Microsoft Yahei",sans-serif
    li
      line-height: 20px
      a
        display: block
        padding: 3px 0
        color: #000
      ul
        padding-left: 15px
        list-style-type: square
</style>
