<template lang="html">
  <div class="main-ablum">
    <div class="ablum-wrap">
      <article class="ablum-content" :class="{show:this.isShowToolbar}">
        <div class="ablum-inner">
          <header class="ablum-header">
            <!-- <h1 class="ablum-title">{{albumData.articleTitle}}</h1> -->
          </header>
          <div class="ablum-entry">
            
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Ablum',
  computed: {
    ...mapState(['isShowToolbar'])
  },
  data () {
    return {
      albumData: {}
    }
  },
  methods: {
    getAblumData () {
      // this.$http.get(process.env.API_HOST + '/album').then((res) => {
      //   res = res.data
      //   if (res.ret && res.data) {
      //     this.albumData = res.data
      //   }
      // })
    }
  },
  mounted () {
    this.getAblumData()
  }
}
</script>

<style lang="stylus" scoped>
  .main-ablum
    margin-bottom: 80px
    .ablum-wrap
      .ablum-content
        position: relative
        margin: 30px
        border: 1px solid #ddd
        border-top: 1px solid #fff
        border-bottom: 1px solid #fff
        background-color: #fff
        transition: all .2s ease-in
        .ablum-inner
          border-color: #d1d1d1
          .ablum-header
            border-left: 5px solid #4d4d4d
            padding: 30px 0 25px 25px
            padding-left: 8%
            .ablum-title
              display: inline
              color: #696969
              font-weight: 300
              line-height: 36px
              font-size: 26px
              transition: color .3s
              margin: 0
          .ablum-entry
            line-height: 1.8em
            padding: 0 8%
        &.show
          background: hsla(0,0%,100%,.3)
  @media screen and (max-width: 800px)
    .main-ablum
      margin-bottom: 0
      .ablum-wrap
        .ablum-content
          padding: 10px
          margin: 10px 0
          border: 0
          font-size: 16px
          color: #555
          .ablum-inner
            .ablum-header
              border-left: none
              padding: 0
              border-bottom: 1px dotted #ddd
              .ablum-title
                display: block
                font-size: 18px
                margin-bottom: 10px
            .ablum-entry
              padding: 10px 0 30px
</style>
