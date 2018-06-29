<template lang="html">
  <div class="main-detail">
    <detail-article :articleData="articleData"></detail-article>
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
      articleData: {}
    }
  },
  methods: {
    getArticleData () {
      this.$http.get(process.env.API_HOST + '/article', {
        params: {
          id: this.$route.params.id
        }
      }).then((res) => {
        res = res.data
        if (res.ret && res.data) {
          this.articleData = res.data
        }
      })
    }
  },
  mounted () {
    this.getArticleData()
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
