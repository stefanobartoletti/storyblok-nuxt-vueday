<template>
  <header>
    <div class="container flex items-center justify-between h-full py-6 mx-auto">
      <NuxtLink to="/" class="text-xl font-semibold text-stone-900 hover:text-pink-400">
        Jamstack blog
      </NuxtLink>
      <nav v-if="headerMenu">
        <ul class="flex gap-6 text-sm font-semibold md:gap-10 text-stone-700">
          <li v-for="menuLink in headerMenu" :key="menuLink._uid">
            <NuxtLink :to="`/${menuLink.link.cached_url}`" class="capitalize hover:text-pink-400">
              {{ menuLink.link.story.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories/config', {
  version: 'draft',
  resolve_links: 'url',
})

const headerMenu = ref(data.story.content.header_menu)
</script>

<style scoped>
header .router-link-active:after {
  @apply content-['.'] block text-4xl leading-[0] text-pink-400 text-center -mt-1.5;
}
</style>