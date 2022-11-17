<template>
    <div v-editable="blok" class="w-full">
      <h3 class="text-base font-semibold text-stone-700">
        {{ blok.name }}
      </h3>
    </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>