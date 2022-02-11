export const state = () => ({
  isPinned: false
})

export const mutations = {
  MUTATE(state, payloads) {
    payloads.forEach(({ key, value }) => {
      state[key] = value
    })
  }
}

export const actions = {
  togglePin({ state, commit }) {
    commit('MUTATE', [{ key: 'isPinned', value: !state.isPinned }])
  }
}
