// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  future: {
    compatibilityVersion: 4,
  },
  vue: {
    propsDestructure: true,
  },
  compatibilityDate: '2024-08-21',
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    'radix-vue/nuxt',
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    families: {
      'Lato': [400, 700],
      'Nunito Sans': [400, 700],
    },
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
})
