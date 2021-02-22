<template>
  <div>
    <NavBar />
    <Nuxt />
    <Footer />
  </div>
</template>

<style>
</style>
<script>
    import NavBar from "../components/NavBar";
    import Footer from "../components/Footer";
    export default {
        components: {Footer, NavBar}
    }
</script>
