<template>
  <article v-editable="blok" class="container pt-12 pb-24 md:w-2/3">
    <h1 class="pb-6 text-4xl font-semibold text-stone-800">
      {{ blok.title?.slice(0, -1) }}<span class="text-pink-400">{{ blok.title?.slice(-1) }}</span>
    </h1>
    <img
      v-if="blok.image?.filename"
      :src="`${blok.image?.filename}/m/700x250`"
      :alt="blok.image?.alt"
      width="700"
      height="250"
      class="shadow-lg"
    />
    <h2 class="py-10 text-lg font-semibold text-stone-800">
      {{ blok.subtitle }}
    </h2>
    <div v-html="resolvedRichText" class="mx-auto prose text-stone-700 prose-a:text-pink-400 prose-blockquote:text-stone-800 prose-img:rounded-lg" />
  </article>
</template>
 
<script setup>
const props = defineProps({ blok: Object })

const resolvedRichText = computed(() => renderRichText(props.blok.content))
</script>