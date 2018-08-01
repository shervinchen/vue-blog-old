<template lang="html">
  <div class="main-home">
    <vue-loading v-if="isShowLoading"></vue-loading>
    <home-article-list v-if="!isShowLoading" :articleDatas="articleDatas"></home-article-list>
    <!-- <page-nav v-if="pageOption.dataCount != 0" @change="handleChangePage" :pageOption="pageOption"></page-nav> -->
    <vue-wheels-pagination @pageChange="change" :curr="curr" :count="count" :limit="limit" :info="info"></vue-wheels-pagination>
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
  .main-home
    margin-bottom: 80px
    .pagination
      text-align: center
      margin: 30px 0
      font-size: 0
      .pagination-item
        padding: 0
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
        &.prev, &.next, &.first, &.last
          display: inline-block
          background: none
          vertical-align: middle
          color: #4d4d4d
          opacity: 1
          font-size: 16px
          line-height: 26px
          min-width: auto
          width: auto
          height: auto
          &:hover
            color: #5e5e5e
            background: none
        &.prev, &.next
          margin: 0 28px
        &.first, &.last
          margin: 0
        &.ellipsis
          display: inline-block
          vertical-align: middle
          font-size: 16px
          line-height: 26px
          color: #4d4d4d
          opacity: 1
          cursor: default
          background: none
          min-width: auto
          width: auto
          height: auto
          &:hover
            background: none
        &.current
          background-color: #88acdb
          cursor: default
          &:hover
            background-color: #88acdb
        &:hover
          background-color: #5e5e5e
        &.first, &.last
            display: none
  @media screen and (max-width: 800px)
    .main-home
      margin-bottom: 0
      .pagination
        .pagination-item
          &.prev, &.next
            margin: 0 14px
</style>
