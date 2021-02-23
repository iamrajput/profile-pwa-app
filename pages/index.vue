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
      <a :href="social_accounts.twitter" class="social" target="__blank">
        <i class="fab fa-twitter fa-2x"></i>
      </a>
      <a :href="social_accounts.facebook" class="social" target="__blank">
        <i class="fab fa-facebook fa-2x"></i>
      </a>
      <a :href="social_accounts.linkedin" class="social" target="__blank">
        <i class="fab fa-linkedin fa-2x"></i>
      </a>
      <a :href="social_accounts.github" class="social" target="__blank">
        <i class="fab fa-github fa-2x"></i>
      </a>
      <a :href="social_accounts.devto" target="__blank">
        <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="ATUL KUMAR SINGH's DEV Community Profile" height="30" width="30">
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
            social_accounts: 'config/social_accounts',
        }),
    }
}
</script>

<style scoped>
  .social {
    color: rgba(68, 68, 68, 0.9)
  }
</style>
