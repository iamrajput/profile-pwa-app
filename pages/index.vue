<template>
  <body id="bg-img">
  <main id="home">
    <h1 class="lg-heading">
      ATUL
      <span class="text-secondary">RAJPUT</span>
    </h1>
    <h2 class="sm-heading">
      Fullstack web developer, Programmer & Entrepreneur
    </h2>
    <div class="icons">
      <a href="#!" class="social">
        <i class="fab fa-twitter fa-2x"></i>
      </a>
      <a href="#!" class="social">
        <i class="fab fa-facebook fa-2x"></i>
      </a>
      <a href="https://www.linkedin.com/in/atul-kumar-singh-673357102/" class="social" target="__blank">
        <i class="fab fa-linkedin fa-2x"></i>
      </a>
      <a href="https://github.com/iamrajput" class="social" target="__blank">
        <i class="fab fa-github fa-2x"></i>
      </a>
    </div>
  </main>
  </body>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            homeButton: 'config/homeButton',
            manus: 'config/manus',
            texts: 'config/texts',
            flags: 'config/flags',
            app_links: 'config/app_links',
            links: 'config/links',
            client_name: 'config/client_name',
        }),
    }
}
</script>

<style scoped>
  .social {
    color: rgba(68, 68, 68, 0.9)
  }
</style>
