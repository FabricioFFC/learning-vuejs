<template lang="html">
  <div class="container">
    <div class="row">
      <stock-item v-for="stock in stocks" :stock="stock">
      </stock-item>
    </div>

  </div>
</template>

<script>
import stockItem from './Item.vue'

export default {
  computed: {
    stocks() {
      return this.$store.getters.stocks
    }
  },
  components: {
    stockItem
  }
}
</script>

<style lang="css">
</style>
