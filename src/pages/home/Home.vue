<template lang="html">
  <div class="main-home">
    <vue-loading v-if="isShowLoading"></vue-loading>
    <home-article-list v-if="!isShowLoading" :articleDatas="articleDatas"></home-article-list>
    <!-- <page-nav v-if="pageOption.dataCount != 0" @change="handleChangePage" :pageOption="pageOption"></page-nav> -->
    <vue-wheels-pagination v-if="articleDatas.length != 0" @pageChange="change" :curr="curr" :count="count" :limit="limit" :info="info"></vue-wheels-pagination>
  </div>
</template>

<script>
import HomeArticleList from './components/ArticleList'

export default {
  name: 'Home',
  components: {
    HomeArticleList
  },
  data () {
    return {
      isShowLoading: true,
      articleDatas: [],
      count: 0,
      limit: 5,
      curr: parseInt(this.$route.params.page) || 1,
      info: {
        firstInfo: '« First',
        prevInfo: '« Prev',
        nextInfo: 'Next »',
        lastInfo: 'Last »'
      }
    }
  },
  watch: {
    '$route' (to, from) {
      if (this.$route.name === 'Home') {
        this.getArticleDatas()
      }
    }
  },
  methods: {
    getArticleDatas () {
      this.isShowLoading = true
      this.$http.get(process.env.API_HOST + '/articlelist', {
        params: {
          page: parseInt(this.$route.params.page) || 1
        }
      }).then((res) => {
        res = res.data
        if (res.ret && res.data) {
          // const data = res.data
          this.articleDatas = res.data
          this.count = res.count
          this.curr = parseInt(this.$route.params.page) || 1
          this.isShowLoading = false
        }
      })
    },
    change (pageNumber) {
      if (pageNumber !== parseInt(this.$route.params.page)) {
        this.$router.push({ path: `/page/${pageNumber}` })
        this.getArticleDatas()
      }
    }
  },
  created () {
    this.getArticleDatas()
  }
}
</script>

<style lang="stylus">
  @import '~style/common.styl'
  .main-home
    margin-bottom: 80px
  @media screen and (max-width: 800px)
    .main-home
      margin-bottom: 0
</style>
