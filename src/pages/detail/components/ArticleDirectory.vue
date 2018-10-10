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
      directories: []
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
      directoryElems.forEach((element, elemIndex) => {
        element.id = 'articleHeader' + elemIndex
        this.directories.push({
          index: elemIndex,
          title: element.innerText || element.textContent,
          offsetTop: element.offsetTop,
          isActive: false,
          tagName: element.tagName,
          children: []
        })
      })
    },
    formatDirectories (arr, i, parent) {
      if (i >= arr.length) {
        return i
      }
      let current = arr[i]
      if (current.tagName > parent.tagName) {
        parent.children.push(current)
      } else {
        return i
      }
      i++
      let next = arr[i]
      if (!next) {
        return i
      }
      if (next.tagName > current.tagName) {
        current.children = []
        i = this.formatDirectories(arr, i, current)
      }
      return this.formatDirectories(arr, i, parent)
    },
    resetDirectories (directory) {
      let list = [directory]
      while (list.length > 0) {
        const obj = list.shift()
        if (obj.isActive) {
          obj.isActive = false
          return true
        }
        console.log(obj)
        if (obj.hasOwnProperty('children')) {
          list = list.concat(obj.children)
        }
      }
    },
    findDirectories (directory, scrollTop) {
      let list = [directory]
      while (list.length > 0) {
        const obj = list.shift()
        if (scrollTop >= document.querySelector('#articleHeader' + obj.index).offsetTop) {
          for (let i = 0; i < this.directories.length; i++) {
            if (this.resetDirectories(this.directories[i])) {
              break
            }
          }
          console.log(obj)
          obj.isActive = true
        } else {
          obj.isActive = false
        }
        if (obj.hasOwnProperty('children')) {
          list = list.concat(obj.children)
        }
      }
    },
    handleScroll (e) {
      // 当前滚动距离
      let scrollTop = document.querySelector('#app').scrollTop
      for (let i = 0; i < this.directories.length; i++) {
        this.findDirectories(this.directories[i], scrollTop)
      }
    }
  },
  mounted () {
    document.querySelector('#app').addEventListener('scroll', this.handleScroll)
    let root = {
      index: -1,
      title: '',
      offsetTop: 0,
      isActive: false,
      tagName: 'H0',
      children: []
    }
    this.$nextTick(() => {
      this.getDirectories()
      this.formatDirectories(this.directories, 0, root)
      this.directories = root.children
      // console.log(this.directories)
    })
  },
  destroyed () {
    document.querySelector('#app').removeEventListener('scroll', this.handleScroll)
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
