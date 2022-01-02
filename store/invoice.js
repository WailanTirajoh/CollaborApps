export const state = () => ({
    totalInvoice: 1,
})

export const mutations = {
    // MUTATE(state, payloads) {
    //     payloads.forEach(({ attribute, value }) => {
    //         state[attribute] = value
    //     })
    // },

    SET_TOTAL_INVOICE(state, newTotalInvoice) {
        state.totalInvoice = newTotalInvoice
    }
}

export const actions = {
    setNewTotalMutation({ commit }, newTotalInvoice) {
        commit('SET_TOTAL_INVOICE', newTotalInvoice)
    }
}

export const getters = {
    getTotalInvoice: (state) => () => {
        return state.totalInvoice
    }
}
