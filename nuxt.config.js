module.exports = {
  mode: 'spa',
  head: {
    title: `Wilf and Jesse's Bible Ticklist`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  server: {
    host: '0.0.0.0'
  }
}