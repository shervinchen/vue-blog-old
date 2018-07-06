<template lang="html">
  <div class="article-wrap">
    <article class="article-content" :class="{show:this.isShowToolbar}">
      <div class="article-inner">
        <header class="article-header">
          <h1 class="article-title">{{articleData.articleTitle}}</h1>
          <div class="article-date">
            <i class="icon-calendar date-icon"></i>
            <span class="date-time">{{articleData.articleDate}}</span>
          </div>
        </header>
        <div class="article-entry">
          <!-- markdown渲染数据 -->
          <vue-markdown v-if="articleData.articleContent" :source="articleData.articleContent"></vue-markdown>
          <!-- <a href="javascript:;" class="article-more">more&nbsp;>></a> -->
        </div>
        <div class="article-info">
          <div class="article-tag">
            <i class="icon-price-tags article-tag-icon"></i>
            <ul class="article-tag-list">
              <li class="article-tag-list-item" @click.stop="handleArticleTagClick(articleTag.articleTagName)" v-for="(articleTag, index) in articleData.articleTags" :key="index">
                <a href="javascript:;" class="article-tag-list-link">{{articleTag.articleTagName}}</a>
              </li>
            </ul>
          </div>
          <div class="article-share">
            <!-- TODO: 文章分享相关按钮 -->
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'DetailArticle',
  components: {
    VueMarkdown
  },
  props: {
    articleData: Object
  },
  computed: {
    ...mapState(['isShowToolbar'])
  },
  methods: {
    handleArticleTagClick (articleTagName) {
      this.openToolBar(0)
      this.setToolbarKeyword('#' + articleTagName)
    },
    ...mapMutations(['setToolbarKeyword', 'openToolBar'])
  }
}
</script>

<style lang="stylus" scoped>
  .article-wrap
    .article-content
      position: relative
      margin: 30px
      border: 1px solid #ddd
      border-top: 1px solid #fff
      border-bottom: 1px solid #fff
      background-color: #fff
      transition: all .2s ease-in
      .article-inner
        border-color: #d1d1d1
        .article-header
          border-left: 5px solid #4d4d4d
          padding: 30px 0 25px 25px
          padding-left: 8%
          .article-title
            display: inline
            color: #696969
            font-weight: 300
            line-height: 36px
            font-size: 26px
            transition: color .3s
            margin: 0
          .article-date
            float: right
            margin-right: 8%
            font-size: 0
            line-height: 28px
            color: #999
            .date-icon
              display: inline-block
              vertical-align: middle
              margin-right: 6px
            .date-time
              display: inline-block
              vertical-align: middle
              font-size: 16px
        .article-entry
          line-height: 1.8em
          padding: 0 8%
          .article-more
            color: #08c
            font-size: 16px
        .article-info
          padding-top: 20px
          margin: 30px 8% 0
          min-height: 72px
          border-top: 1px solid #ddd
          .article-tag
            float: left
            .article-tag-icon
              color: #999
              float: left
              margin-right: 10px
              margin-top: 6px
            .article-tag-list
              float: left
              .article-tag-list-item
                float: left
                .article-tag-list-link
                  display: inline-block;
                  background-color: #ba8f6c
                  font-weight: 400
                  font-size: 10px
                  color: #fff
                  height: 18px
                  line-height: 18px
                  float: left
                  padding: 0 5px 0 10px
                  position: relative
                  border-radius: 0 5px 5px 0
                  margin: 5px 9px 5px 8px
                  font-family: Menlo,Monaco,Andale Mono,lucida console,Courier New,monospace
                  &:before
                    content: ' '
                    width: 0
                    height: 0
                    position: absolute
                    top: 0
                    left: -18px
                    border: 9px solid transparent
                    border-right-color: #ba8f6c
                  &:after
                    content: ' '
                    width: 4px
                    height: 4px
                    background-color: #fff
                    border-radius: 4px
                    box-shadow: 0 0 0 1px rgba(0, 0, 0, .3)
                    position: absolute
                    top: 7px
                    left: 2px
                  &:hover
                    opacity: .8
          .article-share
            display: none
      &.show
        background: hsla(0,0%,100%,.3)
  @media screen and (max-width: 800px)
    .article-wrap
      .article-content
        padding: 10px
        margin: 10px 0
        border: 0
        font-size: 16px
        color: #555
        .article-inner
          .article-header
            border-left: none
            padding: 0
            border-bottom: 1px dotted #ddd
            .article-title
              display: block
              font-size: 18px
              margin-bottom: 10px
            .article-date
              float: none
          .article-entry
            padding: 10px 0 30px
          .article-info
            min-height: 40px
            padding-top: 10px
            margin: 0
            border-top: 1px solid #ddd
</style>
