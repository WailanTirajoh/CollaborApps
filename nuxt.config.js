export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MyFirstNuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/bootstrap/main.scss',
    '@/assets/index.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/bootstrap.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],
  axios: {
    // proxy: true,
    // credentials: true,
    baseUrl: "http://localhost:8000/api"
  },
  proxy: {
    '/laravel': {
      target: 'http://localhost:3000',
      pathRewrite: { '^/laravel': '/' }
    }
  },
  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: 'http://localhost:8000',
        endpoints: {
          login: {
            url: '/api/login',
          },
          logout: {
            url: '/api/logout',
          },
          user: {
            url: '/api/user',
          },
        },
        user: {
          property: false,
        },
      },
    },

    redirect: {
      login: '/auth/login',
      logout: '/auth/login',
      home: '/',
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  loading: {
    color: '#385898',
    height: '5px'
  }
}
