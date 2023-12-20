// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-security"],
  security: {
    headers: {
      crossOriginResourcePolicy: 'cross-origin',
    },
  },
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  devtools: { enabled: true }
})
