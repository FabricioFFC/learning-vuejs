<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1>Trade or  View your Portfolio</h1>
        <p>You may Save & Load your Data</p>
        <p>Click on 'End Day' to begin a new Day!</p>
      </div>
      <hr class="col-sm-12 p-0">
      <div class="col-sm-12">
        <h2>Your Funds: <funds></funds></h2>
      </div>
    </div>
  </div>
</template>

<script>
import funds from '../features/portfolio/Funds.vue'
export default {
  components: {
    funds
  }
}
</script>

<style lang="css">
</style>
