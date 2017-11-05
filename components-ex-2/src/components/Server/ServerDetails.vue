<template>
    <div class="col-xs-12 col-sm-6">
        <div>
          <strong>Id:</strong>{{server.id}}
        </div>
        <div>
          <strong>Status:</strong>{{server.status}}
        </div>
    </div>

</template>

<script>
  import { eventBus } from '../../main';

  export default {
    data: () => {
      return { server: { } };
    },
    created() {
      eventBus.$on('currentServerUpdated', (server) => {
        this.server = server;
      });
    }
  }
</script>

<style>

</style>
