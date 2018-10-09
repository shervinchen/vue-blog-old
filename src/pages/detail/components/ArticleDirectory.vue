<template lang="html">
  <div class="article-directory" v-if="isShowDirectory">
    <div class="directory-head">目录</div>
    <div class="directory-body">
      <article-directory-body :directories="directories"></article-directory-body>
    </div>
  </div>
</template>

<script>
import ArticleDirectoryBody from './ArticleDirectoryBody'

export default {
  name: 'ArticleDirectory',
  components: {
    ArticleDirectoryBody
  },
  data () {
    return {
      isShowDirectory: false,
      directories: [
        // {
        //   title: '标题一',
        //   isActive: false
        // },
        // {
        //   title: '标题二',
        //   isActive: false,
        //   children: [
        //     {
        //       title: '标题四',
        //       isActive: false
        //     },
        //     {
        //       title: '标题五',
        //       isActive: false
        //     }
        //   ]
        // },
        // {
        //   title: '标题六',
        //   isActive: false
        // },
        // {
        //   title: '标题七',
        //   isActive: false,
        //   children: [
        //     {
        //       title: '标题八',
        //       isActive: false,
        //       children: [
        //         {
        //           title: '标题九',
        //           isActive: false
        //         }
        //       ]
        //     }
        //   ]
        // }
      ]
    }
  },
  methods: {
    getDirectories () {
      let directoryElems = document.querySelector('.article-data').querySelectorAll('h1,h2,h3,h4,h5,h6')
      if (directoryElems.length !== 0) {
        this.isShowDirectory = true
      } else {
        this.isShowDirectory = false
        return
      }
      let parentItem = { id: -1 }
      let lastTreeItem = null
      let treeItem = {}
      directoryElems.forEach((element, elemIndex) => {
        element.id = 'articleHeader' + elemIndex
        treeItem = {
          title: element.innerText || element.textContent,
          offsetTop: element.offsetTop,
          isActive: false,
          tagName: element.tagName,
          children: [],
          parent: parentItem
        }
        if (lastTreeItem) {
          if (this.getLevel(treeItem.tagName) > this.getLevel(lastTreeItem.tagName)) {
            treeItem.parent = lastTreeItem
          } else {
            treeItem.parent = this.findParent(treeItem, lastTreeItem)
          }
        }
        lastTreeItem = treeItem
        if (treeItem.parent.id === -1) {
          this.directories.push(treeItem)
        } else {
          // this.directories.forEach((item, index) => {
          //   if (treeItem.parent === item) {
          //     item.children.push(treeItem)
          //   }
          // })
        }
      })
      console.log(this.directories)
    },
    findParent (currTreeItem, lastTreeItem) {
      let lastTreeParent = lastTreeItem.parent
      while (lastTreeParent && (this.getLevel(currTreeItem.tagName) <= this.getLevel(lastTreeParent.tagName))) {
        lastTreeParent = lastTreeParent.parent
      }
      return lastTreeParent || { id: -1 }
    },
    getLevel (tagName) {
      return tagName ? tagName.slice(1) : 0
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.getDirectories()
    })
  }
}
</script>

<style lang="stylus" scoped>
  .article-directory
    position: sticky
    top: 0
    right: 0
    border-left: 1px solid #eee
    max-width: 200px
    width: 200px
    display: inline-block
    float: right
    .directory-head
      padding: 8px 12px 8px 15px
      font-weight: bold
      font-size: 16px
      color: #333
      line-height: 24px
    .directory-body
      overflow-y: auto
      height: 500px
      padding: 0 15px
      transition: all .2s ease
  @media screen and (max-width: 1200px)
    .article-directory
      display: none
</style>
