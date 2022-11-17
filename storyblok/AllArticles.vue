<template>
    <div class="container py-12">
      <h2 class="flex items-center pb-6 text-xl font-semibold text-stone-800">
        <span class="block w-10 h-10 -mr-3 bg-pink-200 rounded-full"></span>
        {{ blok.headline }}
      </h2>
      <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 place-items-start">
        <ArticleCard
          v-for="article in articles"
          :key="article.uuid"
          :article="article.content"
          :slug="article.full_slug"
        />
      </div>
    </div>
</template>

<script setup>
defineProps({ blok: Object })

const storyblokApi = useStoryblokApi()

// Requesting multiple stories (List of Articles)
const { data } = await storyblokApi.get('cdn/stories', {
version: 'draft',
starts_with: 'blog', // Getting the blog folder stories
is_startpage: 0, // Filter the overview (Blog Home) page
})

const articles = ref(data.stories)
</script>