import pkg from './package'
import webpack from 'webpack'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    script: [
      { src: 'modules/jquery.min.js' },
      { src: 'modules/popper.js' },
      { src: 'modules/tooltip.js' },
      { src: 'modules/bootstrap/js/bootstrap.min.js' },
      { src: 'modules/nicescroll/jquery.nicescroll.js' },
      { src: 'modules/moment.min.js' },
      { src: 'js/stisla.js' },
      { src: 'js/scripts.js' },
      { src: 'js/custom.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
      'css/css/style.css',
      'css/css/components.css',
      'static/modules/fontawesome/css/all.min.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        '_': 'lodash'
      })
    ]
  }
}
