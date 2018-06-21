<template lang="html">
  <div class="main-detail">
    <detail-article></detail-article>
    <detail-article-nav></detail-article-nav>
    <detail-article-comment></detail-article-comment>
  </div>
</template>

<script>
import DetailArticle from './components/Article'
import DetailArticleNav from './components/ArticleNav'
import DetailArticleComment from './components/ArticleComment'

export default {
  name: 'Detail',
  components: {
    DetailArticle,
    DetailArticleNav,
    DetailArticleComment
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
  .main-detail
    margin-bottom: 80px
  @media screen and (max-width: 800px)
    .main-detail
      margin-bottom: 0
</style>
