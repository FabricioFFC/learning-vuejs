<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">
      Stock Trader
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link to="/portfolio" class="nav-link" tag="li" activeClass="active">
          Portfolio
        </router-link>
        <router-link to="/stocks" class="nav-link" tag="li" activeClass="active">
          Stocks
        </router-link>
      </ul>
    </div>
    <div class="d-flex">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" @click="endDay">End Day</a>
          </li>
          <li class="nav-item dropdown"
            :class="{show: isDropdownOpen}"
            @click="isDropdownOpen = !isDropdownOpen"
            >
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Save & Load
            </a>
            <div class="dropdown-menu" :class="{show: isDropdownOpen}" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" @click="saveData">Save Data</a>
              <a class="dropdown-item" @click="loadData">Load Data</a>
            </div>
          </li>
        </ul>
      </div>
      <span class="navbar-text">
        <strong>Funds: <funds></funds></strong>
      </span>
    </div>

  </nav>
</template>

<script>

import funds from '../features/portfolio/Funds.vue'
import {mapActions} from 'vuex'

export default {
  data() {
    return {
      isDropdownOpen: false
    }
  },
  components: {
    funds
  },
  methods: {
    ...mapActions({
        randomizeStocks: 'randomizeStocks',
        fetchData: 'loadData'
    }),
    endDay() {
        this.randomizeStocks();
    },
    saveData() {
      let data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      }

      this.$http.put('data.json', data)
    },
    loadData() {
      this.fetchData()
    }
  }
}
</script>

<style lang="css">
</style>
