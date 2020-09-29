export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Nông Nghiệp 365' || '',
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: "Trang Web tin tức chuyên Nông Thôn Việt Nam"
    }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/logo.png'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [
    '~assets/style/main.css',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/request.js' },
    { src: '~/plugins/filters.js' },
    { src: '~/plugins/vuelidate.js' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/device'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: "http://192.168.1.218:8080/quan8-frontend/public",
    header: "Content-Type: application/json"
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  },
  env: {
    // baseAPI: 'https://api-boo.bazic.vn',
    BASE_URL: "http://192.168.1.218:8080/nongthonviet-frontend",
  },
}
