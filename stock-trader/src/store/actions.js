import Vue from 'vue'

export const loadData = ({commit}) => {
  Vue.http.get('data.json')
    .then(response => response.json())
    .then(data => {
      if (data) {
        let stocks = data.stocks
        let funds = data.funds
        let stockPortfolio = data.stockPortfolio

        let portfolio = {
          stockPortfolio,
          funds
        }

        commit('setStocks', stocks)

        commit('setPortofolio', portfolio)
      }
    })
}
