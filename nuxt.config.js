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
      {
        hid: 'description',
        name: 'description',
        content:
          profile.description ||
          'I am a hardworking, enthusiastic, efficient IT professional with a keen interest to learn and take up instructions and responsibilities.\n' +
          '\n',
      },
      {
        property: 'og:title',
        content: profile.name || 'ATUL KUMAR SINGH',
      },
      {
        name: 'twitter:title',
        content: profile.name || 'ATUL KUMAR SINGH',
      },
      {
        property: 'og:description',
        content:
          profile.client_description ||
          'I am a hardworking, enthusiastic, efficient IT professional with a keen interest to learn and take up instructions and responsibilities.\n' +
          '\n',
      },
      {
        property: 'og:image',
        content:
          profile.my_logo ||
          'https://tagfi-s3-dev1.s3.amazonaws.com/empty-img.png',
      },
      {
        property: 'og:image:alt',
        content: profile.name || 'ATUL KUMAR SINGH',
      },
      {
        name: 'twitter:description',
        content:
          profile.description ||
          'I am a hardworking, enthusiastic, efficient IT professional with a keen interest to learn and take up instructions and responsibilities.',
      },
      { name: 'twitter:card', content: `summary_large_image` },
      { property: 'og:site_name', content: profile.name },
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
    '@nuxtjs/onesignal',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  oneSignal: {
    init: {
      appId: profile.one_signal_key,
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: true
      }
    }
  },

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
