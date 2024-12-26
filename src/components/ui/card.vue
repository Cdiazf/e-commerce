<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden">
    <img :src="image" :alt="title" class="w-full h-48 object-cover" />
    <div class="p-6">
      <h2 class="text-xl font-semibold mb-2">{{ title }}</h2>
      <p class="text-lg text-gray-600 mb-4">${{ price }}</p>
      <div class="flex items-center text-gray-500 mb-4">
        <div class="flex items-center mr-4">
          <i class="fas fa-map-marker-alt mr-1"></i>
          {{ location }}
        </div>
        <div class="flex items-center mr-4">
          <i class="fas fa-bed mr-1"></i>
          {{ beds }} beds
        </div>
        <div class="flex items-center">
          <i class="fas fa-bath mr-1"></i>
          {{ baths }} Baths
        </div>
      </div>
      <p class="text-sm text-gray-500 mb-4">{{ description }}</p>
      <a href="#" class="text-indigo-600 font-semibold hover:underline">
        Learn More <i class="fas fa-chevron-right"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  price: [Number, String],
  location: String,
  beds: Number,
  baths: Number,
  description: String,
});
</script>
