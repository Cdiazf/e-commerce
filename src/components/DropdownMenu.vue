<template>
  <div class="relative inline-block text-left">
    <!-- Trigger Button -->
    <button @click="toggleDropdown" class="focus:outline-none">
      <i class="fas fa-user cursor-pointer text-white hover:text-gray-400"></i>
    </button>

    <!-- Dropdown Menu -->
    <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
    >
      <ul class="py-1">
        <li>
          <a
              href="#"
              class="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
          >
            Account settings
          </a>
        </li>
        <li>
          <a
              href="#"
              class="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
          >
            Support
          </a>
        </li>
        <li>
          <a
              href="#"
              class="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
          >
            License
          </a>
        </li>
        <li>
          <a
              href="#"
              class="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
          >
            Sign out
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isOpen = ref(false);

// Toggle dropdown visibility
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

// Close dropdown when clicking outside
const closeDropdown = (event) => {
  if (!event.target.closest(".relative")) {
    isOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener("click", closeDropdown);
});

onUnmounted(() => {
  window.removeEventListener("click", closeDropdown);
});
</script>

<style scoped>
/* Scoped styles if needed */
</style>
