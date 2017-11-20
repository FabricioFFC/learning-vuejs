import stocks from '../../repositories/stocks'

const state = {
  stocks: []
}

const mutations = {
  setStocks (state, stocks) {
    state.stocks = stocks
  },
  randomStocks (state) {
    state.stocks.forEach(stock => {
        stock.price = Math.round(stock.price * (1 + Math.random() - 0.5))
    })
  }
}

const actions = {
  buyStock: ({commit}, order) => {
    commit('buyStock', order)
  },
  initStocks: ({commit}) => {
    commit('setStocks', stocks)
  },
  randomizeStocks: ({commit}) => {
    commit('randomStocks')
  }
}

const getters = {
  stocks: (state) => {
    return state.stocks
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
