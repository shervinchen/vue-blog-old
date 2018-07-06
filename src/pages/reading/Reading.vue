<template lang="html">
  <div class="main-reading">
    <section class="section-book" :class="{show:this.isShowToolbar}">
      <div class="book-entry">
        <div class="book-tab">
          <span @click="handleTabClick(index)" :class="tabStatus === index ? 'activited' : ''" class="tab-item" v-for="(tabItem, index) in tabList" :key="index">
            {{tabItem.tabName}}
          </span>
        </div>
        <div class="book-list">
          <div class="book-card" v-if="book.bookStatus === tabStatus" v-for="(book, index) in bookList" :key="index">
            <div class="card-image">
              <img class="card-cover-image" :src="book.bookImgSrc" alt="">
            </div>
            <div class="card-content">
              <p class="card-title" :title="book.bookTitle">{{book.bookTitle}}</p>
              <div class="card-info">
                <span class="card-score">评分：{{book.bookScore}}</span>
                <a class="card-link" :href="book.bookLink" target="_blank">
                  <i class="icon-share card-icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Reading',
  computed: {
    ...mapState(['isShowToolbar'])
  },
  data () {
    return {
      tabStatus: 0,
      tabList: [
        {
          tabName: '已读'
        },
        {
          tabName: '想读'
        },
        {
          tabName: '在读'
        }
      ],
      bookList: [
        {
          bookStatus: 0,
          bookImgSrc: 'https://i.loli.net/2018/07/06/5b3f3d25d0560.jpg',
          bookTitle: 'JavaScript DOM编程艺术',
          bookScore: '8.7',
          bookLink: 'https://book.douban.com/subject/6038371/'
        },
        {
          bookStatus: 0,
          bookImgSrc: 'https://i.loli.net/2018/07/06/5b3f3d73e2cf2.jpg',
          bookTitle: 'JavaScript高级程序设计',
          bookScore: '9.3',
          bookLink: 'https://book.douban.com/subject/10546125/'
        },
        {
          bookStatus: 0,
          bookImgSrc: 'https://i.loli.net/2018/07/06/5b3f3db5f32d5.jpg',
          bookTitle: '程序员的数学',
          bookScore: '7.2',
          bookLink: 'https://book.douban.com/subject/19949020/'
        },
        {
          bookStatus: 0,
          bookImgSrc: 'https://i.loli.net/2018/07/06/5b3f3ee233cc7.jpg',
          bookTitle: '三体',
          bookScore: '8.8',
          bookLink: 'https://book.douban.com/subject/2567698/'
        },
        {
          bookStatus: 0,
          bookImgSrc: 'https://i.loli.net/2018/07/06/5b3f4c1214e4a.jpg',
          bookTitle: '活着',
          bookScore: '9.3',
          bookLink: 'https://book.douban.com/subject/4913064/'
        },
        {
          bookStatus: 0,
          bookImgSrc: 'https://i.loli.net/2018/07/06/5b3f4c6bec2ff.jpg',
          bookTitle: '迷人的假象',
          bookScore: '8.2',
          bookLink: 'https://book.douban.com/subject/25910698/'
        },
        {
          bookStatus: 0,
          bookImgSrc: 'https://i.loli.net/2018/07/06/5b3f4cfa4476a.jpg',
          bookTitle: '思考的乐趣',
          bookScore: '8.2',
          bookLink: 'https://book.douban.com/subject/10779597/'
        },
        {
          bookStatus: 2,
          bookImgSrc: 'https://i.loli.net/2018/07/06/5b3f506a8777d.jpg',
          bookTitle: '无言的宇宙',
          bookScore: '8.3',
          bookLink: 'https://book.douban.com/subject/27599520/'
        },
        {
          bookStatus: 2,
          bookImgSrc: 'https://i.loli.net/2018/07/06/5b3f529e73030.jpg',
          bookTitle: '数学女孩1',
          bookScore: '9.0',
          bookLink: 'https://book.douban.com/subject/26677354/'
        }
      ]
    }
  },
  methods: {
    handleTabClick (index) {
      this.tabStatus = index
    }
  }
}
</script>

<style lang="stylus" scoped>
  .main-reading
    margin-bottom: 80px
    .section-book
      margin: 30px
      position: relative
      border: 1px solid #ddd
      border-top: 1px solid #fff
      border-bottom: 1px solid #fff
      background-color: #fff
      transition: all .2s ease-in
      .book-entry
        padding: 20px 8%
        .book-tab
          width: 100%
          margin: 0 auto
          margin-bottom: 20px
          font-size: 0
          .tab-item
            display: inline-block
            vertical-align: middle
            width: 33.33%
            height: 48px
            line-height: 48px
            color: #08c
            font-size: 16px
            text-align: center
            border-bottom: 2px solid #fff
            cursor: pointer
            &:hover
              color: #a6d8f1
            &.activited
              border-bottom: 2px solid #08c
        .book-list
          margin: 0 auto
          font-size: 0
          .book-card
            display: inline-block
            vertical-align: middle
            width: 25%
            padding-left: 15px
            padding-right: 15px
            margin: 15px 0
            .card-image
              width: 100%
              overflow: hidden
              user-select: none
              z-index: 1
              transition: all .3s ease-out
              .card-cover-image
                width: 100%
            .card-content
              width: 100%
              padding: 15px 0
              .card-title
                display: block
                white-space: nowrap
                overflow: hidden
                text-overflow: ellipsis
                font-size: 20px
                line-height: 38px
                font-weight: 300
                color: #333
                margin-bottom: 10px
              .card-info
                font-size: 0
                .card-score
                  display: inline-block
                  vertical-align: middle
                  font-size: 16px
                  line-height: 26px
                  color: #333
                .card-link
                  display: inline-block
                  vertical-align: middle
                  float: right
                  .card-icon
                    line-height: 26px
                    font-size: 20px
                    color: #08c
      &.show
        background: hsla(0,0%,100%,.3)
  @media screen and (max-width: 800px)
    .main-reading
      margin-bottom: 0
  @media screen and (max-width: 1200px)
    .main-reading
      .section-book
        .book-entry
          .book-list
            .book-card
              width: 50%
  @media screen and (max-width: 500px)
    .main-reading
      .section-book
        .book-entry
          .book-list
            .book-card
              width: 100%
</style>
