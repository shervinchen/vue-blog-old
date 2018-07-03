<template lang="html">
  <div class="main-archive">
    <archive-list v-if="archiveDatas.length" :archiveDatas="archiveDatas"></archive-list>
    <page-nav @change="handleChangePage" :pageOption="pageOption"></page-nav>
  </div>
</template>

<script>
import ArchiveList from './components/ArchiveList'
import PageNav from 'common/PageNav'

export default {
  name: 'Archive',
  components: {
    ArchiveList,
    PageNav
  },
  data () {
    return {
      archiveDatas: [],
      pageOption: {
        // 数据总数
        dataCount: 0,
        // 当前页码
        pageNumber: parseInt(this.$route.params.page) || 1,
        // 每页最多显示的数据数量
        pageSize: 10,
        // 当前页码前后最多显示的页码数量
        pageShow: 2
      }
    }
  },
  methods: {
    getArchiveDatas () {
      this.$http.get(process.env.API_HOST + '/archivelist', {
        params: {
          page: parseInt(this.$route.params.page) || 1
        }
      }).then((res) => {
        res = res.data
        if (res.ret && res.data) {
          // const data = res.data
          this.archiveDatas = res.data
          this.pageOption.dataCount = res.count
        }
      })
    },
    handleChangePage (pageNumber) {
      this.$router.push({ path: `/archive/page/${pageNumber}` })
      this.getArchiveDatas()
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

<style lang="stylus" scoped>
  .main-archive
    margin-bottom: 80px
  @media screen and (max-width: 800px)
    .main-archive
      margin-bottom: 0
</style>
