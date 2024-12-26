<template>
  <div class="w-full lg:w-3/4 p-4 mt-4">
    <div class="flex justify-end mb-4">
      <!-- Sorting Dropdown -->
      <div class="relative inline-block">
        <button
            @click="toggleDropdown"
            class="text-gray-700 hover:text-gray-900 font-semibold focus:outline-none"
        >
          Sort <i class="fas fa-chevron-down"></i>
        </button>
        <ul
            v-if="isDropdownOpen"
            class="absolute right-0 mt-2 bg-white border border-gray-200 rounded shadow-lg w-48"
        >
          <li v-for="option in sortOptions" :key="option" class="px-4 py-2 hover:bg-gray-100">
            <a href="#" class="text-gray-700">{{ option }}</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Product Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
          v-for="product in products"
          :key="product.id"
          class="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
      >
        <img :src="product.image" alt="Product" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="text-gray-700 font-semibold">{{ product.name }}</h3>
          <p class="text-gray-500 text-sm">{{ product.description }}</p>
          <p class="text-gray-900 font-bold mt-2">${{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Product Data
const products = ref([
  {
    id: 1,
    name: "Basic Tee 8-Pack",
    description: "8 colors",
    price: 256,
    image: "https://via.placeholder.com/300x400?text=Basic+Tee+8-Pack",
  },
  {
    id: 2,
    name: "Basic Tee",
    description: "Black",
    price: 32,
    image: "https://via.placeholder.com/300x400?text=Basic+Tee",
  },
  {
    id: 3,
    name: "Kinda White Basic Tee",
    description: "White",
    price: 32,
    image: "https://via.placeholder.com/300x400?text=White+Tee",
  },
  {
    id: 4,
    name: "Stone Basic Tee",
    description: "Charcoal",
    price: 32,
    image: "https://via.placeholder.com/300x400?text=Stone+Tee",
  },
  {
    id: 5,
    name: "Fall Basic Tee 3-Pack",
    description: "Charcoal",
    price: 96,
    image: "https://via.placeholder.com/300x400?text=Fall+Tee+3-Pack",
  },
  {
    id: 6,
    name: "Linework Artwork Tee 3-Pack",
    description: "3 colors",
    price: 108,
    image: "https://via.placeholder.com/300x400?text=Linework+Artwork+Tee",
  },
]);

// Sorting Options
const sortOptions = ["Most Popular", "Best Rating", "Newest", "Price: Low to High", "Price: High to Low"];
const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>
