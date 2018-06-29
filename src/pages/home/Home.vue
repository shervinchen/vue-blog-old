<template lang="html">
  <div class="main-home">
    <home-article-list :articleDatas="articleDatas"></home-article-list>
    <page-nav @change="handleChangePage" :pageOption="pageOption"></page-nav>
  </div>
</template>

<script>
import HomeArticleList from './components/ArticleList'
import PageNav from 'common/PageNav'

export default {
  name: 'Home',
  components: {
    HomeArticleList,
    PageNav
  },
  data () {
    return {
      articleDatas: [],
      pageOption: {
        // 数据总数
        dataCount: 0,
        // 当前页码
        pageNumber: parseInt(this.$route.params.page) || 1,
        // 每页最多显示的数据数量
        pageSize: 5,
        // 当前页码前后最多显示的页码数量
        pageShow: 2
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
      this.$http.get(process.env.API_HOST + '/articlelist', {
        params: {
          page: parseInt(this.$route.params.page) || 1
        }
      }).then((res) => {
        res = res.data
        if (res.ret && res.data) {
          // const data = res.data
          this.articleDatas = res.data
          this.pageOption.dataCount = res.count
        }
      })
    },
    handleChangePage (pageNumber) {
      this.$router.push({ path: `/page/${pageNumber}` })
      this.getArticleDatas()
    }
  },
  created () {
    this.getArticleDatas()
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
