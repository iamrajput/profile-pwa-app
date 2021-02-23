import config from './configs'
const profile = config('profile')

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ATUL SINGH RAJPUT',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: profile.favicon_logo || '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://use.fontawesome.com/releases/v5.2.0/css/all.css',
      },
    ],
    script: [
      {
        src: '~/assets/js/main.js',
      },
      ],
  },
  router: {
    // linkActiveClass: 'active',
    linkExactActiveClass: 'active',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css',
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      fileName: profile.logo,
    },
    manifest: {
      name: profile.name,
      short_name: profile.name,
      description: profile.description,
      background_color: profile.background_color,
      theme_color: profile.theme_color,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
