<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                class="list-group-item"
                :class="{ current: server.id === currentServer.id }"
                @click="setCurrentServer(server)"
                v-for="server in servers">
                Server #{{ server.id }} {{ server.status }}
            </li>
        </ul>
    </div>
</template>

<script>
  import { eventBus } from '../../main';

  export default {
    data: () => {
      return {
        servers: [
          { id: 1, status: 'Critical' },
          { id: 2, status: 'Normal' },
          { id: 3, status: 'Critical' },
          { id: 4, status: 'Unknown' },
          { id: 5, status: 'Alert' }
        ],
        currentServer: {},
      }
    },
    methods: {
      setCurrentServer: function(server) {
        this.currentServer = server;
        eventBus.currentServerUpdated(this.currentServer);
      }
    }
  }
</script>

<style scoped>
  .list-group-item {
    cursor: pointer;
  }
  .list-group-item.current {
    font-weight: bold;
  }
</style>
