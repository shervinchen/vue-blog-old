<template lang="html">
  <div class="app-toolbar" @click.stop :class="appToolbarClass">
    <div class="toolbar-headar">
      <ul class="headar-menu">
        <li class="menu-item" @click="handleMenuClick(0)">
          <a href="javascript:;" class="item-link" :class="{active: this.isShowToolbarSection[0]}">所有文章</a>
        </li>
        <li class="menu-item" @click="handleMenuClick(1)">
          <a href="javascript:;" class="item-link" :class="{active: this.isShowToolbarSection[1]}">关于我</a>
        </li>
      </ul>
    </div>
    <div class="toolbar-wrap">
      <section v-show="this.isShowToolbarSection[0]" class="section-archive">
        <div class="archive-search">
          <input type="text" class="search-input" v-model="search" placeholder="find something...">
          <i class="icon-search search-icon" v-show="isSearchEmpty"></i>
          <i class="icon-close search-icon" v-show="!isSearchEmpty"></i>
        </div>
        <div class="archive-tag">
          <div class="tag-toggle">
            <span class="tag-wording">tag:</span>
            <input @click="toggleTag" type="checkbox" class="tag-checkbox">
          </div>
          <ul class="tag-list" v-show="isShowTags">
            <li class="tag-item">
              <a href="javascript:;" class="tag-link color1">设计</a>
            </li>
            <div class="clearfix"></div>
          </ul>
        </div>
        <ul class="archive-list">
          <li class="archive-item">
            <a href="javascript:;" class="item-title">
              <i class="icon-quo-left title-icon"></i>
              <span class="title-name">青海湖志事</span>
            </a>
            <div class="item-info">
              <p class="info-time">
                <i class="icon-calendar time-icon"></i>
                <span class="time-date">2018-04-25</span>
              </p>
              <p class="info-tag">
                <i class="icon-price-tags tag-icon"></i>
                <span class="tag-item">#旧事</span>
                <span class="tag-item">#旧事</span>
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section v-show="this.isShowToolbarSection[1]" class="section-about">
        <div class="about-wrap">
          Csdoker，
          <br>
          测试1测试1测试1
          <br>
          <br>
          测试2测试2
          <br>
          测试3测试3
          <br>
          <br>
          测试4测试4
          <br>
          测试5测试5
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'AppToolbar',
  components: {

  },
  computed: {
    ...mapState(['isShowToolbar', 'isShowToolbarSection']),
    appToolbarClass () {
      return {
        show: this.isShowToolbar,
        hide: !this.isShowToolbar
      }
    }
  },
  data () {
    return {
      search: '',
      isSearchEmpty: true,
      isShowTags: false
    }
  },
  methods: {
    toggleTag () {
      this.isShowTags = !this.isShowTags
    },
    handleMenuClick (menuIndex) {
      this.openToolBar(menuIndex)
    },
    ...mapMutations(['openToolBar'])
  }
}
</script>

