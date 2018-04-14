const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    header: [
      { name: 'Access-Control-Allow-Origin', value: 'true' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/bootstrap.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/animate.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/paper-dashboard.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/demo.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Muli:400,300' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/themify-icons.css' }
    ],
    script: [
      { type: 'text/javascript', src: '/js/jquery-1.10.2.js' },
      { type: 'text/javascript', src: '/js/bootstrap.min.js' },
      { type: 'text/javascript', src: '/js/bootstrap-checkbox-radio.js' },
      { type: 'text/javascript', src: '/js/chartist.min.js' },
      { type: 'text/javascript', src: '/js/bootstrap-notify.js' },
      { type: 'text/javascript', src: 'https://maps.googleapis.com/maps/api/js' },
      { type: 'text/javascript', src: '/js/paper-dashboard.js' },
      { type: 'text/javascript', src: '/js/demo.js' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/vue-google-heatmap' }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    // 'bootstrap-vue/nuxt'
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

    }
  }
}
