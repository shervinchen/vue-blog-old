<template lang="html">
  <div class="main-archive">
    <vue-loading v-if="isShowLoading"></vue-loading>
    <archive-list v-if="archiveDatas.length" :archiveDatas="archiveDatas"></archive-list>
    <!-- <page-nav v-if="pageOption.dataCount != 0" @change="handleChangePage" :pageOption="pageOption"></page-nav> -->
    <vue-wheels-pagination v-if="archiveDatas.length != 0" @pageChange="change" :curr="curr" :count="count" :limit="limit" :info="info"></vue-wheels-pagination>
  </div>
</template>

<script>
import ArchiveList from './components/ArchiveList'

export default {
  name: 'Archive',
  components: {
    ArchiveList
  },
  data () {
    return {
      isShowLoading: true,
      archiveDatas: [],
      // pageOption: {
      //   // 数据总数
      //   dataCount: 0,
      //   // 当前页码
      //   pageNumber: parseInt(this.$route.params.page) || 1,
      //   // 每页最多显示的数据数量
      //   pageSize: 10,
      //   // 当前页码前后最多显示的页码数量
      //   pageShow: 2
      // },
      count: 0,
      limit: 10,
      curr: parseInt(this.$route.params.page) || 1,
      info: {
        firstInfo: '« First',
        prevInfo: '« Prev',
        nextInfo: 'Next »',
        lastInfo: 'Last »'
      }
    }
  },
  methods: {
    getArchiveDatas () {
      this.isShowLoading = true
      this.$http.get(process.env.API_HOST + '/archivelist', {
        params: {
          page: parseInt(this.$route.params.page) || 1
        }
      }).then((res) => {
        res = res.data
        if (res.ret && res.data) {
          // const data = res.data
          this.archiveDatas = res.data
          this.count = res.count
          this.curr = parseInt(this.$route.params.page) || 1
          this.isShowLoading = false
        }
      })
    },
    change (pageNumber) {
      if (pageNumber !== parseInt(this.$route.params.page)) {
        this.$router.push({ path: `/archive/page/${pageNumber}` })
        this.getArchiveDatas()
      }
    }
  },
  watch: {
    '$route' (to, from) {
      if (this.$route.name === 'Archive') {
        this.getArchiveDatas()
      }
    }
  },
  created () {
    this.getArchiveDatas()
  }
}
</script>

<style lang="stylus">
  @import '~style/common.styl'
  .main-archive
    margin-bottom: 80px
  @media screen and (max-width: 800px)
    .main-archive
      margin-bottom: 0
</style>
