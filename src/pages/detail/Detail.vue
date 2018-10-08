<template lang="html">
  <div class="main-detail">
    <vue-loading v-if="isShowLoading"></vue-loading>
    <detail-article v-if="!isShowLoading" :articleData="articleData"></detail-article>
    <detail-article-nav v-if="!isShowLoading"></detail-article-nav>
    <detail-article-comment v-if="!isShowLoading"></detail-article-comment>
    <detail-article-directory v-if="!isShowLoading"></detail-article-directory>
  </div>
</template>

<script>
import DetailArticle from './components/Article'
import DetailArticleNav from './components/ArticleNav'
import DetailArticleComment from './components/ArticleComment'
import DetailArticleDirectory from './components/ArticleDirectory'

export default {
  name: 'Detail',
  components: {
    DetailArticle,
    DetailArticleNav,
    DetailArticleComment,
    DetailArticleDirectory
  },
  data () {
    return {
      isShowLoading: true,
      articleData: {}
    }
  },
  watch: {
    '$route' (to, from) {
      this.getArticleData()
    }
  },
  methods: {
    getArticleData () {
      this.isShowLoading = true
      this.$http.get(process.env.API_HOST + '/article', {
        params: {
          id: this.$route.params.id
        }
      }).then((res) => {
        res = res.data
        if (res.ret && res.data) {
          this.articleData = res.data
          this.isShowLoading = false
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
  @import '~style/common.styl'
  .main-detail
    margin-bottom: 80px
  @media screen and (max-width: 800px)
    .main-detail
      margin-bottom: 0
</style>
