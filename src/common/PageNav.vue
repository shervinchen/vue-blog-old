<template lang="html">
  <nav class="page-nav">
    <!-- <a href="javascript:;" @click="pageFirstClick()" class="page-first" v-if="pageNumber > 1">« First</a> -->
    <a href="javascript:;" @click="pagePrevClick()" class="page-prev" v-if="pageNumber > 1">« Prev</a>
    <a href="javascript:;" @click="pageFirstClick()" class="page-number" v-if="pageNumber > 1">1</a>
    <a href="javascript:;" class="page-space" v-if="pageNumber - (pageShow + 1) > 1">...</a>
    <a href="javascript:;" @click="pageNumberClick(pageIndex, 'front')" class="page-number" v-for="pageIndex in pageFrontList" :key="pageNumber - pageIndex" v-if="pageNumber - pageIndex > 1">
      {{pageNumber - pageIndex}}
    </a>
    <a href="javascript:;" class="page-number current">{{pageNumber}}</a>
    <a href="javascript:;" @click="pageNumberClick(pageIndex, 'behind')" class="page-number" v-for="pageIndex in pageBehindList" :key="pageNumber + pageIndex" v-if="pageNumber + pageIndex < pageCount">
      {{pageNumber + pageIndex}}
    </a>
    <a href="javascript:;" class="page-space" v-if="pageNumber + pageShow + 1 < pageCount">...</a>
    <a href="javascript:;" @click="pageLastClick()" class="page-number" v-if="pageNumber < pageCount">{{pageCount}}</a>
    <a href="javascript:;" @click="pageNextClick()" class="page-next" v-if="pageNumber < pageCount">Next »</a>
    <!-- <a href="javascript:;" @click="pageLastClick()" class="page-last" v-if="pageNumber < pageCount">Last »</a> -->
  </nav>
</template>

<script>
export default {
  name: 'PageNav',
  props: {
    pageOption: Object
  },
  data () {
    return {
      dataCount: this.pageOption.dataCount,
      pageNumber: this.pageOption.pageNumber,
      pageSize: this.pageOption.pageSize,
      pageShow: this.pageOption.pageShow
    }
  },
  computed: {
    pageFrontList () {
      const pageFrontList = []
      for (let i = this.pageOption.pageShow; i >= 1; i--) {
        pageFrontList.push(i)
      }
      return pageFrontList
    },
    pageBehindList () {
      const pageBehindList = []
      for (let i = 1; i <= this.pageOption.pageShow; i++) {
        pageBehindList.push(i)
      }
      return pageBehindList
    },
    pageCount () {
      return Math.ceil(this.pageOption.dataCount / this.pageOption.pageSize)
    }
  },
  methods: {
    pagePrevClick () {
      if (this.pageNumber > 1) {
        // this.pageNumber--
        this.$emit('change', this.pageNumber - 1)
      }
    },
    pageNextClick () {
      if (this.pageNumber < this.pageCount) {
        // this.pageNumber++
        this.$emit('change', this.pageNumber + 1)
      }
    },
    pageFirstClick () {
      // this.pageNumber = 1
      this.$emit('change', 1)
    },
    pageLastClick () {
      // this.pageNumber = this.pageCount
      this.$emit('change', this.pageCount)
    },
    pageNumberClick (pageIndex, type) {
      if (type === 'front') {
        // this.pageNumber = this.pageNumber - pageIndex
        this.$emit('change', this.pageNumber - pageIndex)
      } else {
        // this.pageNumber = this.pageNumber + pageIndex
        this.$emit('change', this.pageNumber + pageIndex)
      }
    }
  },
  watch: {
    '$route' (to, from) {
      this.pageNumber = parseInt(this.$route.params.page) || 1
    }
  }
}
</script>

<style lang="stylus" scoped>
  .page-nav
    text-align: center
    margin: 30px 0
    font-size: 0
    .page-prev, .page-next, .page-first, .page-last
      display: inline-block
      vertical-align: middle
      color: #4d4d4d
      opacity: 1
      font-size: 16px
      line-height: 26px
      &:hover
        color: #5e5e5e
    .page-prev, .page-next
      margin: 0 28px
    .page-first, .page-last
      margin: 0
    .page-number
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
      &.current
        background-color: #88acdb
        cursor: default
        &:hover
          background-color: #88acdb
      &:hover
        background-color: #5e5e5e
    .page-space
      display: inline-block
      vertical-align: middle
      font-size: 16px
      line-height: 26px
      color: #4d4d4d
      opacity: 1
      cursor: default
  @media screen and (max-width: 800px)
    .page-nav
      .page-first, .page-last
        display: none
      .page-prev, .page-next
        margin: 0 14px
</style>
