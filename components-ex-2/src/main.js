import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    currentServerUpdated(server) {
      this.$emit('currentServerUpdated', server);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
