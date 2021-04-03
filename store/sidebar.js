export const state = () => ({
  status: false,
  overlay: false,
  fullheight: true,
})

export const mutations = {
  openSidebar(state) {
    state.status = true
  },
  closeSidebar(state) {
    state.status = false
  },
}
