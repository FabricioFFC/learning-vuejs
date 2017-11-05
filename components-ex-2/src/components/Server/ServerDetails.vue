<template>
    <div class="col-xs-12 col-sm-6">
        <div v-if="server.id">
          <strong>Server id:</strong> {{server.id}}
          <strong>Status:</strong> {{server.status}}
          <hr>
          <button @click="setServerToNormal">Change to Normal</button>
        </div>
        <div v-else="">Please select a server</div>
    </div>

</template>

<script>
  import { serversBus } from '../../main';

  export default {
    data: () => {
      return { server: { } };
    },
    methods: {
      setServerToNormal() {
        this.server.status = 'Normal';
      },
    },
    created() {
      serversBus.$on('currentServerUpdated', (server) => {
        this.server = server;
      });
    }
  }
</script>

<style>

</style>
