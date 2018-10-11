<template lang="html">
  <ul>
    <li :class="{'active': item.isActive, 'normal': !item.isActive}" v-for="(item, index) of directories" :key="index">
      <a href="javascript:;" @click="goAnchor(item)">{{item.title}}</a>
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
    goAnchor (item) {
      // this.$emit()
      document.querySelector('#app').scrollTop = document.querySelector(`#articleHeader${item.index}`).offsetTop
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
      line-height: 16px
      margin: 8px 0
      a
        display: block
        padding: 3px 0
      ul
        padding-left: 15px
        list-style-type: square
        li
          ul
            li
              ul
                li
                  &.normal
                    color: #1a1a1a
                    a
                      color: #000
                  &.active
                    color: #009a61
                    a
                      color: #009a61
              &.normal
                color: #1a1a1a
                a
                  color: #000
              &.active
                color: #009a61
                a
                  color: #009a61
          &.normal
            color: #1a1a1a
            a
              color: #000
          &.active
            color: #009a61
            a
              color: #009a61
      &.normal
        color: #1a1a1a
        a
          color: #000
      &.active
        color: #009a61
        a
          color: #009a61
</style>
