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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/bootstrap/main.scss', '@/assets/index.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
      mode: 'client'
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome',
    '@nuxtjs/toast',
    [
      '@nuxtjs/laravel-echo',
      {
        broadcaster: 'pusher',
        key: process.env.PUSHER_KEY,
        wsHost: process.env.PUSHER_WS_HOST,
        wsPort: process.env.PUSHER_WS_PORT,
        forceTLS: false,
        disableStats: true,
        authEndpoint: `${process.env.BACKEND_BASE_URL}/api/broadcasting/auth`
      }
    ]
    // '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next'],
  axios: {
    credentials: true,
    baseUrl: 'http://localhost:8000/api/v1'
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          required: true,
          type: 'Bearer',
          maxAge: 60 * 2
        },
        provider: 'laravel/sanctum',
        url: 'http://localhost:8000',
        endpoints: {
          login: {
            url: '/api/v1/login',
            method: 'post',
            propertyName: 'token'
          },
          logout: {
            url: '/api/v1/logout',
            method: 'post'
          },
          user: {
            url: '/api/v1/user'
          }
        },
        user: {
          property: false,
          autoFetch: true
        }
      }
    },

    redirect: {
      login: '/auth/login',
      logout: '/auth/login',
      home: '/'
    }
  },

  fontawesome: {
    icons: {
      solid: true,
      regular: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  loading: {
    color: '#385898',
    height: '5px',
    duration: 1000,
    continuous: true
  },
  echo: {
    plugins: ['~/plugins/echo.js'],
    authModule: true,
    connectOnLogin: true,
    disconnectOnLogout: true
  },

  toast: {
    position: 'top-center',
    register: [
      // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  }
}
