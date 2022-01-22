export const state = () => ({
  isPinned: true,
})

export const mutations = {
  SET_PIN(state) {
    state.isPinned = !state.isPinned
  }
}

export const actions = {
  updatePin({ commit }) {
    commit('SET_PIN')
  }
}

export const getters = {
  getIsPinned: (state) => () => {
    return state.isPinned
  }
}
