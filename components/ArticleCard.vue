<template>
  <article v-editable="article" class="w-full">
    <img v-if="article.image?.filename" :src="`${article.image?.filename}/m/0x200`" :alt="article.image?.alt"
      class="object-cover w-full h-32 mb-4 shadow" />
    <h3 class="text-base font-semibold text-stone-700">
      {{ article.title }}
    </h3>
    <p class="pt-1 text-sm text-stone-600">
      {{ article.teaser }}
    </p>
    <NuxtLink :to="localePath(`/${slug}${slug.slice(-1) !== '/' ? '/' : ''}`)"
      class="block pt-2 text-sm text-right text-pink-400 underline">Read more</NuxtLink>
  </article>
</template>

<script setup>
defineProps({ article: Object, slug: String })

const localePath = useLocalePath()
</script>