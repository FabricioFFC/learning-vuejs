<template lang="html">
  <div class="card bg-white mb-3 mr-3" style="max-width: 20rem;">
    <div class="card-header text-primary">{{stock.name}} <small>(Price: {{stock.price}} | Quantity: {{stock.qty}})</small></div>
    <div class="card-body">
      <div class="input-group mb-2 mr-sm-2 mb-sm-1">
        <input
          type="number"
          class="form-control"
          placeholder="Quantity"
          v-model="qtyToSell"
          :class="{error: insufficientQuantity()}"
          >
        <button
          type="button"
          name="button"
          class="ml-3 btn btn-primary"
          @click="sell"
          :disabled="disableBuy"
        >
          Sell
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
    .error {
        border: 1px solid red;
    }
</style>

<script>
    import {mapActions} from 'vuex';

    export default {
        props: ['stock'],
        data() {
            return {
                qtyToSell: 0
            }
        },
        computed: {
          disableBuy() {
            return this.qtyToSell <= 0 || this.insufficientQuantity()
          }
        },
        methods: {
            ...mapActions({
                placeSellOrder: 'sellStock'
            }),
            insufficientQuantity() {
              return this.qtyToSell > this.stock.qty
            },
            sell() {
                const order = {
                    id: this.stock.id,
                    price: this.stock.price,
                    qty: this.qtyToSell
                };
                this.placeSellOrder(order);
                this.qty = 0;
            }
        }
    }
</script>
