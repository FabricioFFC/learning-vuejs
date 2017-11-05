<template>
    <div class="container">
        <AppHeader/>
        <hr>
        <div class="row">
            <Servers/>
            <ServerDetails/>
        </div>
        <hr>
        <AppFooter/>
    </div>
</template>

<script>
    import AppHeader from './components/Shared/Header.vue';
    import AppFooter from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
        components: {
            AppHeader,
            Servers,
            ServerDetails,
            AppFooter
        }
    }
</script>

<style>

</style>
