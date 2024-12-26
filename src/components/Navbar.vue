<template>
  <nav class="bg-gray-900 text-white px-6 py-4">
    <div class="flex justify-between items-center max-w-7xl mx-auto">
      <!-- Logo -->
      <div class="text-2xl font-bold">
        <router-link :to="{name:'shopPage'}">
          PORTO
        </router-link>
      </div>
      <!-- Menu Items -->
      <ul class="hidden md:flex space-x-6">
        <li><a href="#" class="hover:text-gray-400">Shop</a></li>
        <li><a href="#" class="hover:text-gray-400">My Account</a></li>
        <li><a href="#" class="hover:text-gray-400">Wishlist</a></li>
        <li><a href="#" class="hover:text-gray-400">Blog</a></li>
      </ul>
      <!-- Search and Icons -->
      <div class="flex items-center space-x-4">
        <i class="fas fa-search cursor-pointer"></i>
        <DropdownMenu/>
        <CartDropdown />
      </div>
    </div>
  </nav>
</template>

<script setup>
import DropdownMenu from "@/components/DropdownMenu.vue";
import CartDropdown from "@/components/CartDropdown.vue";
</script>

<style scoped>
/* Add specific styles if needed */
</style>
