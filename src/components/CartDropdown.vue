<template>
  <div class="relative inline-block text-left">
    <!-- Shopping Cart Icon -->
    <button @click="toggleDropdown" class="focus:outline-none relative">
      <i class="fas fa-shopping-cart cursor-pointer text-white hover:text-gray-400 text-2xl"></i>
      <!-- Badge for Item Count -->
      <span
          v-if="totalItems > 0"
          class="absolute -top-2 -right-6 bg-red-500 text-white text-xs rounded-full px-2 py-0.5"
      >
        {{ totalItems }}
      </span>
    </button>

    <!-- Dropdown Cart Menu -->
    <div
        v-if="isOpen"
        class="absolute right-0 mt-4 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
    >
      <!-- Cart Header -->
      <div class="p-4 border-b border-gray-200">
        <h3 class="text-lg font-semibold text-gray-800">Shopping cart</h3>
      </div>

      <!-- Cart Items -->
      <div v-if="cartItems.length > 0" class="divide-y divide-gray-200 max-h-80 overflow-y-auto">
        <div
            v-for="(item, index) in cartItems"
            :key="index"
            class="flex items-center p-4"
        >
          <!-- Product Image -->
          <img
              :src="item.image"
              alt="Product Image"
              class="w-16 h-16 rounded-md object-cover"
          />

          <!-- Product Details -->
          <div class="ml-4 flex-1">
            <p class="font-semibold text-gray-800">{{ item.name }}</p>
            <p class="text-sm text-gray-500">{{ item.color }}</p>
            <p class="text-sm text-gray-500">Qty {{ item.quantity }}</p>
          </div>

          <!-- Product Price -->
          <div class="text-sm font-semibold text-gray-800">
            ${{ item.price.toFixed(2) }}
          </div>

          <!-- Remove Button -->
          <button
              @click="removeItem(index)"
              class="ml-4 text-sm text-indigo-600 hover:text-indigo-800"
          >
            Remove
          </button>
        </div>
      </div>

      <!-- Empty Cart Message -->
      <div v-else class="p-4 text-center text-gray-500">
        <p>Your cart is empty</p>
      </div>

      <!-- Cart Footer -->
      <div v-if="cartItems.length > 0" class="p-4 border-t border-gray-200">
        <div class="flex justify-between text-gray-800 font-semibold mb-4">
          <span>Subtotal</span>
          <span>${{ subtotal.toFixed(2) }}</span>
        </div>

        <!-- Checkout Button -->
        <router-link :to="{name:'checkOut'}" @click="closeDropdown">
        <button
            class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold transition"
        >
            Checkout
        </button>
        </router-link>

        <!-- Continue Shopping -->
        <p class="text-center mt-2 text-sm">
          or
          <a href="#" class="text-indigo-600 hover:text-indigo-800 font-medium">
            Continue Shopping →
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Cart State
const cartItems = ref([
  {
    name: "Throwback Hip Bag",
    price: 90.0,
    quantity: 1,
    color: "Salmon",
    image: "https://via.placeholder.com/64x64?text=Bag",
  },
  {
    name: "Medium Stuff Satchel",
    price: 32.0,
    quantity: 1,
    color: "Blue",
    image: "https://via.placeholder.com/64x64?text=Satchel",
  },
  {
    name: "Zip Tote Basket",
    price: 140.0,
    quantity: 1,
    color: "White and black",
    image: "https://via.placeholder.com/64x64?text=Tote",
  },
]);

const isOpen = ref(false);

// Total number of items in the cart
const totalItems = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.quantity, 0);
});

// Subtotal price calculation
const subtotal = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
});

// Toggle dropdown visibility
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
const closeDropdown = () => {
  isOpen.value = false;
};

// Remove an item from the cart
const removeItem = (index) => {
  cartItems.value.splice(index, 1);
};
</script>

<style scoped>
/* Add additional styling if needed */
</style>
