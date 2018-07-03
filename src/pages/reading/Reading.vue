<template lang="html">
  <div class="main-reading">
    <section class="section-book">
      <div class="book-entry">
        <div class="book-tab">
          <span class="tab-item activited">已读</span>
          <span class="tab-item">在读</span>
          <span class="tab-item">想读</span>
        </div>
        <div class="book-list">
          <div class="book-card" v-for="item in [1,2,3,4,5]">
            <div class="card-image">
              <img class="card-cover-image" src="https://img1.doubanio.com/view/subject/l/public/s27317967.jpg" alt="">
            </div>
            <div class="card-content">
              <p class="card-title">测试测试车</p>
              <div class="card-info">
                <span class="card-score">评分：6.8</span>
                <a class="card-link" href="javascript:;" target="_blank">
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
export default {
  name: 'Reading'
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
            width: 20%
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
                font-size: 22px
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
  @media screen and (max-width: 800px)
    .main-reading
      margin-bottom: 0
  @media screen and (max-width: 1400px)
    .main-reading
      .section-book
        .book-entry
          .book-list
            .book-card
              width: 25%
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
