import Vue from 'vue'
import App from './App.vue'

export const serversBus = new Vue({
  data: () => {
    return {
      servers: [
        { id: 1, status: 'Critical' },
        { id: 2, status: 'Normal' },
        { id: 3, status: 'Critical' },
        { id: 4, status: 'Unknown' },
        { id: 5, status: 'Alert' }
      ],
    }
  },
  methods: {
    currentServerUpdated(currentServer) {
      this.$emit('currentServerUpdated', currentServer);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
