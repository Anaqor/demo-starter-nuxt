// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    routeRules: {
      '/': { cors: true, headers: { 'access-control-allow-methods': 'GET, POST, OPTIONS' } },
    }
  },
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  devtools: { enabled: true }
})
