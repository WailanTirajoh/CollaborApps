export const state = () => ({
    totalInvoice: 1,
})

export const mutations = {
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
