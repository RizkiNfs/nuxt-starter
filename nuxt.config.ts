import tailwindcss from '@tailwindcss/vite'

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

  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
    'reka-ui/nuxt',
  ],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

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

  compatibilityDate: '2025-03-06',
})
