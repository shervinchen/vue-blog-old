<template lang="html">
  <div class="main-home">
    <home-article-list></home-article-list>
    <home-article-pagination></home-article-pagination>
  </div>
</template>

<script>
import HomeArticleList from './components/ArticleList'
import HomeArticlePagination from './components/ArticlePagination'

export default {
  name: 'Home',
  components: {
    HomeArticleList,
    HomeArticlePagination
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
  .main-home
    margin-bottom: 80px
  @media screen and (max-width: 800px)
    .main-home
      margin-bottom: 0
</style>
