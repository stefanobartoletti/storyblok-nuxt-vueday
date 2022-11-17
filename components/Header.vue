<template>
    <header>
      <div class="container flex items-center justify-between h-full py-6 mx-auto">
        <NuxtLink to="/" class="text-xl font-semibold text-stone-900 hover:text-pink-400">
          Jamstack blog
        </NuxtLink>
        <nav>
          <ul class="flex gap-6 text-sm font-semibold md:gap-10 text-stone-700">
            <li v-for="link in ['blog', 'about']">
              <NuxtLink :to="`/${link}`" class="capitalize hover:text-pink-400">{{ link }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <style scoped>
  header .router-link-active:after {
    @apply content-['.'] block text-4xl leading-[0] text-pink-400 text-center -mt-1.5;
  }
  </style>