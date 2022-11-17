// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
      [
        '@storyblok/nuxt',
        {
            accessToken: 'Ye2Tu63nTUUbFfxQJOPqDAtt',
            // If Server Location === US then:
            // apiOptions: { region: 'us' }
        }
      ],
      '@nuxtjs/tailwindcss',
      '@nuxtjs/i18n',
    ],
    i18n: {
      strategy: 'prefix_except_default',
      locales: ['en', 'it'],
      defaultLocale: 'en', // default locale
    }
  })
