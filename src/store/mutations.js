export default {
  openToolBar (state, menuIndex) {
    state.isShowToolbar = true
    state.isShowToolbarSection.forEach((item, index) => {
      if (index === menuIndex) {
        state.isShowToolbarSection.splice(index, 1, true)
      } else {
        state.isShowToolbarSection.splice(index, 1, false)
      }
    })
  },
  closeToolBar (state) {
    state.isShowToolbar = false
  },
  setToolbarKeyword (state, keyword) {
    state.toolbarKeyword = keyword
  }
}
