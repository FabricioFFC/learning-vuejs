<template lang="html">
  <span>{{funds | currency}}</span>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['funds'])
  }
}
</script>

<style lang="css">
</style>
