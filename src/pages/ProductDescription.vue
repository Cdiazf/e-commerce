<template>
  <div class="min-h-screen bg-gray-50 mt-4" >
    <!-- Main Product Section -->
    <div class="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white shadow-md">
      <!-- Product Image and Thumbnails -->
      <div>
        <!-- Main Product Image -->
        <img
            :src="selectedImage"
            alt="Product Image"
            class="w-full h-auto rounded-lg shadow-md"
        />
        <!-- Thumbnails -->
        <div class="flex space-x-4 mt-4">
          <img
              v-for="(image, index) in images"
              :key="index"
              :src="image"
              alt="Thumbnail"
              class="w-20 h-20 border rounded-lg cursor-pointer hover:border-gray-500"
              :class="{ 'border-gray-500': selectedImage === image }"
              @click="selectedImage = image"
          />
        </div>
      </div>

      <!-- Product Information -->
      <div class="flex flex-col">
        <h1 class="text-2xl font-bold text-gray-800 mb-2">
          Ipsum Imperdie Omittam Incident
        </h1>

        <!-- Rating -->
        <div class="flex items-center mb-2">
          <div class="flex text-yellow-400">
            <i class="fas fa-star" v-for="n in 4" :key="n"></i>
            <i class="far fa-star"></i>
          </div>
          <span class="ml-2 text-sm text-gray-500">(1 customer review)</span>
        </div>

        <!-- Price -->
        <p class="text-3xl text-red-600 font-bold mb-4">$100.00</p>

        <!-- Short Description -->
        <p class="text-gray-700 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.
        </p>

        <!-- Quantity and Buttons -->
        <div class="flex items-center mb-6">
          <!-- Quantity -->
          <input
              type="number"
              min="1"
              value="1"
              class="w-16 h-10 text-center border border-gray-300 rounded mr-4"
          />
          <!-- Add to Cart Button -->
          <button
              class="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded font-semibold transition"
          >
            ADD TO CART
          </button>
        </div>

        <!-- Wishlist and Compare -->
        <div class="flex space-x-6 mb-6">
          <button class="text-gray-700 hover:text-black transition">
            <i class="far fa-heart mr-2"></i> Browse Wishlist
          </button>
          <button class="text-gray-700 hover:text-black transition">
            <i class="fas fa-exchange-alt mr-2"></i> Add to Compare
          </button>
        </div>

        <!-- Categories and Tags -->
        <div class="text-sm text-gray-500">
          <p><strong>Categories:</strong> Clothing, Laptops & Desktops</p>
          <p><strong>Tag:</strong> blouse</p>
        </div>

        <!-- Social Share -->
        <div class="flex space-x-4 mt-4">
          <a href="#" class="text-gray-500 hover:text-gray-700">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-700">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-700">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="#" class="text-gray-500 hover:text-gray-700">
            <i class="fab fa-pinterest-p"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Product Tabs -->
    <div class="max-w-7xl mx-auto mt-12 p-6 bg-white shadow-md">
      <div class="border-b mb-6">
        <button
            class="pb-2 text-red-500 border-b-2 border-red-500 font-semibold focus:outline-none"
        >
          Description
        </button>
        <button
            class="pb-2 ml-6 text-gray-600 hover:text-red-500 transition focus:outline-none"
        >
          Reviews (1)
        </button>
      </div>
      <p class="text-gray-700 leading-7">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est
        tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis
        justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id
        nulla.
      </p>
    </div>

    <!-- Related Products -->
    <div class="max-w-7xl mx-auto mt-12 p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div
            v-for="product in relatedProducts"
            :key="product.id"
            class="bg-white rounded-lg shadow-md p-4"
        >
          <img
              :src="product.image"
              alt="Product"
              class="w-full h-40 object-cover mb-4 rounded-lg"
          />
          <h3 class="text-gray-700 font-semibold mb-2">{{ product.name }}</h3>
          <p class="text-red-500 font-bold mb-2">${{ product.price }}</p>
          <button
              class="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Product Images
const images = [
  "https://via.placeholder.com/600x400?text=Main+Image",
  "https://via.placeholder.com/100x100?text=Image+1",
  "https://via.placeholder.com/100x100?text=Image+2",
  "https://via.placeholder.com/100x100?text=Image+3",
  // "https://via.placeholder.com/100x100?text=Image+4",
];

// Selected Image
const selectedImage = ref(images[0]);

// Related Products
const relatedProducts = [
  {
    id: 1,
    name: "Fusce Dolor Enim No",
    price: 40.0,
    image: "https://via.placeholder.com/300x200?text=Product+1",
  },
  {
    id: 2,
    name: "Lacus Dignissim Posidonium Et",
    price: 80.0,
    image: "https://via.placeholder.com/300x200?text=Product+2",
  },
  {
    id: 3,
    name: "Fusce Tempor Volu",
    price: 55.0,
    image: "https://via.placeholder.com/300x200?text=Product+3",
  },
  {
    id: 4,
    name: "Integer Eget Augue Audire",
    price: 100.0,
    image: "https://via.placeholder.com/300x200?text=Product+4",
  },
];
</script>

<style scoped>
/* Add additional scoped styles if needed */
</style>
