<template>
  <header>
    <div class="menu-btn" @click="handleClick">
      <div class="btn-line"></div>
      <div class="btn-line"></div>
      <div class="btn-line"></div>
    </div>

    <nav class="menu">
      <div class="menu-branding">
        <div class="portrait"></div>
      </div>
      <ul class="menu-nav">
        <li class="nav-item" @click="handleClick" v-for="(manu, index) in manus"
            :key="index">
          <nuxt-link class="nav-link" :to="manu.url">
            {{manu.name}}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
 import { mapGetters } from 'vuex'
    export default {
        name: "NavBar",
        data() {
            return {
                showMenu: false,
            }
        },
        computed: {
            ...mapGetters({
                manus: 'config/manus',
                client_name: 'config/client_name',
            }),
        },
        methods:{
           handleClick(){
               const menuBtn = document.querySelector('.menu-btn');
               const menu = document.querySelector('.menu');
               const menuNav = document.querySelector('.menu-nav');
               const menuBranding = document.querySelector('.menu-branding');
               const navItems = document.querySelectorAll('.nav-item');
               if (!this.showMenu) {
                   menuBtn.classList.add('close');
                   menu.classList.add('show');
                   menuNav.classList.add('show');
                   menuBranding.classList.add('show');
                   navItems.forEach((item) => item.classList.add('show'));
                   // Set Menu State
                   this.showMenu = true;
               } else {
                   menuBtn.classList.remove('close');
                   menu.classList.remove('show');
                   menuNav.classList.remove('show');
                   menuBranding.classList.remove('show');
                   navItems.forEach((item) => item.classList.remove('show'));
                   // Set Menu State
                   this.showMenu = false;
               }
            }
        },
    }
</script>

<style scoped>
  .active {
    color: #f2ae02;
  }
</style>
