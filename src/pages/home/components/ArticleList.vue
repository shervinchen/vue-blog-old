<template lang="html">
  <div class="article-list">
    <article v-for="(articleData, index) in articleDatas" :key="articleData.articleId" class="article-item" :class="{show: isShowToolbars[index]}">
      <div class="article-inner">
        <header class="article-header">
          <div class="article-header-wrap">
            <router-link tag="h1" :to="{ name: 'Detail', params: { id: articleData.articleId } }" class="article-title">
              {{articleData.articleTitle}}
            </router-link>
            <div class="article-date">
              <i class="icon-calendar date-icon"></i>
              <span class="date-time">{{articleData.articleDate}}</span>
            </div>
          </div>
        </header>
        <div class="article-entry">
          <div class="article-data">
            <!-- markdown渲染数据 -->
            <vue-markdown>{{articleData.articleContent}}</vue-markdown>
            <!-- <router-link :to="{ name: 'Detail', params: { id: articleData.articleId } }" class="article-more">
              more&nbsp;>>
            </router-link> -->
          </div>
        </div>
        <div class="article-info">
          <div class="article-tag">
            <ul class="article-tag-list">
              <i class="icon-price-tags article-tag-icon"></i>
              <li class="article-tag-list-item" @click.stop="handleArticleTagClick(articleTag.articleTagName)" v-for="(articleTag, index) in articleData.articleTags" :key="index">
                <a href="javascript:;" class="article-tag-list-link">{{articleTag.articleTagName}}</a>
              </li>
            </ul>
          </div>
          <!-- <router-link :to="{ name: 'Detail', params: { id: articleData.articleId } }" class="article-more-link">
            展开全文&nbsp;>>
          </router-link> -->
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
  name: 'HomeArticleList',
  components: {
    VueMarkdown
  },
  props: {
    articleDatas: Array
  },
  computed: {
    ...mapState(['isShowToolbar']),
    isShowToolbars () {
      const isShowToolbars = []
      this.articleDatas.forEach((item, index) => {
        isShowToolbars.push(this.isShowToolbar)
      })
      return isShowToolbars
    }
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
  .article-list
    .article-item
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
          padding-top: 30px
          padding-left: 8%
          padding-right: 8%
          margin-bottom: 25px
          .article-header-wrap
            border-bottom: 1px dotted #ddd
            .article-title
              display: block
              color: #696969
              font-weight: 300
              line-height: 36px
              font-size: 26px
              transition: color .3s
              margin: 0 0 20px 0
              cursor: pointer
            .article-date
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
          margin: 30px 8% 20px
          min-height: 72px
          border-top: 1px solid #ddd
          .article-tag
            float: left
            .article-tag-list
              .article-tag-icon
                color: #999
                float: left
                margin-right: 10px
                margin-top: 6px
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
          .article-more-link
            margin-top: 0
            text-align: left
            float: right
            background-color: #4d4d4d
            color: #fff
            font-size: 12px
            padding: 5px 8px
            line-height: 18px
            border-radius: 2px
            transition: background .3s
            &:hover
              background-color: #3c3c3c
      &.show
        background: hsla(0,0%,100%,.3)
  @media screen and (max-width: 800px)
    .article-list
      .article-item
        padding: 10px
        margin: 10px 0
        border: 0
        font-size: 16px
        color: #555
        .article-inner
          .article-header
            border-left: none
            padding: 0
            margin-bottom: 0
            .article-header-wrap
              .article-title
                display: block
                font-size: 18px
                margin-bottom: 10px
          .article-entry
            padding: 10px 0 30px
          .article-info
            min-height: 40px
            padding-top: 10px
            margin: 0
            border-top: 1px solid #ddd
</style>
