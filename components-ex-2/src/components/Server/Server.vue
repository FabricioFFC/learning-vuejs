<template>
  <li
      class="list-group-item"
      @click="setCurrentServer()">
      Server #{{ server.id }}
  </li>
</template>

<script>
  import { serversBus } from '../../main';

  export default {
    props: ['server', 'currentServer'],
    methods: {
      setCurrentServer: function() {
        serversBus.currentServerUpdated(this.server);
      }
    }
  }
</script>

<style scoped>
  .list-group-item {
    cursor: pointer;
  }
</style>
