<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <Server
                v-for="server in servers"
                :server="server"
                :currentServer="currentServer"
            />
        </ul>
    </div>
</template>

<script>
  import { serversBus } from '../../main';
  import Server from './Server.vue';

  export default {
    data: () => {
      return {
        servers: serversBus.servers,
        currentServer: {},
      }
    },
    components: {
      Server
    },
  }
</script>

<style>
</style>
