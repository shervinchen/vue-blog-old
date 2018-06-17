<template lang="html">
  <div class="main-home">
    <home-article-list></home-article-list>
    <home-pagination></home-pagination>
  </div>
</template>

<script>
import HomeArticleList from './components/ArticleList'
import HomePagination from './components/Pagination'

export default {
  name: 'Home',
  components: {
    HomeArticleList,
    HomePagination
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
</style>
