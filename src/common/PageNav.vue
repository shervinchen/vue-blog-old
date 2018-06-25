<template lang="html">
  <nav class="page-nav">
    <a href="javascript:;" class="page-first">« First</a>
    <a href="javascript:;" class="page-prev">« Prev</a>
    <a href="javascript:;" class="page-number current">1</a>
    <a href="javascript:;" class="page-number">2</a>
    <a href="javascript:;" class="page-number">3</a>
    <a href="javascript:;" class="page-space">...</a>
    <a href="javascript:;" class="page-number">10</a>
    <a href="javascript:;" class="page-next">Next »</a>
    <a href="javascript:;" class="page-last">Last »</a>
  </nav>
</template>

<script>
export default {
  name: 'PageNav'
}
</script>

<style lang="stylus" scoped>
  .page-nav
    text-align: center
    margin: 30px 0
    font-size: 0
    .page-prev, .page-next, .page-first, .page-last
      display: inline-block
      vertical-align: middle
      color: #4d4d4d
      opacity: 1
      font-size: 16px
      line-height: 26px
      &:hover
        color: #5e5e5e
    .page-prev, .page-next
      margin: 0 28px
    .page-first, .page-last
      margin: 0
    .page-number
      display: inline-block
      vertical-align: middle
      width: 20px
      height: 26px
      background-color: #4d4d4d
      color: #fff
      line-height: 26px
      font-size: 12px
      margin: 0 6px
      border-radius: 2px
      &.current
        background-color: #88acdb
        cursor: default
        &:hover
          background-color: #88acdb
      &:hover
        background-color: #5e5e5e
    .page-space
      display: inline-block
      vertical-align: middle
      font-size: 16px
      line-height: 26px
      color: #4d4d4d
      opacity: 1
      cursor: default
  @media screen and (max-width: 800px)
    .article-pagination
      .page-first, .page-last
        display: none
      .page-prev, .page-next
        margin: 0 14px
</style>
