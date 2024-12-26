<template>
  <div class="min-h-screen flex items-center justify-center bg-indigo-200 p-4">
    <div
        class="bg-white rounded-lg shadow-lg flex flex-col lg:flex-row max-w-4xl w-full relative"
    >
      <!-- Left Section: Product Image -->
      <div
          class="relative w-full lg:w-1/2 p-6 bg-green-100 rounded-t-lg lg:rounded-l-lg"
      >
        <div class="relative ">
          <img
              :src="selectedImage"
              alt="Product Image"
              class="absolute -left-12 top-0 w-full h-auto rounded-lg transform z-10"
          />
          <!-- Icons -->
          <div class="absolute top-5 -left-5 z-20">
            <button class="text-white">
              <i class="fas fa-share-alt"></i>
            </button>
          </div>
          <div class="absolute top-5 right-20 z-20">
            <button class="text-white">
              <i class="fas fa-heart"></i>
            </button>
          </div>
        </div>
        <!-- Thumbnails -->
        <div class="flex justify-center mt-4 space-x-4 relative z-20 -left-12">
          <img
              v-for="(image, index) in images"
              :key="index"
              :src="image"
              alt="Thumbnail"
              @click="selectedImage = image"
              class="w-12 h-12 border rounded cursor-pointer hover:border-black transition"
              :class="{ 'border-black-500': selectedImage === image }"
          />
        </div>
      </div>

      <!-- Right Section: Product Details -->
      <div class="w-full lg:w-1/2 p-6">
        <h2 class="text-2xl font-bold text-gray-800 mb-2">Delicious Apples</h2>
        <p class="text-sm text-gray-500 mb-4">COD: 45999</p>

        <!-- Price -->
        <p class="text-4xl font-bold text-red-500 mb-4">R$ 7.93</p>

        <!-- Color Options -->
        <div class="mb-6">
          <p class="text-gray-700 font-semibold mb-2">SELECT A COLOR</p>
          <div class="flex space-x-2">
            <button
                v-for="(color, index) in colors"
                :key="index"
                @click="selectedColor = color"
                class="w-8 h-8 rounded-full border transition"
                :style="{ backgroundColor: color }"
                :class="{
                'ring-2 ring-green-600': selectedColor === color,
              }"
            ></button>
          </div>
        </div>

        <!-- Benefits -->
        <div class="mb-6">
          <p class="text-gray-700 font-semibold mb-2">BENEFITS</p>
          <ul class="text-gray-600 space-y-1">
            <li>• Apples are nutritious</li>
            <li>• Apples may be good for weight loss</li>
            <li>• Apples may be good for bone health</li>
            <li>• They're linked to a lowest risk of diabetes</li>
          </ul>
        </div>

        <!-- Add to Cart Button -->
        <button
            class="w-full bg-indigo-700 hover:bg-indigo-500 text-white py-3 rounded-lg shadow-md font-semibold transition"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Product Images
const images = [
  "https://via.placeholder.com/300x300/76c044", // Green Apple
  "https://via.placeholder.com/300x300/ffffff", // White Apple
  "https://via.placeholder.com/300x300/e3a008", // Yellow Apple
  "https://via.placeholder.com/300x300/a83232", // Red Apple
];

// Selected Image
const selectedImage = ref(images[0]);

// Color Options
const colors = ["#76c044", "#ffffff", "#e3a008", "#a83232"];

// Selected Color
const selectedColor = ref(colors[0]);
</script>

<style scoped>
/* No custom CSS needed; Tailwind handles positioning */
</style>
