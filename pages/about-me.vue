<template>
  <main id="about">
    <h1 class="lg-heading">
      About
      <span class="text-secondary">Me</span>
    </h1>
    <h2 class="sm-heading">
      Let me tell you a few things...
    </h2>
    <div class="about-info">
      <img src="/atul7.jpg" alt="John Doe" class="bio-image">

      <div class="bio">
        <h3 class="text-secondary">BIO</h3>
        <p>I am a hardworking, enthusiastic, efficient IT professional with a keen interest to learn and take up instructions and responsibilities.</p>
      </div>

      <div class="job job-1">
        <h3>BACKEND</h3>
        <h6>RESPONSIBILITIES</h6>
        <p>API DEVELOPMENT(LARAVEL/Node.js)</p>
        <p>DESIGNING THE DATABASE(MYSQL)</p>
      </div>

      <div class="job job-2">
        <h3>FRONTEND</h3>
        <h6>RESPONSIBILITIES</h6>
        <p>BUILDING THE WEB APP(VUE AND NUXT.JS FRAMEWORK)</p>
        <p>IMPLEMENTING NEW TECHNOLOGIES</p>
      </div>

      <div class="job job-3">
        <h3>DevOps</h3>
        <h6>RESPONSIBILITIES</h6>
        <p>Deployment of application using (git/docker)</p>
      </div>
    </div>
  </main>
</template>

<script>
    export default {
        name: "about-me"
    }
</script>

<style scoped>

</style>
