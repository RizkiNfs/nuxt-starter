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
    '@nuxt/icon',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'reka-ui/nuxt',
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
  icon: {
    size: '24px',
    componentName: 'ui-icon',
    customCollections: [
      {
        prefix: 'app-icon',
        dir: './app/assets/icons',
      },
    ],
  },
})
