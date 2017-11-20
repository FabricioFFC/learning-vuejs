<template lang="html">
  <div class="container">
    <portfolio-item v-for="stock in stocks" :stock="stock">
    </portfolio-item>
  </div>
</template>

<script>

import portfolioItem from './Item.vue'
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio'
    })
  },
  components: {
    portfolioItem
  }
}
</script>

<style lang="css">
</style>
