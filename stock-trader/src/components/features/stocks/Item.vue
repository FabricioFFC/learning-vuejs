<template lang="html">
  <div class="card bg-white mb-3 mr-3" style="max-width: 20rem;">
    <div class="card-header text-success">{{stock.name}} <small>(Price: {{stock.price}})</small></div>
    <div class="card-body">
      <div class="input-group mb-2 mr-sm-2 mb-sm-1">
        <input
          type="number"
          class="form-control"
          id="inlineFormInputGroupUsername2"
          placeholder="Quantity"
          v-model="stock.qty"
          :class="{error: disableBuy}">
        <button
          type="button"
          name="button"
          class="ml-3 btn btn-success"
          @click="buy"
          :disabled="disableBuy"
        >
          Buy
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['stock'],
  computed: {
    funds() {
      return this.$store.getters.funds
    },
    disableBuy() {
      let insufficientFunds = this.stock.qty * this.stock.price > this.funds
      return this.stock.qty <= 0 || insufficientFunds
    }
  },
  methods: {
    buy() {
      this.$store.dispatch('buyStock', this.stock)
    }
  }
}
</script>

<style lang="css" scoped>
  .error {
    border: 1px solid red;
  }
</style>
