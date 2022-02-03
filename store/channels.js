export const state = () => ({
  channels: []
})

export const mutations = {
  addChannels(state, { channels }) {
    state.channels.push(...channels)
  }
}

export const actions = {
  async fetchChannels({ commit, getters }) {
    try {
      if (getters.channels.length == 0) {
        const { channels } = await this.$axios.$get('/channels')
        commit('addChannels', { channels })
      }
    } catch (e) {}
  },
  addChannels({ commit }, { channels }) {
    commit('addChannels', { channels })
  }
}

export const getters = {
  channels(state) {
    return state.channels
  },

  detailChannels(state, { channelId }) {
    const index = state.channels.findIndex(({ id }) => id == channelId)
    return state.channels[index]
  }
}
