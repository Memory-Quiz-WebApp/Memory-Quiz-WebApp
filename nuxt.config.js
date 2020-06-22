module.exports = {
  mode: 'universal',
  srcDir: 'src',
  buildDir: process.env.FIREBASE_BUILD ? 'functions/.nuxt' : '.nuxt',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Memory Quiz WebApp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'A WebApp for testing memory.'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  firebase: {
    config: {
      apiKey: 'AIzaSyAG6sDbZA6zyNvBMtdXYiX2RwOu2Tr2bPk',
      authDomain: 'memory-quiz-webapp.firebaseapp.com',
      databaseURL: 'https://memory-quiz-webapp.firebaseio.com',
      projectId: 'memory-quiz-webapp',
      storageBucket: 'memory-quiz-webapp.appspot.com',
      messagingSenderId: '646847919634',
      appId: '1:646847919634:web:f06d21c65d693f966c0acb',
      measurementId: 'G-E3B1Y7M282'
    },
    development: {
      config: {
        apiKey: 'AIzaSyAG6sDbZA6zyNvBMtdXYiX2RwOu2Tr2bPk',
        authDomain: 'memory-quiz-webapp.firebaseapp.com',
        databaseURL: 'https://memory-quiz-webapp.firebaseio.com',
        projectId: 'memory-quiz-webapp',
        storageBucket: 'memory-quiz-webapp.appspot.com',
        messagingSenderId: '646847919634',
        appId: '1:646847919634:web:f06d21c65d693f966c0acb',
        measurementId: 'G-E3B1Y7M282'
      }
    },
    services: {
      auth: {
        persistence: 'local',
        initialize: {
          onAuthStateChangedMutation: 'setAuthUser',
          onAuthStateChangedAction: null
        },
        ssr: {
          // !! NEVER deploy a service account file to github or to a publicly accessible folder on your server !!
          credential: '~/assets/firebase/service-account.json',
          ignorePaths: [],
          // Experimental Feature, use with caution.
          serverLogin: {
            sessionLifetime: 60 * 60 * 1000, // one hour
            loginDelay: 50 // minimal recommended delay
          }
        }
      },
      firestore: true,
      analytics: true,
      messaging: {
        createServiceWorker: false
      }
    },
    onFirebaseHosting: false
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/firebase', '@nuxtjs/pwa', 'bootstrap-vue/nuxt'],
  bootstrapVue: {
    usePretranspiled: true
  },
  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
