<template lang="html">
  <nav class="article-nav">
    <a href="javascript:;" class="nav-link">
      <i class="icon-circle-left link-icon"></i>
      <span class="link-text">测试1</span>
    </a>
    <a href="javascript:;" class="nav-link">
      <span class="link-text">测试2</span>
      <i class="icon-circle-right link-icon"></i>
    </a>
  </nav>
</template>

<script>
export default {
  name: 'DetailArticleNav'
}
</script>

<style lang="stylus" scoped>
  .article-nav
    margin: 0 0 20px
    padding: 0 32px 10px
    min-height: 30px
    .nav-link
      font-size: 0
      .link-icon
        display: inline-block
        vertical-align: middle
        font-size: 20px
        margin: 0 10px
        color: #08c
      .link-text
        display: inline-block
        vertical-align: middle
        font-size: 16px
        transition: color .3s
        line-height: 20px
        color: #08c
      &:hover
        .link-icon
          color: #4d4d4d
        .link-text
          color: #4d4d4d
      &:last-child
        float: right
      &:first-child
        float: left
  @media screen and (max-width: 800px)
    .article-nav
      margin: 0
      padding: 10px
      .nav-link
        margin: 10px 0
        display: block
        clear: both
        &:first-child
          float: none
        &:last-child
          float: none
          .link-icon
            float: left
</style>
