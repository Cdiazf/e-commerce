<template>
  <section
      class="relative w-full h-[500px] flex items-center bg-black text-white"
  >
    <!-- Background Image -->
    <img
        src="https://via.placeholder.com/1600x500"
        alt="Background Running Shoes"
        class="absolute top-0 left-0 w-full h-full object-cover opacity-70"
    />

    <!-- Content: Title and Button -->
    <div class="relative z-10 max-w-7xl mx-auto w-full px-8">
      <div class="text-left">
        <p class="text-sm uppercase tracking-widest mb-2">Do it now. Run on air</p>
        <h1 class="text-5xl font-bold mb-6">RUNNING SHOES</h1>
        <button
            class="bg-white text-black py-2 px-6 rounded hover:bg-gray-300 transition"
        >
          SEE MORE
        </button>
      </div>
    </div>

    <!-- Thumbnails at Bottom Right -->
    <div class="absolute bottom-4 right-4 flex space-x-4 z-10">
      <img
          v-for="(image, index) in thumbnails"
          :key="index"
          :src="image"
          alt="Thumbnail"
          class="w-12 h-12 rounded-lg cursor-pointer border border-white hover:border-gray-500 transition"
      />
    </div>
  </section>
</template>

<script setup>
const thumbnails = [
  "https://via.placeholder.com/50x50?text=Thumb1",
  "https://via.placeholder.com/50x50?text=Thumb2",
];
</script>

<style scoped>
/* Additional styling for hover or transitions (if needed) */
</style>
