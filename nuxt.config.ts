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
      ]
    ],
  })
