<template lang="html">
  <div class="test">
      <div class="carousel-container" id="carousel"></div>
  </div>
</template>

<script>
import { Carousel } from 'csdwheels'

export default {
  name: 'Test',
  data () {
    return {}
  },
  mounted () {
    /* eslint-disable no-new */
    new Carousel('#carousel', {
      // 轮播宽度（必填，一般和图片宽度保持一致）
      carouselWidth: 600,
      // 轮播高度（必填，一般和图片高度保持一致）
      carouselHeight: 400,
      // 轮播图片列表（必填，不填你显示什么。。）
      carouselImages: [
        'https://i.loli.net/2018/08/04/5b657fef3a46c.jpg',
        'https://i.loli.net/2018/08/04/5b657fef509c9.jpg',
        'https://i.loli.net/2018/08/04/5b657fef51617.jpg',
        'https://i.loli.net/2018/08/04/5b657fef530a1.jpg',
        'https://i.loli.net/2018/08/04/5b657fef52441.jpg'
      ]
    })
  }
}
</script>

<style lang="stylus" scoped>
</style>