<style lang="stylus" scoped>
  .app-toolbar
    position: fixed
    width: 360px
    height: 100%
    left: 0
    top: 0
    z-index: 10
    padding: 0
    opacity: 0
    -webkit-overflow-scrolling: touch
    transition: all .2s ease-in
    .toolbar-headar
      display: none
    .toolbar-wrap
      height: 100%
      color: #e5e5e5
      overflow: hidden
      overflow-y: auto
      .section-archive
        height: 100%
        color: #e5e5e5
        overflow: hidden
        overflow-y: auto
        .archive-search
          position: relative
          padding: 20px
          .search-input
            width: 100%
            color: #fff
            background: none
            border: none
            border-bottom: 2px solid #fff
            font-family: Roboto,serif
            font-size: 16px
            line-height: 28px
            -webkit-user-modify: read-write-plaintext-only
            &::-webkit-input-placeholder
              color: #ededed
          .search-icon
            position: absolute
            right: 20px
            top: 50%
            margin-top: -8px
            color: #fff
            cursor: pointer
            transition: all .2s ease-in
        .archive-tag
          margin-bottom: 10px
          .tag-toggle
            position: relative
            height: 24px
            margin-bottom: 20px
            .tag-wording
              position: absolute
              font-size: 14px
              right: 72px
              line-height: 24px
              top: 0
            .tag-checkbox
              position: absolute
              top: 50%
              right: 20px
              margin-top: -8px
              z-index: 2
              border: 0
              background: 0 0
              -webkit-appearance: none
              outline: 0
              &:before
                content: ''
                width: 40px
                height: 14px
                border: 1px solid #bdcabc
                background-color: #fdfdfd
                border-radius: 20px
                cursor: pointer
                display: inline-block
                position: relative
                vertical-align: middle
                box-sizing: content-box
                box-shadow: inset 0 0 0 0 #dfdfdf
                transition: border .4s,box-shadow .4s
                background-clip: content-box
              &:after
                content: ''
                width: 14px
                height: 14px
                position: absolute
                top: 8px
                left: 0
                -webkit-transform: translateY(-50%)
                border-radius: 100%
                background-color: #91c0f1
                box-shadow: 0 1px 1px rgba(0,0,0,.4)
                transition: left .2s
                cursor: pointer
              &:checked:before
                border-color: #64bd63;
                box-shadow: inset 0 0 0 .16rem #64bd63;
                background-color: #64bd63;
                transition: border .4s,box-shadow .4s,background-color 1.2s
              &:checked:after
                left: 28px
                background: #fff
          .tag-list
            margin: 0 10px
            padding: 10px
            background: hsla(0,0%,100%,.2)
            transition: all .2s ease-in
            .tag-item
              float: left
              .tag-link
                display: inline-block
                font-weight: 400
                text-decoration: none
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
                  content: ' ';
                  width: 0;
                  height: 0;
                  position: absolute;
                  top: 0;
                  left: -18px;
                  border: 9px solid transparent
                &:after
                  content: ' ';
                  width: 4px;
                  height: 4px;
                  background-color: #fff;
                  border-radius: 4px;
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
        .archive-list
          color: rgba(77,77,77,.75)
          -webkit-overflow-scrolling: touch
          overflow-y: auto
          .archive-item
            padding: 10px 20px
            border-bottom: 1px dotted #dcdcdc
            .item-title
              overflow: hidden
              white-space: nowrap
              text-overflow: ellipsis
              display: block
              color: #fffff8
              text-shadow: 1px 1px rgba(77,77,77,.25)
              font-size: 0
              .title-icon
                display: inline-block
                vertical-align: middle
                margin-right: 10px
                color: #fffdd8
              .title-name
                display: inline-block
                vertical-align: middle
                font-size: 16px
                line-height: 28px
            .item-info
              font-size: 0
              .info-time
                display: inline-block
                vertical-align: middle
                font-size: 0
                color: #fffdd8
                margin-right: 10px
                line-height: 20px
                .time-icon
                  display: inline-block
                  vertical-align: middle
                  font-size: 16px
                  margin-right: 4px
                .time-date
                  display: inline-block
                  vertical-align: middle
                  font-size: 12px
              .info-tag
                display: inline-block
                vertical-align: middle
                font-size: 0
                color: #fffdd8
                line-height: 20px
                .tag-icon
                  display: inline-block
                  vertical-align: middle
                  font-size: 16px
                  margin-right: 4px
                .tag-item
                  display: inline-block
                  vertical-align: middle
                  font-size: 12px
                  margin-right: 6px
                  cursor: pointer
      .section-about
        height: 100%
        color: #e5e5e5
        overflow: hidden
        overflow-y: auto
        .about-wrap
          display: -webkit-box
          display: -ms-flexbox
          display: flex
          -webkit-box-align: center
          -ms-flex-align: center
          align-items: center
          -webkit-box-pack: center
          -ms-flex-pack: center
          justify-content: center
          width: 100%
          height: 100%
          color: #fffdd8
          text-shadow: 1px 1px rgba(77,77,77,.45)
          font-size: 16px
    &.show
      opacity: 1
      -webkit-animation-duration: .8s;
      animation-duration: .8s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      -webkit-animation-name: smallLeftIn;
      animation-name: smallLeftIn
    &.hide
      z-index: 0
      -webkit-animation-duration: .8s;
      animation-duration: .8s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      -webkit-animation-name: smallleftOut;
      animation-name: smallleftOut
  @media screen and (max-width: 800px)
    .app-toolbar
      left: -300px
      width: 300px
      .toolbar-headar
        display: block
        position: fixed
        left: 0
        width: 100%
        z-index: 9999
        height: auto
        margin: 10px 0 20px
        .headar-menu
          width: 70%
          border-color: #fff
          text-align: center;
          cursor: default;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          margin: 0 auto;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -ms-flex-pack: distribute;
          justify-content: space-around;
          position: relative;
          z-index: 1;
          border: 1px solid #a0a0a0;
          border-radius: 3px
          .menu-item
            width: 50%
            border-color: #fff
            .item-link
              color: #fff
              font-size: 14px
              overflow: hidden
              text-overflow: ellipsis
              white-space: nowrap
              display: block
              &.active
                background-color: #81b5cc
                color: #eaeaea
            &:first-child
              border-left: 0
            &:last-child
              border-right: 0
      .toolbar-wrap
        padding-top: 56px
</style>
