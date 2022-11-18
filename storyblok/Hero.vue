<template>
  <div v-editable="blok" class="container grid items-center gap-6 py-10 md:grid-cols-2">
    <img v-if="blok.background_image.filename" :src="`${blok.background_image.filename}/m/500x300`"
      :alt="blok.background_image.alt" width="500" height="300" class="shadow-lg" :class="imgClass" />
    <div>
      <h2 class="pb-1 text-2xl font-semibold text-stone-800">
        {{ blok.headline.slice(0, -1) }}<span class="text-pink-400">{{ blok.headline.slice(-1) }}</span>
      </h2>
      <p class="text-sm text-stone-600">
        {{ blok.subheadline }}
      </p>
    </div>
  </div>
</template>
 
<script setup>
const props = defineProps({ blok: Object })

const imgClass = computed(() => {
  return props.blok.layout === 'image-right' ? 'order-last' : ''
})
</script>