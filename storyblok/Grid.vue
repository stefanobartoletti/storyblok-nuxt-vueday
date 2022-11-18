<template>
  <section v-editable="blok" class="bg-[#EDEAE4] py-12">
    <div class="container grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      <StoryblokComponent v-for="blok in blok.columns" :key="blok._uid" :blok="blok" />
    </div>
  </section>
</template>

<script setup>
defineProps({ blok: Object })
</script>