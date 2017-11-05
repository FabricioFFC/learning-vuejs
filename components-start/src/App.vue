<template>
    <div class="container">
        <Header/>
        <hr>
        <ServerList/>
        <hr>
        <Footer/>
    </div>
</template>

<script>
import Header from './components/Header.vue';
import ServerList from './components/ServerList.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    ServerList,
    Footer,
  },
};
</script>

<style>

</style>
