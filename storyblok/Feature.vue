<template>
  <div v-editable="blok" class="w-full">
    <img v-if="optimizedImage" :src="optimizedImage" :alt="blok.image.alt"
      class="object-cover w-full h-32 mb-4 shadow" />
    <h3 class="text-base font-semibold text-stone-700">
      {{ blok.name }}
    </h3>
    <p class="pt-1 text-sm text-stone-600">{{ blok.description }}</p>
  </div>
</template>
 
<script setup>
const props = defineProps({ blok: Object })

const optimizedImage = computed(() => {
  const imageSrc = props.blok.image?.filename
  return imageSrc ? `${imageSrc}/m/0x200` : undefined
})
</script>