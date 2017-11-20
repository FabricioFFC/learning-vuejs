const state = {
  funds: 10000,
  stocks: []
}

var findStockById = (id) => {
  return state.stocks.find(element => element.id === id)
}

const mutations = {
  buyStock(state, {id, qty, price}) {
    const record = findStockById(id)

    if (record) {
      record.qty += qty
      return
    }

    state.stocks.push({
      id,
      qty
    })

    state.funds -= price * qty
  },
  sellStock(state, {id, qty, price}) {
    const record = findStockById(id)

    if (record.qty > qty) {
      record.qty -= qty
      return
    }

    state.stocks.splice(state.stocks.indexOf(record), 1)

    state.funds += price * qty
  },
  setPortofolio(state, portfolio) {
      state.funds = portfolio.funds;
      state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
  }
}

const actions = {
  sellStock({commit}, order) {
    commit('sellStock', order)
  }
}

const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id == stock.id)

      return {
        id: stock.id,
        qty: stock.qty,
        name: record.name,
        price: record.price
      }
    })
  },
  funds(state) {
    return state.funds
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
