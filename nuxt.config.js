export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'pop-project',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/sass/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/data-filter.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,


  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules

  buildModules: [
    '@nuxt/image',
    '@nuxtjs/moment',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/image',
    '@nuxtjs/axios',
    '@eloqjs/nuxt-collection',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  target: 'static',

  axios: {
    proxy: true
  },

  proxy: {
    '/api/': {target: 'https://eecl.co.th/', changeOrigin: true}
  },
  moment: {
    defaultLocale: 'th',
    locales: ['th'],
  }
}
