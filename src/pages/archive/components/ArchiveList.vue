<template lang="html">
  <div class="archive-list">
    <section class="archive-wrap" v-for="(archive, index) in archives" :key="index">
      <div class="archive-year-wrap">
        <a href="javascript:;" class="archive-year">{{archive.archiveTime}}</a>
      </div>
      <div class="archive">
        <article class="archive-article" v-for="archiveArticle in archive.archiveArticles" :key="archiveArticle.articleId">
          <div class="archive-article-inner">
            <header class="archive-article-header">
              <div class="archive-article-date">
                <i class="icon-calendar date-icon"></i>
                <span class="date-time">{{archiveArticle.articleTime}}</span>
              </div>
              <a href="javascript:;" class="archive-article-title">
                {{archiveArticle.articleTitle}}
              </a>
              <div class="archive-article-info">
                <div class="archive-article-tag">
                  <i class="icon-price-tags article-tag-icon"></i>
                  <ul class="article-tag-list">
                    <li class="article-tag-list-item" v-for="(articleTag, index) in archiveArticle.articleTags" :key="index">
                      <a class="article-tag-list-link" :class="articleTag.articleTagColor" href="javascript:;">
                        {{articleTag.articleTagName}}
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="archive-article-category">
                  <i class="icon-book article-tag-icon"></i>
                  <ul class="article-tag-list">
                    <li class="article-tag-list-item" v-for="(articleCategory, index) in archiveArticle.articleCategories" :key="index">
                      <a class="article-tag-list-link" :class="articleCategory.articleCategoryColor" href="javascript:;">
                        {{articleCategory.articleCategoryName}}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="clearfix"></div>
            </header>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ArchiveList',
  data () {
    return {
      archives: [
        {
          archiveTime: '2018',
          archiveArticles: [
            {
              articleId: 1,
              articleTitle: '自动化代码规范检测 — CodeSniffer',
              articleTime: '2018-04-12',
              articleTags: [
                {
                  articleTagName: '工具',
                  articleTagColor: 'color3'
                }
              ],
              articleCategories: [
                {
                  articleCategoryName: '工具',
                  articleCategoryColor: 'color3'
                }
              ]
            },
            {
              articleId: 2,
              articleTitle: '我的博客发布上线方案 — Hexo',
              articleTime: '2018-03-03',
              articleTags: [
                {
                  articleTagName: '工具',
                  articleTagColor: 'color3'
                },
                {
                  articleTagName: '系统设计',
                  articleTagColor: 'color5'
                }
              ],
              articleCategories: [
                {
                  articleCategoryName: '系统设计',
                  articleCategoryColor: 'color5'
                }
              ]
            },
            {
              articleId: 3,
              articleTitle: '自如2018新年活动系统 — 抢红包',
              articleTime: '2018-01-30',
              articleTags: [
                {
                  articleTagName: 'PHP',
                  articleTagColor: 'color4'
                },
                {
                  articleTagName: '系统设计',
                  articleTagColor: 'color5'
                }
              ],
              articleCategories: [
                {
                  articleCategoryName: '系统设计',
                  articleCategoryColor: 'color5'
                }
              ]
            },
            {
              articleId: 4,
              articleTitle: 'Linux日常使用技巧集',
              articleTime: '2018-01-01',
              articleTags: [
                {
                  articleTagName: 'PHP',
                  articleTagColor: 'color1'
                }
              ],
              articleCategories: [
                {
                  articleCategoryName: 'PHP',
                  articleCategoryColor: 'color1'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .archive-list
    background-color: #fff
    margin: 0 30px
    padding-right: 60px
    border-bottom: 1px solid #eee
    .archive-wrap
      position: relative
      .archive-year-wrap
        line-height: 36px
        width: 200px
        position: absolute
        padding-top: 16px
        font-size: 1.8em
        z-index: 1
        .archive-year
          color: #666
          font-weight: 700
          padding-left: 48px
          font-size: 29px
          line-height: 36px
      .archive
        position: relative
        .archive-article
          margin-left: 200px
          padding: 20px 0
          border-bottom: 1px solid #eee
          border-top: 1px solid #fff
          position: relative
          .archive-article-inner
            .archive-article-header
              position: relative
              min-height: 36px
              .archive-article-date
                position: relative
                float: right
                color: #aaa
                background: none
                text-align: right
                width: auto
                font-size: 0
                right: 0
                top: 4px
                z-index: 1
                .date-icon
                  display: inline-block
                  vertical-align: middle
                  margin-right: 6px
                  font-size: 16px
                .date-time
                  display: inline-block
                  vertical-align: middle
                  font-size: 12px
                  line-height: 16px
              .archive-article-title
                line-height: 36px
                font-size: 16px
                color: #333
                transition: color .3s
                &:hover
                  color: #657b83
              .archive-article-info
                border: none
                font-size: 0
                .archive-article-tag, .archive-article-category
                  display: inline-block
                  vertical-align: middle
                  float: left
                  .article-tag-icon
                    color: #999
                    float: left
                    margin-right: 4px
                    margin-top: 6px
                    font-size: 16px
                  .article-tag-list
                    float: left
                    .article-tag-list-item
                      float: left
                      .article-tag-list-link
                        display: inline-block
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
                        &:hover
                          opacity: .8
                        &:before
                          content: " ";
                          width: 0;
                          height: 0;
                          position: absolute;
                          top: 0;
                          left: -18px;
                          border: 9px solid transparent
                        &:after
                          content: " ";
                          width: 4px;
                          height: 4px;
                          background-color: #fff;
                          border-radius: 4px;
                          -webkit-box-shadow: 0 0 0 1px rgba(0,0,0,.3);
                          box-shadow: 0 0 0 1px rgba(0,0,0,.3);
                          position: absolute;
                          top: 7px;
                          left: 2px
                        &.color1
                          background: #ff945c
                        &.color1:before
                          border-right-color: #ff945c
                        &.color2
                          background: #cc8167
                        &.color2:before
                          border-right-color: #cc8167
                        &.color3
                          background: #ba8f6c
                        &.color3:before
                          border-right-color: #ba8f6c
                        &.color4
                          background: #94635c
                        &.color4:before
                          border-right-color: #94635c
                        &.color5
                          background: #7b5d5f
                        &.color5:before
                          border-right-color: #7b5d5f
          &:first-child
            border-top: none
          &:last-child
            border-bottom: none
    &:first-child
      margin-top: 30px
  @media screen and (max-width: 800px)
    .archive-list
      display: block
</style>
