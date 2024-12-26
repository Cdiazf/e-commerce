<template>
  <div class="w-full lg:w-1/4 p-4 bg-white border-r border-gray-200 mt-4">
    <!-- Category Header -->
    <h2 class="text-2xl font-bold mb-6">New Arrivals</h2>
    <ul class="space-y-4">
      <!-- Category List -->
      <li v-for="category in categories" :key="category" class="text-gray-700">
        <a href="#" class="hover:text-gray-900">{{ category }}</a>
      </li>
    </ul>

    <!-- Expandable Filters -->
    <div class="mt-8 space-y-6">
      <div>
        <div
            class="flex justify-between items-center cursor-pointer"
            @click="toggleSection('color')"
        >
          <span class="font-semibold">Color</span>
          <span>{{ isOpen.color ? "-" : "+" }}</span>
        </div>
        <ul v-show="isOpen.color" class="mt-2 space-y-2">
          <li v-for="color in colors" :key="color" class="text-gray-600">
            <a href="#" class="hover:text-gray-900">{{ color }}</a>
          </li>
        </ul>
      </div>

      <div>
        <div
            class="flex justify-between items-center cursor-pointer"
            @click="toggleSection('category')"
        >
          <span class="font-semibold">Category</span>
          <span>{{ isOpen.category ? "-" : "+" }}</span>
        </div>
        <ul v-show="isOpen.category" class="mt-2 space-y-2">
          <li v-for="subCategory in subCategories" :key="subCategory" class="text-gray-600">
            <a href="#" class="hover:text-gray-900">{{ subCategory }}</a>
          </li>
        </ul>
      </div>

      <div>
        <div
            class="flex justify-between items-center cursor-pointer"
            @click="toggleSection('size')"
        >
          <span class="font-semibold">Size</span>
          <span>{{ isOpen.size ? "-" : "+" }}</span>
        </div>
        <ul v-show="isOpen.size" class="mt-2 space-y-2">
          <li v-for="size in sizes" :key="size" class="text-gray-600">
            <a href="#" class="hover:text-gray-900">{{ size }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

// Static data for filters
const categories = ["Totes", "Backpacks", "Travel Bags", "Hip Bags", "Laptop Sleeves"];
const colors = ["Red", "Green", "Blue", "Black", "White"];
const subCategories = ["Casual", "Formal", "Sport"];
const sizes = ["XS", "S", "M", "L", "XL"];

// State for expandable sections
const isOpen = reactive({
  color: false,
  category: false,
  size: false,
});

// Function to toggle filter sections
const toggleSection = (section) => {
  isOpen[section] = !isOpen[section];
};
</script>
