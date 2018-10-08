<template lang="html">
  <div class="article-directory">
    <div class="directory-head">目录</div>
    <article-directory-body></article-directory-body>
  </div>
</template>

<script>
import ArticleDirectoryBody from './ArticleDirectoryBody'

export default {
  name: "ArticleDirectory",
  components: {
    ArticleDirectoryBody        
  },
  data() {
    return {
        directories: [
            {
                title: '标题1',
                isActive: false
            }
        ]
    };
  },
  mounted() {}
};
</script>

<style lang="stylus" scoped>
    .article-directory
        position: fixed
        top: 500px
        right: 0
        background-color: rgba(0, 0, 0, .15)
        max-width: 250px
        .directory-head
            padding: 8px 12px 8px 15px
            font-weight: bold
            font-size: 16px
            color: #333
            line-height: 24px
</style>
