<template>
  <main id="work">
    <h1 class="lg-heading">
      My
      <span class="text-secondary">Work</span>
    </h1>
    <h2 class="sm-heading">
      Check out some of my projects...
    </h2>

    <div class="projects">
      <div class="item" v-for="project in projects">
        <a :href="project.url" target="__blank">
          <img :src="project.image" alt="Project" style="height: 282px;">
        </a>
        <a :href="project.url" class="btn-light" target="__blank">
          <i class="fas fa-eye"></i> {{project.name}}
        </a>
        <a :href="project.url" class="btn-dark" target="__blank">
          <i class="fab fa-github"></i> Github
        </a>
      </div>
    </div>

  </main>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "work",
        computed: {
            ...mapGetters({
                manus: 'config/manus',
                client_name: 'config/client_name',
                projects : 'config/projects'
            }),
        },
    }
</script>

<style scoped>

</style>
