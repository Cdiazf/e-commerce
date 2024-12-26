<template>
  <section class="py-12 bg-black text-white">
    <div class="max-w-7xl mx-auto">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold">ADIDAS ULTRA BOOST</h2>
        <button
            class="bg-white text-black py-2 px-4 rounded hover:bg-gray-300 transition"
        >
          SHOP NOW
        </button>
      </div>
      <div class="grid grid-cols-4 gap-6">
        <img
            v-for="image in productImages"
            :key="image"
            :src="image"
            alt="Product"
            class="w-full h-32 object-cover rounded"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const productImages = [
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
];
</script>
