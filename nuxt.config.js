module.exports = {
    buildModules: [
      '@nuxtjs/vuetify',
      '@nuxtjs/google-fonts'
    ],
    server: {
      port: 4000 // default: 3000
    },
    plugins: [/*{ src: '@/plugins/socket', ssr: false },*/{src:'@/plugins/search'}],
    telemetry: false
}