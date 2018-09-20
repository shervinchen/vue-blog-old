<template lang="html">
  <div class="main-album">
    <div class="album-wrap">
      <article class="album-content" :class="{show:this.isShowToolbar}">
        <div class="album-inner">
          <header class="album-header">
            <h1 class="album-title">{{albumTitle}}</h1>
          </header>
          <div class="album-entry">
            <div class="album-wrap">
              <section class="album-archive">
                <h1 class="archive-time">2018<em>4月</em></h1>
                <ul class="archive-photos">

                </ul>
              </section>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Album',
  computed: {
    ...mapState(['isShowToolbar'])
  },
  data () {
    return {
      albumTitle: {},
      albumArchives: []
    }
  },
  methods: {
    getAlbumData () {
      this.$http.get(process.env.API_HOST + '/album').then((res) => {
        res = res.data
        if (res.ret && res.data) {
          this.albumTitle = res.data.albumTitle
          this.albumArchives = res.data.albumArchives
          this.initSlides()
        }
      })
    },
    initSlides () {
      this.albumArchives.forEach((albumArchive, index) => {
        albumArchive.archivePhotos.forEach((archivePhoto, index) => {
          
        })
        let slide = {
          src: item.bookImgSrc,
          msrc: item.bookImgSrc,
          alt: item.bookTitle,
          title: item.bookTitle,
          w: 1080,
          h: 1380
        }
        this.slides.push([slide])
      })
    }
  },
  mounted () {
    this.getAlbumData()
  }
}
</script>

<style lang="stylus" scoped>
  .main-album
    margin-bottom: 80px
    .album-wrap
      .album-content
        position: relative
        margin: 30px
        border: 1px solid #ddd
        border-top: 1px solid #fff
        border-bottom: 1px solid #fff
        background-color: #fff
        transition: all .2s ease-in
        .album-inner
          border-color: #d1d1d1
          .album-header
            border-left: 5px solid #4d4d4d
            padding: 30px 0 25px 25px
            padding-left: 8%
            .album-title
              display: inline
              color: #696969
              font-weight: 300
              line-height: 36px
              font-size: 26px
              transition: color .3s
              margin: 0
          .album-entry
            line-height: 1.8em
            padding: 0 8%
            .album-wrap
              position: relative
              min-height: 500px
              .album-archives
                position: relative
                .archive-time
                  display: inline
                  margin-bottom: 10px
                  font-size: 16px;
                  font-weight: 900
                  line-height: 1.25
                  em
                    font-style: normal
                    font-size: 14px
                    margin-left: 10px
        &.show
          background: hsla(0,0%,100%,.3)
  @media screen and (max-width: 800px)
    .main-album
      margin-bottom: 0
      .album-wrap
        .album-content
          padding: 10px
          margin: 10px 0
          border: 0
          font-size: 16px
          color: #555
          .album-inner
            .album-header
              border-left: none
              padding: 0
              border-bottom: 1px dotted #ddd
              .album-title
                display: block
                font-size: 18px
                margin-bottom: 10px
            .album-entry
              padding: 10px 0 30px
</style>
