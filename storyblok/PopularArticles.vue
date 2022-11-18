<template>
  <div class="container py-12">
    <h2 class="flex items-center pb-6 text-xl font-semibold text-stone-800">
      <span class="block w-10 h-10 -mr-3 bg-pink-200 rounded-full"></span>
      {{ blok.headline }}
    </h2>
    <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 place-items-start">
      <ArticleCard v-for="article in blok.articles" :key="article.uuid" :article="article.content"
        :slug="article.full_slug" />
    </div>
  </div>
</template>
   
<script setup>
defineProps({ blok: Object })
</script>