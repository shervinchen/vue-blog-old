<template lang="html">
  <nav class="main-mobile-nav">
    <div class="mobile-overlay"></div>
    <div class="mobile-btn" @click.stop="handleMenuClick(0)">
      <div class="mobile-btn-wrap">
        <i class="btn-icon icon-sort"></i>
      </div>
    </div>
    <header class="mobile-header">
      <div class="header-profilepic">
        <img src="../../../../assets/image/avatar.jpg" alt="" class="header-avatar">
      </div>
      <hgroup class="header-author">
        <h1 class="author-name">Csdoker</h1>
      </hgroup>
      <p class="header-subtitle">
        <i class="subtitle-icon icon-quo-left"></i>
        每一位少年都有一颗屠龙的心
        <i class="subtitle-icon icon-quo-right"></i>
      </p>
      <nav class="header-nav">
        <div class="nav-social">
          <a class="social-link github" target="_blank" href="https://github.com/csdoker" title="github">
            <i class="icon-github"></i>
          </a>
          <a class="social-link segmentfault" target="_blank" href="https://segmentfault.com/u/csdoker" title="segmentfault">
            <i class="icon-segmentfault"></i>
          </a>
          <a class="social-link zhihu" target="_blank" href="https://www.zhihu.com/people/csdoker" title="zhihu">
            <i class="icon-zhihu"></i>
          </a>
        </div>
      </nav>
      <nav class="header-menu">
        <ul class="menu-list">
          <li class="menu-item">
            <a class="menu-link" href="javascript:;">主页</a>
          </li>
          <li class="menu-item">
            <a class="menu-link" href="javascript:;">相册</a>
          </li>
        </ul>
      </nav>
    </header>
    <div class="mobile-mask" :class="{show:this.isShowToolbar}"></div>
  </nav>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'MainMobileNav',
  computed: {
    ...mapState(['isShowToolbar'])
  },
  methods: {
    handleMenuClick (menuIndex) {
      this.openToolBar(menuIndex)
    },
    ...mapMutations(['openToolBar'])
  }
}
</script>

<style lang="stylus" scoped>
  .main-mobile-nav
    display: none
  @media screen and (max-width: 800px)
    .main-mobile-nav
      display: block
      .mobile-overlay
        position: absolute
        width: 100%
        height: 110px
        z-index: 2
        background-color: #4d4d4d
      .mobile-btn
        position: fixed
        width: 50px
        height: 50px
        top: 0
        z-index: 4
        &:hover
          background-color: #444
        .mobile-btn-wrap
          position: absolute
          z-index: 101
          width: 50px
          height: 50px
          text-align: center
          line-height: 50px
          bottom: 0
          left: 0
          .btn-icon
            display: inline-block
            vertical-align: middle
            font-size: 24px
            color: #fff
      .mobile-header
        padding-top: 10px
        .header-profilepic
          position: relative
          display: block
          z-index: 100
          border: 5px solid #fff
          border-radius: 300px
          width: 128px
          height: 128px
          margin: 0 auto
          overflow: hidden
          background-color: #88acdb
          -webkit-transition: all .2s ease-in
          display: -webkit-box
          -webkit-box-orient: horizontal
          -webkit-box-pack: center
          -webkit-box-align: center
          text-align: center
          .header-avatar
            border: 0
            vertical-align: middle
            max-width: 100%
        .header-author
          .author-name
            text-align: center
            margin: 0
            position: relative
            z-index: 2
            color: #424242
            font-family: Roboto,serif
            font-size: 30px
            transition: .3s
            line-height: 60px
            font-weight: 400
        .header-subtitle
          text-align: center
          color: #999
          font-size: 14px
          line-height: 26px
          overflow: hidden
          text-overflow: ellipsis
          display: -webkit-box
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
          padding: 0 24px
          margin-bottom: 10px
          display: block
          .subtitle-icon
            margin: 0 10px
            color: #d0d0d0
        .header-nav
          position: relative
          width: 100%
          transition: transform .3s ease-in
          transition: -webkit-transform .3s ease-in
          transition: transform .3s ease-in, -webkit-transform .3s ease-in
          .nav-social
            text-align: center
            display: -webkit-box
            display: -ms-flexbox
            display: flex
            -ms-flex-wrap: wrap
            flex-wrap: wrap
            -webkit-box-pack: center
            -ms-flex-pack: center
            justify-content: center
            .social-link
              border-radius: 50%
              display: inline-block
              vertical-align: middle
              zoom: 1
              margin: 0 8px 15px
              transition: .3s
              text-align: center
              color: #fff
              opacity: .7
              width: 28px
              height: 28px
              line-height: 28px
              &:hover
                opacity: 1
              &.github
                background-color: #afb6ca
                border: 1px solid #afb6ca
                &:hover
                  border: 1px solid #afb6ca
              &.segmentfault
                background-color: #009a61
                border: 1px solid #009a61
                &:hover
                  border: 1px solid #009a61
              &.zhihu
                background-color: #0078d8;
                border: 1px solid #0078d8
                &:hover
                  border: 1px solid #0078d8
              &.qq
                background-color: #34baad;
                border: 1px solid #34baad
                &:hover
                  border: 1px solid #34baad
              &.weixin
                background-color: #4caf50;
                border: 1px solid #4caf50
                &:hover
                  border: 1px solid #4caf50
              &.bilibili
                background-color: #e15280;
                border: 1px solid #e15280
                &:hover
                  border: 1px solid #e15280
        .header-menu
          height: auto
          margin: 10px 0 20px
          .menu-list
            width: 50%
            text-align: center
            display: -webkit-box
            display: -ms-flexbox
            display: flex
            margin: 0 auto
            -webkit-box-align: center
            -ms-flex-align: center
            align-items: center
            -ms-flex-pack: distribute
            justify-content: space-around
            position: relative
            z-index: 1
            border: 1px solid #a0a0a0
            border-radius: 3px
            .menu-item
              width: 50%
              border-left: 1px solid #a0a0a0
              &:first-child
                border-left: 0
              &:last-child
                border-right: 0
              .menu-link
                font-size: 14px
                overflow: hidden
                text-overflow: ellipsis
                white-space: nowrap
                display: block
                color: #a0a0a0
      .mobile-mask
        display:none
        width: 100%
        height: 100%
        position: fixed
        top: 0
        left: 0
        background: rgba(0, 0, 0, .85)
        z-index: 999
        &.show
          display: block
</style>
