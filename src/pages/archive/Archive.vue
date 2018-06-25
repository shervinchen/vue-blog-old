<template lang="html">
  <div class="main-archive">
    <archive-list></archive-list>
    <page-nav></page-nav>
  </div>
</template>

<script>
import ArchiveList from './components/ArchiveList'
import PageNav from 'common/PageNav'

export default {
  name: 'Archive',
  components: {
    ArchiveList,
    PageNav
  }
}
</script>

<style lang="stylus" scoped>
  .main-archive
    margin-bottom: 80px
  @media screen and (max-width: 800px)
    .main-archive
      margin-bottom: 0
</style>
